import React from 'react';

/**
 * Top Golden Botanical Line-Art Foliage Header (Exact Match to Screenshot)
 */
export function GoldenBotanicalArch({ className = 'w-56 sm:w-64 h-auto' }) {
  return (
    <div className={`pointer-events-none select-none mx-auto ${className}`}>
      <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_2px_10px_rgba(216,178,110,0.25)]">
        {/* Central main bloom petals in fine gold lines */}
        <path d="M 160 15 C 150 35 142 55 160 72 C 178 55 170 35 160 15 Z" stroke="#DFC187" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 160 25 C 154 38 150 52 160 62 C 170 52 166 38 160 25 Z" stroke="#D8B26E" strokeWidth="0.8" strokeOpacity="0.8" />
        <path d="M 160 40 L 160 72" stroke="#DFC187" strokeWidth="0.9" />

        {/* Left main flower petals */}
        <path d="M 145 35 C 125 32 105 45 118 68 C 135 68 145 55 145 35 Z" stroke="#DFC187" strokeWidth="1.1" />
        <path d="M 140 45 C 128 42 118 50 125 62" stroke="#D8B26E" strokeWidth="0.8" />
        <path d="M 152 52 C 135 62 128 78 142 90 C 155 85 158 70 152 52 Z" stroke="#DFC187" strokeWidth="1.1" />
        
        {/* Right main flower petals */}
        <path d="M 175 35 C 195 32 215 45 202 68 C 185 68 175 55 175 35 Z" stroke="#DFC187" strokeWidth="1.1" />
        <path d="M 180 45 C 192 42 202 50 195 62" stroke="#D8B26E" strokeWidth="0.8" />
        <path d="M 168 52 C 185 62 192 78 178 90 C 165 85 162 70 168 52 Z" stroke="#DFC187" strokeWidth="1.1" />

        {/* Left sweeping foliage branches */}
        <path d="M 125 50 C 95 35 65 38 25 72" stroke="#DFC187" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 105 42 C 85 25 60 20 40 32 C 55 42 75 40 95 48" stroke="#D8B26E" strokeWidth="1.0" />
        <path d="M 75 30 C 65 15 45 10 30 20 C 42 30 58 30 70 36" stroke="#DFC187" strokeWidth="0.9" />
        {/* Left leaves */}
        <path d="M 50 48 C 35 48 20 58 22 72 C 38 68 45 58 50 48 Z" stroke="#DFC187" strokeWidth="0.9" />
        <path d="M 80 45 C 68 48 55 58 60 70 C 72 65 78 55 80 45 Z" stroke="#D8B26E" strokeWidth="0.8" />
        <path d="M 35 32 C 22 28 12 38 18 48 C 28 45 32 38 35 32 Z" stroke="#DFC187" strokeWidth="0.85" />
        <path d="M 95 32 C 88 18 72 15 65 24 C 75 30 85 30 95 32 Z" stroke="#D8B26E" strokeWidth="0.8" />

        {/* Right sweeping foliage branches */}
        <path d="M 195 50 C 225 35 255 38 295 72" stroke="#DFC187" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 215 42 C 235 25 260 20 280 32 C 265 42 245 40 225 48" stroke="#D8B26E" strokeWidth="1.0" />
        <path d="M 245 30 C 255 15 275 10 290 20 C 278 30 262 30 250 36" stroke="#DFC187" strokeWidth="0.9" />
        {/* Right leaves */}
        <path d="M 270 48 C 285 48 300 58 298 72 C 282 68 275 58 270 48 Z" stroke="#DFC187" strokeWidth="0.9" />
        <path d="M 240 45 C 252 48 265 58 260 70 C 248 65 242 55 240 45 Z" stroke="#D8B26E" strokeWidth="0.8" />
        <path d="M 285 32 C 298 28 308 38 302 48 C 292 45 288 38 285 32 Z" stroke="#DFC187" strokeWidth="0.85" />
        <path d="M 225 32 C 232 18 248 15 255 24 C 245 30 235 30 225 32 Z" stroke="#D8B26E" strokeWidth="0.8" />

        {/* Delicate golden accent dots & stamen */}
        <circle cx="160" cy="72" r="1.6" fill="#DFC187" />
        <circle cx="152" cy="76" r="1.3" fill="#DFC187" />
        <circle cx="168" cy="76" r="1.3" fill="#DFC187" />
        <circle cx="145" cy="80" r="1.1" fill="#DFC187" />
        <circle cx="175" cy="80" r="1.1" fill="#DFC187" />
      </svg>
    </div>
  );
}

