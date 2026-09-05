import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import g1 from '../assets/g1.jpg';

export const invitationConfig = {
  // Couple details (Halim & Kenzy)
  couple: {
    groom: "Halim",
    groomTitle: "GROOM",
    bride: "Kenzy",
    brideTitle: "BRIDE",
    coverGroom: "Halim",
    coverBride: "Kenzy",
    primary: "Halim & Kenzy",
    initials: "H & K",
    monogram: "HK",
    eventTitle: "THE WEDDING OF",
    ceremonyHeader: "WEDDING CEREMONY INFO",
    announcementLine1: "WE JOYFULLY ANNOUNCE",
    announcementLine2: "THE WEDDING OF OUR CHILDREN",
    partyHeader: "THE WEDDING PARTY WILL TAKE PLACE AT:",
    quote: "Together with our families, we joyfully invite you to celebrate our wedding.",
  },

  // Date & Time (Tuesday, 10 November 2026 at 7:00 PM)
  eventDate: {
    display: "November 10, 2026",
    dayOfWeek: "TUESDAY",
    dayNumber: "10",
    monthName: "NOVEMBER",
    year: "2026",
    time: "7:00 PM",
    welcomeTime: "7:00 PM",
    receptionTime: "6:00 PM",
    targetIso: "2026-11-10T19:00:00",
    monthIndex: 10, // 0-based: November = 10
    highlightDay: 10,
  },

  // Venue details (Lana Venue - Nile Corniche, Maadi)
  venue: {
    name: "Lana Venue",
    subtitle: "Nahr El Khaled — Nile Corniche, Maadi",
    address: "12 Nile Corniche, Maadi, Cairo, Egypt",
    city: "Cairo",
    googleMapsLink: "https://maps.app.goo.gl/ikygP46wormQHdw38?g_st=aw",
    mapEmbedUrl: "https://maps.google.com/maps?q=Lana+Venue,+12+Nile+Corniche,+Maadi,+Cairo&hl=en&z=15&output=embed",
    image: g1,
  },

  // Photos (p1, p2, p3)
  gallery: [
    {
      id: 1,
      role: "Groom",
      src: p1,
      title: "Halim",
    },
    {
      id: 2,
      role: "Bride",
      src: p2,
      title: "Kenzy",
    },
    {
      id: 3,
      role: "Couple",
      src: p3,
      title: "Halim & Kenzy",
    },
  ],

  // Schedule / Timeline
  timeline: [
    { time: "18:00", title: "Reception" },
    { time: "19:00", title: "Welcome & Gathering" },
    { time: "19:30", title: "Ring Exchange & Ceremony" },
    { time: "20:30", title: "Celebration & Music" },
    { time: "22:00", title: "Cake & Photos" },
  ],

  // Initial guestbook wishes
  initialWishes: [
    {
      id: "w-1",
      name: "Tarek & Yasmin",
      wishes: "Alf Mabrouk Halim & Kenzy! Wishing you a lifetime of happiness and eternal love!",
      timestamp: "Today",
      likes: 18,
    },
    {
      id: "w-2",
      name: "Ahmed & Salma",
      wishes: "Congratulations Halim & Kenzy on your wedding! Can't wait to celebrate with you!",
      timestamp: "Today",
      likes: 12,
    },
  ],
};

