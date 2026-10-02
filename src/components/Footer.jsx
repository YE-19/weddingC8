import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ couple, eventDate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 text-center border-t border-[#DFC187]/20 mt-6 bg-[#240107]">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
        <h3 className="font-cinzel text-lg font-bold tracking-[0.18em] text-[#DFC187] uppercase drop-shadow-xs">
          {couple.primary || 'Hassan & Haidy'}
        </h3>

        <p className="font-cormorant text-sm text-[#DFC187]/80 font-medium tracking-wide">
          {eventDate.display || 'October 27, 2026'} • {eventDate.year || '2026'}
        </p>

        <button
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#31030B] text-[#DFC187] text-[11px] font-cinzel uppercase tracking-wider font-bold hover:bg-[#DFC187] hover:text-[#3B050E] transition-all cursor-pointer shadow-xs border border-[#DFC187]/40"
        >
          <ArrowUp className="w-3 h-3" />
          <span>Back to Top</span>
        </button>

        <p className="text-[10px] text-[#DFC187]/70 tracking-wider uppercase pt-3 flex items-center justify-center gap-1 font-cinzel font-medium">
          Made with <Heart className="w-2.5 h-2.5 text-[#DFC187] fill-[#DFC187]" /> for {couple.primary || 'Hassan & Haidy'}
        </p>
      </div>
    </footer>
  );
}