/**
 * High-elegance Gold Filigree Corner Motif (SVG Vector)
 */
export function GoldFiligreeCorner({ className = 'w-10 h-10', position = 'top-left' }) {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
      case 'top-left':
      default:
        return '';
    }
  };

  return (
    <div className={`pointer-events-none select-none ${getTransform()} ${className}`}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Main corner lines in Gold */}
        <path d="M 4 56 L 4 10 C 4 6.7 6.7 4 10 4 L 56 4" stroke="#DFC187" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 8 52 L 8 14 C 8 10.7 10.7 8 14 8 L 52 8" stroke="#D8B26E" strokeWidth="0.8" strokeOpacity="0.8" strokeLinecap="round" />
        
        {/* Ornate corner flourish scrolls */}
        <path d="M 12 12 C 16 12 20 16 20 20 C 20 24 16 26 13 24 C 10 22 10 17 14 14 Z" stroke="#DFC187" strokeWidth="0.9" fill="none" />
        <path d="M 14 14 C 18 10 24 10 28 13 C 32 16 31 22 26 23 C 22 24 19 20 22 17" stroke="#DFC187" strokeWidth="0.8" fill="none" />
        <path d="M 14 14 C 10 18 10 24 13 28 C 16 32 22 31 23 26 C 24 22 20 19 17 22" stroke="#DFC187" strokeWidth="0.8" fill="none" />
        
        {/* Gold corner dots/accents */}
        <circle cx="10" cy="10" r="1.5" fill="#DFC187" />
        <circle cx="56" cy="4" r="1.8" fill="#DFC187" />
        <circle cx="4" cy="56" r="1.8" fill="#DFC187" />
        <circle cx="34" cy="4" r="1.2" fill="#D8B26E" />
        <circle cx="4" cy="34" r="1.2" fill="#D8B26E" />
      </svg>
    </div>
  );
}

/**
 * Top & Bottom Pair of Golden Corner Brackets
 * Frames section headers like "CEREMONY INFO"
 */
