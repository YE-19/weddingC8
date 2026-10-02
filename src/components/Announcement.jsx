import React from 'react';
import { motion } from 'framer-motion';
import { GoldenBotanicalArch, GoldFiligreeCorner, GoldDivider } from './FloralElements';

export default function Announcement({ couple, eventDate }) {
  return (
    <section className="relative pt-6 pb-10 px-3.5 sm:px-4 text-center overflow-visible bg-[#3B050E]">
      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        {/* ============================================================
            SECTION 1: TALL HERO SECTION (MATCHING SCREENSHOT 1)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full max-w-[340px] sm:max-w-[360px] min-h-[460px] sm:min-h-[500px] pt-4 pb-10 px-6 my-2 select-none flex flex-col justify-between items-center"
        >
          {/* Top Golden Botanical Foliage Crown */}
          <div className="w-full pt-2 pb-6 flex justify-center">
            <GoldenBotanicalArch className="w-64 sm:w-72" />
          </div>

          {/* Inner Content inside Hero Section */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto text-center py-2">
            {/* "THE WEDDING OF" in Gold Serif */}
            <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.32em] text-[#DFC187] uppercase mt-2 mb-8 sm:mb-10 opacity-95">
              {couple.eventTitle || 'THE WEDDING OF'}
            </p>

            {/* Groom Name in Radiant Gold Calligraphy Script */}
            <h1 className="font-alex text-6xl sm:text-7xl text-[#DFC187] font-normal tracking-wide leading-none my-2 drop-shadow-[0_2px_14px_rgba(216,178,110,0.4)]">
              {couple.groom || 'Hassan'}
            </h1>

            {/* & in Gold */}
            <p className="font-serif text-3xl sm:text-4xl text-[#DFC187]/85 font-normal my-2.5 drop-shadow-xs">
              &
            </p>

            {/* Bride Name in Radiant Gold Calligraphy Script */}
            <h1 className="font-alex text-6xl sm:text-7xl text-[#DFC187] font-normal tracking-wide leading-none my-2 mb-4 drop-shadow-[0_2px_14px_rgba(216,178,110,0.4)]">
              {couple.bride || 'Haidy'}
            </h1>
          </div>
        </motion.div>

        {/* Top Gold Divider & Corner Flourishes separating sections */}
        <div className="w-full my-4">
          <GoldDivider className="mb-4" />
        </div>

        {/* ============================================================
            SECTION 2: CEREMONY INFO CARD (MATCHING SCREENSHOT 2)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative w-full max-w-[340px] sm:max-w-[360px] my-3 py-8 px-6 rounded-[26px] bg-[#31030B]/90 backdrop-blur-xs border border-[#DFC187]/50 shadow-[0_12px_40px_rgba(0,0,0,0.55)] flex flex-col items-center text-center overflow-hidden"
        >
          {/* Ornate Corner Filigrees matching Screenshot 2 */}
          <GoldFiligreeCorner position="top-left" className="absolute top-2 left-2 w-9 h-9 sm:w-10 sm:h-10" />
          <GoldFiligreeCorner position="top-right" className="absolute top-2 right-2 w-9 h-9 sm:w-10 sm:h-10" />
          <GoldFiligreeCorner position="bottom-left" className="absolute bottom-2 left-2 w-9 h-9 sm:w-10 sm:h-10" />
          <GoldFiligreeCorner position="bottom-right" className="absolute bottom-2 right-2 w-9 h-9 sm:w-10 sm:h-10" />

          {/* Inner thin border */}
          <div className="absolute inset-2.5 rounded-[20px] border border-[#DFC187]/25 pointer-events-none" />

          {/* Header: CEREMONY INFO in Bold Cinzel Serif */}
          <h2 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.26em] text-[#DFC187] uppercase mb-4 mt-1">
            {couple.ceremonyHeader || 'CEREMONY INFO'}
          </h2>

          {/* Quote: "With hearts full of love and joy, we invite you to celebrate..." */}
          <p className="font-cormorant text-sm sm:text-base text-[#DFC187]/90 leading-relaxed font-normal px-2 mb-8 max-w-[280px]">
            {couple.quote || 'With hearts full of love and joy, we invite you to celebrate the beginning of our forever together'}
          </p>

          {/* Couple Names in Elegant Serif Typography (Matching Screenshot 2) */}
          <div className="w-full flex flex-col items-center justify-center space-y-2 my-2">
            {/* Groom Name in Serif */}
            <h3 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#DFC187] tracking-wider leading-none drop-shadow-xs">
              {couple.groom || 'Hassan'}
            </h3>

            {/* & symbol */}
            <p className="font-cinzel text-2xl text-[#DFC187]/80 font-light my-1">
              &
            </p>

            {/* Bride Name in Serif */}
            <h3 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#DFC187] tracking-wider leading-none drop-shadow-xs">
              {couple.bride || 'Haidy'}
            </h3>
          </div>
        </motion.div>

        {/* Golden Horizontal Divider */}
        <GoldDivider className="mt-8 mb-2" />
      </div>
    </section>
  );
}
