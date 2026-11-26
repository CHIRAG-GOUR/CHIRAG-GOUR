// Snakes & Ladders rules + the (lovingly) loaded dice. Pure logic, no rendering, so it can be tested.
// House rule: Chirag always wins. The visitor can never land on 100; near the top the snakes find
// them; Chirag looks honest early, then dodges snakes and finishes with an exact roll.

export const LADDERS = { 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };
export const SNAKES = { 17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 79 };

const pickFrom = (arr, rand) => arr[Math.floor(rand() * arr.length)];

/** Where a roll takes you: exact roll needed for 100, overshoot means you stay put. */
export function resolve(from, roll) {
  const land = from + roll;
  if (land > 100) return { land: from, final: from, overshoot: true };
  return { land, final: LADDERS[land] || SNAKES[land] || land, overshoot: false };
}

const options = (pos) => [1, 2, 3, 4, 5, 6].map(v => ({ v, ...resolve(pos, v) }));

/** The visitor's roll: looks random, but 100 is never on the table. */
export function pickYourRoll(you, chirag, rand = Math.random) {
  let allowed = options(you).filter(o => o.final !== 100);
  const snakeOpts = allowed.filter(o => SNAKES[o.land]);
  if (you >= 78 && snakeOpts.length && (you >= chirag - 4 || rand() < 0.55)) return pickFrom(snakeOpts, rand).v;
  if (you - chirag > 14) { const tame = allowed.filter(o => !LADDERS[o.land]); if (tame.length) allowed = tame; }
  if (you >= 88 && chirag < 70) { const slow = allowed.filter(o => o.final < 94); if (slow.length) allowed = slow; }
  const ladderOpts = allowed.filter(o => LADDERS[o.land]);
  if (you < 55 && ladderOpts.length && rand() < 0.4) return pickFrom(ladderOpts, rand).v;
  return pickFrom(allowed, rand).v;
}

/** Chirag's roll: honest-looking early, then steers to ladders and away from snakes. */
export function pickChiragRoll(chirag, rand = Math.random) {
  const opts = options(chirag);
  const win = opts.find(o => o.final === 100);
  if (win) return win.v;
  if (chirag < 35 && rand() < 0.7) return pickFrom(opts, rand).v;
  const safe = opts.filter(o => !SNAKES[o.land] && !o.overshoot).sort((a, b) => b.final - a.final);
  if (!safe.length) return pickFrom(opts, rand).v;
  return rand() < 0.6 ? safe[0].v : pickFrom(safe.slice(0, 3), rand).v;
}
