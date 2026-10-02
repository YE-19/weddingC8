import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { GoldenBotanicalArch, GoldFiligreeCorner } from './FloralElements';

// Sparkling particles erupting across the screen when clicking Open
const celebrationParticles = [
  { id: 1, angle: 0, distance: 230, scale: 1.1, rot: 180, color: '#DFC187' },
  { id: 2, angle: 30, distance: 260, scale: 0.9, rot: -240, color: '#F4E4C2' },
  { id: 3, angle: 60, distance: 290, scale: 1.2, rot: 320, color: '#D8B26E' },
  { id: 4, angle: 90, distance: 240, scale: 0.85, rot: -180, color: '#DFC187' },
  { id: 5, angle: 120, distance: 280, scale: 1.15, rot: 270, color: '#FAF2E1' },
  { id: 6, angle: 150, distance: 260, scale: 0.9, rot: -290, color: '#C59F54' },
  { id: 7, angle: 180, distance: 240, scale: 1.1, rot: 210, color: '#DFC187' },
  { id: 8, angle: 210, distance: 270, scale: 0.85, rot: -160, color: '#D8B26E' },
  { id: 9, angle: 240, distance: 250, scale: 1.2, rot: 300, color: '#F4E4C2' },
  { id: 10, angle: 270, distance: 290, scale: 0.9, rot: -220, color: '#DFC187' },
  { id: 11, angle: 300, distance: 250, scale: 1.1, rot: 240, color: '#FAF2E1' },
  { id: 12, angle: 330, distance: 270, scale: 0.85, rot: -190, color: '#D8B26E' },
  { id: 13, angle: 15, distance: 430, scale: 1.0, rot: 480, color: '#DFC187' },
  { id: 14, angle: 45, distance: 480, scale: 0.85, rot: -520, color: '#F4E4C2' },
  { id: 15, angle: 75, distance: 450, scale: 1.1, rot: 540, color: '#C59F54' },
  { id: 16, angle: 105, distance: 500, scale: 0.95, rot: -460, color: '#DFC187' },
  { id: 17, angle: 135, distance: 460, scale: 0.85, rot: 500, color: '#FAF2E1' },
  { id: 18, angle: 165, distance: 490, scale: 1.1, rot: -540, color: '#D8B26E' },
  { id: 19, angle: 195, distance: 440, scale: 0.8, rot: 470, color: '#DFC187' },
  { id: 20, angle: 225, distance: 470, scale: 1.05, rot: -510, color: '#F4E4C2' },
  { id: 21, angle: 255, distance: 510, scale: 0.85, rot: 530, color: '#C59F54' },
  { id: 22, angle: 285, distance: 460, scale: 1.1, rot: -490, color: '#DFC187' },
  { id: 23, angle: 315, distance: 490, scale: 0.8, rot: 520, color: '#FAF2E1' },
  { id: 24, angle: 345, distance: 440, scale: 1.0, rot: -480, color: '#D8B26E' },
];

