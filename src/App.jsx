import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { invitationConfig } from './data/invitationData';

import EnvelopeCover from './components/EnvelopeCover';
import Announcement from './components/Announcement';
import CountdownCalendar from './components/CountdownCalendar';
import VenueLocation from './components/VenueLocation';
import Guestbook from './components/Guestbook';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

export default function App() {
  // Envelope open state
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentCouple = invitationConfig.couple;
  const currentDate = invitationConfig.eventDate;
  const currentVenue = invitationConfig.venue;

  const handleStartAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    handleStartAudio();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReopenEnvelope = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#31030B] text-[#DFC187] relative selection:bg-[#D8B26E] selection:text-[#3B050E] font-serif antialiased overflow-x-hidden">
      {/* Soft warm gold & deep velvet ambient glow */}
      <div className="fixed inset-0 pointer-events-none bg-radial from-[#5C0B1B]/40 via-transparent to-[#1F0106]/70 z-0" />

      {/* Floating Audio Player (Exact match to screenshot bottom-right gold button) */}
      <AudioPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        onTogglePlay={handleToggleMusic}
      />

      {/* Floating Top Control Toolbar */}
      <div className="fixed top-3.5 left-0 right-0 z-40 px-3.5 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DFC187] to-[#C7A158] text-[#3B050E] text-xs font-serif font-bold flex items-center justify-center shadow-md border border-[#FAF2E1]/60">
            {currentCouple.monogram || 'HH'}
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Reopen Cover button */}
          <button
            onClick={handleReopenEnvelope}
            title="View Cover Screen"
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#480814]/90 backdrop-blur-xs border border-[#DFC187]/40 text-[11px] text-[#DFC187] font-serif font-semibold shadow-md hover:bg-[#DFC187] hover:text-[#3B050E] transition-all cursor-pointer"
          >
            <Mail className="w-3 h-3 text-[#DFC187]" />
            <span>Cover</span>
          </button>
        </div>
      </div>

      {/* Section 1: Cover Screen with Romantic Burgundy & Gold Envelope Reveal */}
      <EnvelopeCover
        couple={currentCouple}
        eventDate={currentDate}
        isOpened={isOpened}
        onOpen={handleOpenEnvelope}
        onStartAudio={handleStartAudio}
      />

      {/* Main Page Content (Centered Mobile-First Frame with Velvet Burgundy BG) */}
      <div className="w-full max-w-md mx-auto shadow-2xl min-h-screen bg-[#3B050E] border-x border-[#DFC187]/20 relative overflow-hidden">
        {/* Section 2: Announcement (Hero Golden Botanical Arch & Ceremony Info) */}
        <Announcement couple={currentCouple} eventDate={currentDate} />

        {/* Section 3: Reception Info, Countdown & Vintage Arched Calendar */}
        <CountdownCalendar
          eventDate={currentDate}
          venue={currentVenue}
          couple={currentCouple}
        />

        {/* Section 4: Venue Location Map with Open in Maps button */}
        <VenueLocation venue={currentVenue} />

        {/* Section 5: Guestbook & Blessings */}
        <Guestbook couple={currentCouple} />

        {/* Footer */}
        <Footer couple={currentCouple} eventDate={currentDate} />
      </div>
    </div>
  );
}