export function GoldHeaderFrame({ children, className = '' }) {
  return (
    <div className={`relative px-8 py-3 ${className}`}>
      <GoldFiligreeCorner position="top-left" className="absolute -top-2 left-0 w-8 h-8 sm:w-10 sm:h-10" />
      <GoldFiligreeCorner position="top-right" className="absolute -top-2 right-0 w-8 h-8 sm:w-10 sm:h-10" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Exact Match Gold Divider from Screenshot
 * Features central ornamental flourish scroll with diamond and flanking bead dots
 */
export function GoldDivider({ className = 'my-4' }) {
  return (
    <div className={`flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto select-none ${className}`}>
      {/* Left line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#DFC187] to-[#DFC187] flex-1" />
      
      {/* Left bead dots */}
      <div className="w-1 h-1 rounded-full bg-[#DFC187]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#DFC187]" />

      {/* Central Ornamental Diamond Flourish */}
      <div className="px-1.5 flex items-center justify-center">
        <svg viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-4">
          <path d="M 18 1 L 25 8 L 18 15 L 11 8 Z" stroke="#DFC187" strokeWidth="1.2" fill="#3B050E" />
          <path d="M 18 4 L 22 8 L 18 12 L 14 8 Z" fill="#DFC187" />
          <path d="M 8 8 C 5 5 2 5 0 8 C 2 11 5 11 8 8" stroke="#DFC187" strokeWidth="1" />
          <path d="M 28 8 C 31 5 34 5 36 8 C 34 11 31 11 28 8" stroke="#DFC187" strokeWidth="1" />
        </svg>
      </div>

      {/* Right bead dots */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#DFC187]" />
      <div className="w-1 h-1 rounded-full bg-[#DFC187]" />

      {/* Right line */}
      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#DFC187] to-[#DFC187] flex-1" />
    </div>
  );
}

/**
 * Luxurious Royal Burgundy & Gold Arched Calendar Frame
 */
export function GoldVintageCalendarFrame({ children, className = '' }) {
  return (
    <div className={`relative p-5 sm:p-7 rounded-[26px] bg-[#31030B]/95 backdrop-blur-xs border-[1.5px] border-[#DFC187]/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-visible ${className}`}>
      {/* Top Ornamental Crest */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-7 pointer-events-none select-none z-10">
        <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 60 2 C 60 2 63 9 68 10 C 73 11 76 8 76 5 C 76 2 71 3 67 7" stroke="#DFC187" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 60 2 C 60 2 57 9 52 10 C 47 11 44 8 44 5 C 44 2 49 3 53 7" stroke="#DFC187" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 60 0 L 60 8" stroke="#DFC187" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="1" r="1.8" fill="#DFC187" />
          <path d="M 40 12 C 48 11 54 6 60 6 C 66 6 72 11 80 12" stroke="#DFC187" strokeWidth="1.1" strokeLinecap="round" />
          <path d="M 32 14 C 36 10 40 14 44 14" stroke="#D8B26E" strokeWidth="0.8" />
          <path d="M 88 14 C 84 10 80 14 76 14" stroke="#D8B26E" strokeWidth="0.8" />
          <circle cx="30" cy="14" r="1.2" fill="#DFC187" />
          <circle cx="90" cy="14" r="1.2" fill="#DFC187" />
        </svg>
      </div>

      {/* Bottom Ornamental Crest */}
      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-7 pointer-events-none select-none z-10 scale-y-[-1]">
        <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 60 2 C 60 2 63 9 68 10 C 73 11 76 8 76 5 C 76 2 71 3 67 7" stroke="#DFC187" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 60 2 C 60 2 57 9 52 10 C 47 11 44 8 44 5 C 44 2 49 3 53 7" stroke="#DFC187" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 60 0 L 60 8" stroke="#DFC187" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="1" r="1.8" fill="#DFC187" />
          <path d="M 40 12 C 48 11 54 6 60 6 C 66 6 72 11 80 12" stroke="#DFC187" strokeWidth="1.1" strokeLinecap="round" />
          <circle cx="30" cy="14" r="1.2" fill="#DFC187" />
          <circle cx="90" cy="14" r="1.2" fill="#DFC187" />
        </svg>
      </div>

      {/* Left side vertical gold beads */}
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-[#DFC187]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#DFC187]" />
        <div className="w-1 h-1 rounded-full bg-[#DFC187]" />
      </div>

      {/* Right side vertical gold beads */}
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-[#DFC187]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#DFC187]" />
        <div className="w-1 h-1 rounded-full bg-[#DFC187]" />
      </div>

      {/* Inner thin gold line */}
      <div className="absolute inset-2 sm:inset-2.5 rounded-[20px] border border-[#DFC187]/30 pointer-events-none" />

      {/* Main Content inside Calendar */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Top Hero Gold Double-Line Border Frame with Corner Accents
 */
export function HeroGoldFrame({ children, className = '' }) {
  return (
    <div className={`relative p-6 sm:p-8 rounded-[24px] border border-[#DFC187]/50 shadow-[0_8px_30px_rgba(0,0,0,0.4)] bg-[#31030B]/90 backdrop-blur-xs ${className}`}>
      {/* Corner Filigrees */}
      <GoldFiligreeCorner position="top-left" className="absolute top-1 left-1 w-9 h-9" />
      <GoldFiligreeCorner position="top-right" className="absolute top-1 right-1 w-9 h-9" />
      <GoldFiligreeCorner position="bottom-left" className="absolute bottom-1 left-1 w-9 h-9" />
      <GoldFiligreeCorner position="bottom-right" className="absolute bottom-1 right-1 w-9 h-9" />

      {/* Inner thin border */}
      <div className="absolute inset-2 rounded-[18px] border border-[#DFC187]/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
