import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldDivider } from './FloralElements';

export default function Guestbook({ couple }) {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim() || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Save wish in localStorage quietly
      try {
        const saved = JSON.parse(localStorage.getItem('wedding_guestbook_wishes') || '[]');
        saved.unshift({
          id: 'w-' + Date.now(),
          name: name.trim(),
          wishes: wishes.trim(),
          timestamp: 'Just now',
        });
        localStorage.setItem('wedding_guestbook_wishes', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      setName('');
      setWishes('');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#DFC187', '#D8B26E', '#F4E4C2', '#C59F54', '#FFFFFF'],
        });
      } catch (err) {
        console.error(err);
      }

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 450);
  };

  return (
    <section id="guestbook" className="py-8 sm:py-12 px-4 max-w-md mx-auto text-center bg-[#3B050E]">
      <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#DFC187] uppercase mb-1 drop-shadow-[0_2px_10px_rgba(216,178,110,0.3)]">
        GUESTBOOK
      </h2>
      <p className="font-cormorant text-sm sm:text-base text-[#DFC187]/80 font-medium tracking-wide mb-6">
        Leave your prayers and blessings for the newlyweds {couple?.primary || 'Hassan & Haidy'}
      </p>

      {/* Success Alert */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3.5 rounded-2xl bg-[#480814] border border-[#DFC187]/60 text-[#DFC187] flex items-center justify-center gap-2 text-xs font-serif shadow-md overflow-hidden"
          >
            <CheckCircle2 className="w-4 h-4 text-[#DFC187]" />
            <span>Thank you! Your wish has been sent</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Form Box Area */}
      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#240107] border border-[#DFC187]/40 focus:border-[#DFC187] focus:outline-none text-xs text-[#DFC187] placeholder-[#DFC187]/50 shadow-xs font-medium"
          />
        </div>

        <div>
          <textarea
            required
            rows={3}
            placeholder="Write your wishes..."
            value={wishes}
            onChange={(e) => setWishes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#240107] border border-[#DFC187]/40 focus:border-[#DFC187] focus:outline-none text-xs text-[#DFC187] placeholder-[#DFC187]/50 shadow-xs resize-none font-medium"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#DFC187] via-[#E8CD96] to-[#C7A158] hover:from-[#EED8A7] hover:to-[#DFC187] text-[#3B050E] font-serif text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors border border-[#FAF2E1]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Wishes'}</span>
        </motion.button>
      </form>

      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-40" />
      </div>
    </section>
  );
}
