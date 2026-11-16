import React, { useEffect, useRef, useState } from 'react';
import { Gamepad2, Play, RotateCcw, Trophy, Sparkles } from 'lucide-react';

export const MiniGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('chirag_game_highscore');
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let frames = 0;
    let currentScore = 0;

    // Player (Roo / Hero)
    const player = {
      x: 50,
      y: 130,
      width: 28,
      height: 36,
      dy: 0,
      gravity: 0.6,
      jumpForce: -11,
      isGrounded: false
    };

    // Obstacles (Bugs)
    interface Obstacle {
      x: number;
      y: number;
      width: number;
      height: number;
      label: string;
      speed: number;
    }
    const obstacles: Obstacle[] = [];
    const bugLabels = ['Bug', 'Err 404', 'Conflict', 'Leak'];

    // Jump Handler
    const handleJump = () => {
      if (player.isGrounded) {
        player.dy = player.jumpForce;
        player.isGrounded = false;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Main Game Loop
    const loop = () => {
      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Ground
      ctx.fillStyle = '#E2E8F0';
      ctx.fillRect(0, 166, canvas.width, 34);

      ctx.fillStyle = '#0284C7';
      ctx.fillRect(0, 164, canvas.width, 2);

      // Apply Player Physics
      player.dy += player.gravity;
      player.y += player.dy;

      if (player.y >= 130) {
        player.y = 130;
        player.dy = 0;
        player.isGrounded = true;
      }

      // Draw Player (Roo the Kangaroo / Hero)
      ctx.fillStyle = '#2563EB';
      ctx.beginPath();
      ctx.roundRect(player.x, player.y, player.width, player.height, 6);
      ctx.fill();

      // Kangaroo ears
      ctx.fillStyle = '#1D4ED8';
      ctx.fillRect(player.x + 4, player.y - 6, 6, 8);
      ctx.fillRect(player.x + 18, player.y - 6, 6, 8);

      // Eyes
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(player.x + 16, player.y + 8, 5, 5);
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(player.x + 18, player.y + 10, 2, 2);

      // Spawn Obstacles
      if (frames % 100 === 0) {
        const label = bugLabels[Math.floor(Math.random() * bugLabels.length)];
        obstacles.push({
          x: canvas.width,
          y: 136,
          width: 30,
          height: 30,
          label,
          speed: 4 + Math.min(3, Math.floor(currentScore / 100))
        });
      }

      // Update & Draw Obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const ob = obstacles[i];
        ob.x -= ob.speed;

        // Draw Bug
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.roundRect(ob.x, ob.y, ob.width, ob.height, 6);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(ob.label, ob.x + ob.width / 2, ob.y + 18);

        // Collision Check
        if (
          player.x < ob.x + ob.width &&
          player.x + player.width > ob.x &&
          player.y < ob.y + ob.height &&
          player.y + player.height > ob.y
        ) {
          // Game Over
          setGameOver(true);
          setIsPlaying(false);
          if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem('chirag_game_highscore', currentScore.toString());
          }
          return;
        }

        // Passed obstacle
        if (ob.x + ob.width < 0) {
          obstacles.splice(i, 1);
          currentScore += 20;
          setScore(currentScore);
        }
      }

      // Continuous Score increment
      if (frames % 10 === 0) {
        currentScore += 1;
        setScore(currentScore);
      }

      // HUD Score in Canvas
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`COMMITS: ${currentScore}`, canvas.width - 20, 25);

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);

  return (
    <section id="game" className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-3">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>Interactive Mini-Game // Roo &amp; Mario Commit Runner</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Jump Over Bugs. Ship Clean Commits.
        </h3>
        <p className="text-xs text-slate-500 font-mono mb-6 max-w-lg mx-auto">
          Press <strong className="text-slate-800">Spacebar</strong>, <strong className="text-slate-800">Up Arrow</strong>, or tap canvas to jump. Avoid bugs to ramp your development score!
        </p>

        {/* Canvas Chamber */}
        <div className="relative inline-block border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg bg-slate-50">
          <canvas
            ref={canvasRef}
            width={640}
            height={200}
            onClick={() => {
              if (!isPlaying) startGame();
              else {
                // Trigger tap jump
                window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
              }
            }}
            className="w-full max-w-[640px] h-[200px] cursor-pointer block"
          />

          {/* Overlay when not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
              {gameOver ? (
                <div className="space-y-3">
                  <div className="text-base font-bold text-red-600 font-mono">
                    💥 Build Broken! Runtime Error.
                  </div>
                  <div className="text-xs font-mono text-slate-700">
                    Final Score: <strong className="text-blue-600 text-sm">{score}</strong> commits
                  </div>
                  <button
                    onClick={startGame}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-Run Pipeline (Play Again)</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={startGame}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Commit Runner</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* High score badge */}
        <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            High Score: <strong className="text-slate-800">{highScore}</strong>
          </span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            Speed: Responsive 60FPS
          </span>
        </div>

      </div>
    </section>
  );
};
