import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import { GoldDivider } from './FloralElements';

export default function VenueLocation({ venue }) {
  return (
    <section id="venue" className="py-8 sm:py-10 px-4 max-w-md mx-auto text-center bg-[#3B050E]">
      {/* Venue Header */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-1.5 mb-1.5 text-[#DFC187]">
          <MapPin className="w-4 h-4 text-[#DFC187]" />
          <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DFC187] uppercase">
            LOCATION & VENUE
          </h2>
        </div>
        <h3 className="font-cormorant text-2xl sm:text-3xl text-[#DFC187] font-bold tracking-wide mt-2 drop-shadow-[0_2px_10px_rgba(216,178,110,0.3)]">
          {venue.name}
        </h3>
        {venue.subtitle && (
          <p className="font-cormorant text-xs sm:text-sm text-[#DFC187]/85 font-medium tracking-wider mt-1">
            {venue.subtitle}
          </p>
        )}
        {venue.address && (
          <p className="font-sans text-[11px] sm:text-xs text-[#DFC187]/70 tracking-wide mt-1">
            {venue.address}
          </p>
        )}
      </div>

      {/* Full Width Interactive Google Map Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-[#240107] shadow-[0_10px_35px_rgba(0,0,0,0.5)] border-2 border-[#DFC187]/40"
      >
        {/* Floating "Open in Google Maps" Button */}
        <div className="absolute top-3 left-3 z-20">
          <a
            href={venue.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#31030B]/90 hover:bg-[#DFC187] hover:text-[#3B050E] text-[#DFC187] border border-[#DFC187]/50 text-xs font-serif font-bold shadow-md transition-all cursor-pointer"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Iframe */}
        <iframe
          title="Wedding Venue Map"
          src={venue.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[15%] contrast-[1.05]"
        />
      </motion.div>

      {/* Gold Divider */}
      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-40" />
      </div>
    </section>
  );
}