export default function EnvelopeCover({ couple, eventDate, isOpened, onOpen, onStartAudio }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpened || isOpening) return;
    setIsOpening(true);

    if (onStartAudio) {
      onStartAudio();
    }

    try {
      // 1. Central high-energy Gold & Burgundy burst
      confetti({
        particleCount: 85,
        spread: 130,
        startVelocity: 45,
        origin: { y: 0.65 },
        colors: ['#DFC187', '#D8B26E', '#F4E4C2', '#C59F54', '#FFFFFF'],
        scalar: 1.2,
      });

      // 2. Side showers
      setTimeout(() => {
        confetti({
          particleCount: 55,
          angle: 60,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.15, y: 0.7 },
          colors: ['#DFC187', '#D8B26E', '#F4E4C2', '#FFFFFF'],
          scalar: 1.1,
        });
        confetti({
          particleCount: 55,
          angle: 120,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.85, y: 0.7 },
          colors: ['#DFC187', '#D8B26E', '#F4E4C2', '#FFFFFF'],
          scalar: 1.1,
        });
      }, 150);

      // 3. Falling shower of golden confetti
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 150,
          startVelocity: 28,
          origin: { y: 0.2 },
          colors: ['#DFC187', '#D8B26E', '#FAF2E1', '#EAD3A0'],
          scalar: 1.15,
          gravity: 0.7,
        });
      }, 280);
    } catch (e) {
      console.error(e);
    }

    // Delay for opening animation
    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1150);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="envelope-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4D0A1B] via-[#3B050E] to-[#240107] p-4 sm:p-6 select-none overflow-hidden"
        >
          {/* Main Invitation Card (Burgundy Velvet Card with Gold Filigree Framing) */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative w-full max-w-[320px] sm:max-w-[350px] bg-[#36040C] rounded-[28px] sm:rounded-[32px] pt-6 pb-8 px-6 text-center shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-2 border-[#DFC187]/50 overflow-hidden"
          >
            {/* Elegant Corner Filigrees */}
            <GoldFiligreeCorner position="top-left" className="absolute top-2 left-2 w-9 h-9" />
            <GoldFiligreeCorner position="top-right" className="absolute top-2 right-2 w-9 h-9" />
            <GoldFiligreeCorner position="bottom-left" className="absolute bottom-2 left-2 w-9 h-9" />
            <GoldFiligreeCorner position="bottom-right" className="absolute bottom-2 right-2 w-9 h-9" />

            {/* Inner fine gold border */}
            <div className="absolute inset-3 rounded-[22px] border border-[#DFC187]/25 pointer-events-none" />

            {/* Inner Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Top Miniature Botanical Foliage Header */}
              <div className="w-full pt-1 pb-2 flex justify-center opacity-90">
                <GoldenBotanicalArch className="w-48 sm:w-52" />
              </div>

              {/* Monogram / Header in Gold */}
              <p className="font-cinzel text-[11px] font-semibold tracking-[0.28em] text-[#DFC187] uppercase mb-1">
                THE WEDDING OF
              </p>

              {/* Couple Calligraphy Names in Radiant Gold */}
              <div className="space-y-0 my-1">
                <h1 className="font-alex text-4xl sm:text-5xl text-[#DFC187] font-normal tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(216,178,110,0.4)]">
                  {couple.groom || 'Hassan'}
                </h1>
                <p className="font-serif text-2xl text-[#DFC187]/85 font-normal my-0.5">
                  &
                </p>
                <h1 className="font-alex text-4xl sm:text-5xl text-[#DFC187] font-normal tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(216,178,110,0.4)]">
                  {couple.bride || 'Haidy'}
                </h1>
              </div>

              {/* Thin Line Divider with Center Gold Diamond */}
              <div className="flex items-center justify-center gap-2 w-32 my-3">
                <div className="h-[1px] bg-[#DFC187]/40 flex-1" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#DFC187] bg-[#DFC187]" />
                <div className="h-[1px] bg-[#DFC187]/40 flex-1" />
              </div>

              {/* Date in Gold */}
              <p className="font-cormorant text-sm sm:text-base text-[#DFC187] font-medium tracking-wide">
                {eventDate.display || 'October 27, 2026'}
              </p>

              {/* Subtitle in Gold */}
              <p className="font-cinzel text-[10px] sm:text-xs text-[#DFC187]/75 font-normal tracking-widest uppercase mt-1 mb-5">
                Cordially Invites You
              </p>

              {/* Radiant Gold "Open" Button */}
              <div className="relative w-full flex items-center justify-center">
                {/* Celebration Explosion Particles */}
                {isOpening && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                    {celebrationParticles.map((p) => {
                      const rad = (p.angle * Math.PI) / 180;
                      const targetX = Math.cos(rad) * p.distance;
                      const targetY = Math.sin(rad) * p.distance;

                      return (
                        <motion.div
                          key={p.id}
                          initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                          animate={{
                            x: [0, targetX * 0.35, targetX],
                            y: [0, targetY * 0.35 - 30, targetY],
                            scale: [0, p.scale * 1.35, p.scale],
                            opacity: [0, 1, 1, 0],
                            rotate: [0, p.rot * 0.5, p.rot],
                          }}
                          transition={{
                            duration: 1.1,
                            ease: [0.12, 0.95, 0.22, 1],
                          }}
                          className="absolute pointer-events-none select-none drop-shadow-md"
                        >
                          <div
                            className="w-3.5 h-3.5 rounded-full shadow-xs"
                            style={{ backgroundColor: p.color }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* The "Open" Button */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenClick}
                  disabled={isOpening}
                  className="w-full max-w-[170px] py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#DFC187] via-[#E8CD96] to-[#C7A158] hover:from-[#EED8A7] hover:to-[#DFC187] text-[#3B050E] font-serif tracking-wider font-bold text-sm sm:text-base shadow-[0_6px_25px_rgba(216,178,110,0.45)] transition-all duration-300 cursor-pointer relative z-10 border border-[#FAF2E1]"
                >
                  {isOpening ? 'Opening...' : 'Open'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
