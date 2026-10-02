import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldVintageCalendarFrame, GoldDivider } from './FloralElements';

export default function CountdownCalendar({ eventDate, venue, couple }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [status, setStatus] = useState('attending');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(eventDate.targetIso || '2026-10-27T19:00:00').getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [eventDate.targetIso]);

  // Calendar setup (Starting Monday: Mo Tu We Th Fr Sa Su)
  const year = parseInt(eventDate.year, 10) || 2026;
  const monthIndex = eventDate.monthIndex ?? 9; // October = 9
  const highlightDay = eventDate.highlightDay || 27;

  // Day of week for 1st of month
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const startDay = firstDay === 0 ? 6 : firstDay - 1; // 0 for Monday, 6 for Sunday
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const calendarSlots = [];
  for (let i = 0; i < startDay; i++) {
    calendarSlots.push({ day: null, isCurrent: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarSlots.push({
      day: d,
      isCurrent: true,
      isHighlighted: d === highlightDay,
    });
  }

  // Handle Add to Calendar (.ics download)
  const handleAddToCalendar = (e) => {
    e.preventDefault();
    const eventYear = eventDate.year || '2026';
    const eventMonth = String(eventDate.monthIndex !== undefined ? eventDate.monthIndex + 1 : 10).padStart(2, '0');
    const eventDay = String(eventDate.dayNumber || '27').padStart(2, '0');
    const dtStart = `${eventYear}${eventMonth}${eventDay}T170000Z`;
    const dtEnd = `${eventYear}${eventMonth}${eventDay}T230000Z`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Wedding Celebration: ${couple.primary || 'Hassan & Haidy'}`,
      `DESCRIPTION:Join us for the wedding celebration of ${couple.primary || 'Hassan & Haidy'}.`,
      `LOCATION:${venue?.name || 'Azha New Cairo'}, ${venue?.address || ''}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${(couple.primary || 'Hassan_Haidy').replace(/\s+/g, '_')}_Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmAttendance = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSuccess(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#DFC187', '#D8B26E', '#F4E4C2', '#C59F54', '#FFFFFF'],
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsAttendanceModalOpen(false);
      setIsSuccess(false);
      setGuestName('');
    }, 1800);
  };

  return (
    <section id="reception" className="relative py-8 sm:py-10 px-4 max-w-md mx-auto text-center overflow-hidden bg-[#3B050E]">
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Header in Gold */}
        <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#DFC187] uppercase mb-2">
          {couple.partyHeader || 'THE WEDDING PARTY WILL TAKE PLACE AT:'}
        </p>

        {/* Main Event Time in Radiant Gold */}
        <div className="font-cormorant text-2xl sm:text-3xl text-[#DFC187] font-bold tracking-wide mb-3 drop-shadow-[0_2px_10px_rgba(216,178,110,0.3)]">
          {eventDate.time || '7:00 PM'}
        </div>

        {/* Date Row: TUESDAY | 27 | OCTOBER */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-1 text-[#DFC187]">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#DFC187]/90">
            {eventDate.dayOfWeek || 'TUESDAY'}
          </span>
          <span className="text-[#DFC187]/40 text-base font-light">|</span>
          <span className="font-cormorant text-2xl sm:text-3xl font-extrabold text-[#DFC187] tracking-tight drop-shadow-xs">
            {eventDate.dayNumber || '27'}
          </span>
          <span className="text-[#DFC187]/40 text-base font-light">|</span>
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#DFC187]/90">
            {eventDate.monthName || 'OCTOBER'}
          </span>
        </div>

        {/* Year */}
        <div className="font-cormorant text-sm sm:text-base text-[#DFC187]/80 font-medium tracking-wide mt-1 mb-5">
          {eventDate.year || '2026'}
        </div>

        {/* Schedule Highlights */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 my-3 text-center">
          <div>
            <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.22em] text-[#DFC187]/80 font-semibold mb-1">
              WELCOME
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#DFC187] font-bold tracking-wide">
              {eventDate.welcomeTime || '7:00 PM'}
            </p>
          </div>

          <div>
            <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.22em] text-[#DFC187]/80 font-semibold mb-1">
              RECEPTION
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#DFC187] font-bold tracking-wide">
              {eventDate.receptionTime || '7:00 PM'}
            </p>
          </div>
        </div>

        {/* COUNTDOWN SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[340px] sm:max-w-[360px] my-6 p-4 sm:p-5 rounded-3xl bg-[#31030B]/95 backdrop-blur-xs border border-[#DFC187]/40 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <span className="h-[1px] w-8 bg-[#DFC187]/40" />
            <h3 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.28em] text-[#DFC187] uppercase">
              COUNTDOWN
            </h3>
            <span className="h-[1px] w-8 bg-[#DFC187]/40" />
          </div>

          {/* 4 Prominent Cards */}
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 w-full">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center py-3 sm:py-3.5 px-1 rounded-2xl bg-[#240107] border border-[#DFC187]/30 shadow-xs hover:border-[#DFC187]/70 transition-all duration-300"
              >
                <span className="font-cormorant text-2xl sm:text-3xl font-extrabold text-[#DFC187] leading-none mb-1 tabular-nums drop-shadow-xs">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-cinzel font-bold tracking-[0.18em] uppercase text-[#DFC187]/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vintage Arched Gold Calendar Frame */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] my-4">
          <GoldVintageCalendarFrame className="w-full">
            {/* Calendar Month Header */}
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#DFC187] mb-3 text-center tracking-wide">
              {eventDate.monthName ? eventDate.monthName.charAt(0) + eventDate.monthName.slice(1).toLowerCase() : 'October'} {eventDate.year || 2026}
            </h4>

            {/* Weekday Row */}
            <div className="grid grid-cols-7 text-center text-[11px] font-bold text-[#DFC187]/80 pb-2 border-b border-[#DFC187]/30 mb-2.5 font-cinzel">
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
              <span>Su</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs sm:text-sm">
              {calendarSlots.map((slot, idx) => (
                <div key={idx} className="h-7 sm:h-8 flex items-center justify-center relative">
                  {!slot.day ? (
                    <span className="text-transparent" />
                  ) : slot.isHighlighted ? (
                    // Radiant Gold Heart with deep burgundy text inside
                    <div className="relative flex items-center justify-center">
                      <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#DFC187] fill-[#DFC187] drop-shadow-[0_2px_8px_rgba(216,178,110,0.5)]" />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#3B050E] font-serif">
                        {slot.day}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[#DFC187]/90 font-medium">
                      {slot.day}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </GoldVintageCalendarFrame>
        </div>

        {/* Add to Calendar Link */}
        <button
          onClick={handleAddToCalendar}
          className="font-serif text-xs sm:text-sm text-[#DFC187] font-semibold underline underline-offset-4 decoration-[#DFC187]/60 hover:text-[#FAF2E1] my-5 tracking-wide cursor-pointer transition-colors"
        >
          Add to Calendar
        </button>

        {/* Confirm Attendance Pill Button in Gold Gradient */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsAttendanceModalOpen(true)}
          className="w-full max-w-[270px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#DFC187] via-[#E8CD96] to-[#C7A158] hover:from-[#EED8A7] hover:to-[#DFC187] text-[#3B050E] font-serif tracking-[0.16em] font-bold text-xs sm:text-sm uppercase shadow-[0_6px_25px_rgba(216,178,110,0.35)] transition-all cursor-pointer border border-[#FAF2E1]"
        >
          CONFIRM ATTENDANCE
        </motion.button>
      </div>

      {/* Attendance Modal */}
      <AnimatePresence>
        {isAttendanceModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 select-none"
            onClick={() => setIsAttendanceModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-sm w-full bg-[#31030B] rounded-3xl p-6 shadow-2xl border-2 border-[#DFC187]/50 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsAttendanceModalOpen(false)}
                className="absolute top-4 right-4 text-[#DFC187]/60 hover:text-[#DFC187] p-1.5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-xl font-bold text-[#DFC187] mb-1">
                Confirm Attendance
              </h3>
              <p className="text-xs text-[#DFC187]/80 mb-5">
                We would love to know if you can join us!
              </p>

              {isSuccess ? (
                <div className="py-6 flex flex-col items-center justify-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#DFC187]" />
                  <p className="font-serif text-base font-bold text-[#DFC187]">
                    Attendance Confirmed!
                  </p>
                  <p className="text-xs text-[#DFC187]/80">
                    Thank you {guestName}! Looking forward to seeing you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmAttendance} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#DFC187] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Ahmed & Family"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#240107] border border-[#DFC187]/40 focus:border-[#DFC187] focus:outline-none text-xs text-[#DFC187] placeholder-[#DFC187]/50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold text-[#DFC187] mb-1">
                      Status
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setStatus('attending')}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border cursor-pointer transition-colors ${
                          status === 'attending'
                            ? 'bg-[#DFC187] text-[#3B050E] border-[#DFC187]'
                            : 'bg-[#240107] text-[#DFC187] border-[#DFC187]/40'
                        }`}
                      >
                        Attending
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus('declined')}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border cursor-pointer transition-colors ${
                          status === 'declined'
                            ? 'bg-[#DFC187] text-[#3B050E] border-[#DFC187]'
                            : 'bg-[#240107] text-[#DFC187] border-[#DFC187]/40'
                        }`}
                      >
                        Cannot Attend
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-[#DFC187] via-[#E8CD96] to-[#C7A158] hover:from-[#EED8A7] hover:to-[#DFC187] text-[#3B050E] font-serif text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer transition-colors border border-[#FAF2E1]"
                  >
                    Submit
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
