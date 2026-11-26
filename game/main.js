// Chirag: The Game — a tiny 3D arcade starring a chibi Chirag.
// Modes live in js/modes/*; shared engine in js/core.js; the cast in js/character.js; worlds in js/world.js.
import { renderer, scene, resize, render, clock, ui, $, store, audio, particles, input, sfx } from './js/core.js';
import { createTitle } from './js/modes/title.js';
import { createSnake } from './js/modes/snake.js';
import { createSpace } from './js/modes/space.js';
import { createLadders } from './js/modes/ladders.js';

const api = { gameOver, finish };
const modes = {
  title: createTitle(),
  snake: createSnake(api),
  space: createSpace(api),
  ladders: createLadders(api),
};
let mode = null;
let lastMode = 'snake';

function setMode(name) {
  if (mode) mode.exit();
  particles.clear();
  scene.fog = null;
  ui.over.classList.add('hidden');
  mode = modes[name];
  mode.enter(clock.elapsedTime);
}

function start(name) {
  lastMode = name;
  audio.ensure();
  ui.menu.classList.add('hidden');
  setMode(name);
}

function toMenu() {
  setMode('title');
  ui.hud.classList.add('hidden');
  ui.menu.classList.remove('hidden');
  refreshBests();
}

function refreshBests() {
  $('best-snake').textContent = store.get('best-snake');
  $('best-space').textContent = store.get('best-space');
  const rec = store.get('ladders-record', { chirag: 0, you: 0 });
  $('best-ladders').textContent = `CHIRAG ${rec.chirag} – ${rec.you} YOU`;
}

function showOver({ title, big, sub, retry = '▶ PLAY AGAIN' }) {
  $('over-title').textContent = title;
  $('over-score').textContent = big;
  $('over-best').textContent = sub;
  $('btn-retry').textContent = retry;
  ui.over.classList.remove('hidden');
}

function gameOver(name, score) {
  const key = 'best-' + name;
  const best = store.get(key);
  const isBest = score > best;
  if (isBest) store.set(key, score);
  sfx.over();
  showOver({
    title: isBest ? 'NEW HIGH SCORE!' : 'GAME OVER',
    big: String(score),
    sub: isBest ? 'Chirag is proud of you.' : `best: ${Math.max(best, score)}`,
  });
}

function finish(opts) { showOver(opts); }

// ------------------------------------------------------------------ buttons
document.querySelectorAll('.mode').forEach(b => b.addEventListener('click', () => start(b.dataset.mode)));
$('btn-retry').addEventListener('click', () => start(lastMode));
$('btn-menu').addEventListener('click', toMenu);
$('btn-pause').addEventListener('click', toMenu);
$('btn-roll').addEventListener('click', () => { audio.ensure(); modes.ladders.clickRoll(); });
const muteBtn = $('btn-mute');
const renderMute = () => (muteBtn.textContent = audio.muted ? '🔇' : '🔊');
renderMute();
muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; store.set('muted', audio.muted); renderMute(); });

// ------------------------------------------------------------------ keyboard
window.addEventListener('keydown', e => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
  if (e.key === 'Escape') return toMenu();
  if (e.key === 'm' || e.key === 'M') return muteBtn.click();
  if (e.key === 'Enter' && !ui.over.classList.contains('hidden')) return start(lastMode);
  if (mode && mode.onKey) mode.onKey(e.key, true);
});
window.addEventListener('keyup', e => { if (mode && mode.onKey) mode.onKey(e.key, false); });

// ------------------------------------------------------------------ touch: swipe + on-screen pads
let touch0 = null;
const canvasEl = $('c');
canvasEl.addEventListener('touchstart', e => { touch0 = e.touches[0]; }, { passive: true });
canvasEl.addEventListener('touchend', e => {
  if (!touch0 || mode !== modes.snake) return;
  const t = e.changedTouches[0], dx = t.clientX - touch0.clientX, dy = t.clientY - touch0.clientY;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
  modes.snake.turn(Math.abs(dx) > Math.abs(dy) ? { x: Math.sign(dx), y: 0 } : { x: 0, y: Math.sign(dy) });
});
ui.padSnake.querySelectorAll('button').forEach(b => b.addEventListener('pointerdown', e => {
  e.preventDefault();
  const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[b.dataset.dir];
  modes.snake.turn({ x: d[0], y: d[1] });
}));
ui.padSpace.querySelectorAll('button').forEach(b => {
  const set = v => (input[b.dataset.hold] = v);
  b.addEventListener('pointerdown', e => { e.preventDefault(); set(true); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, () => set(false)));
});
// ------------------------------------------------------------------ boot + loop
window.addEventListener('resize', resize);
resize();

const deepLink = new URLSearchParams(location.search).get('mode');
if (modes[deepLink] && deepLink !== 'title') start(deepLink);
else toMenu();

let booted = false;
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  if (mode) mode.update(dt, t);
  particles.update(dt);
  render();
  if (!booted) { booted = true; const l = $('loading'); if (l) l.remove(); }
});
