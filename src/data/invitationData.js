export const invitationConfig = {
  // Couple details (Hassan & Haidy)
  couple: {
    groom: "Hassan",
    groomTitle: "GROOM",
    bride: "Haidy",
    brideTitle: "BRIDE",
    coverGroom: "Hassan",
    coverBride: "Haidy",
    primary: "Hassan & Haidy",
    initials: "H & H",
    monogram: "HH",
    eventTitle: "THE WEDDING OF",
    ceremonyHeader: "CEREMONY INFO",
    announcementLine1: "WE JOYFULLY ANNOUNCE",
    announcementLine2: "THE WEDDING OF OUR CHILDREN",
    partyHeader: "THE WEDDING PARTY WILL TAKE PLACE AT:",
    quote: "With hearts full of love and joy, we invite you to celebrate the beginning of our forever together",
    songTitle: "A Thousand Years",
  },

  // Date & Time (Tuesday, 27 October 2026 at 7:00 PM)
  eventDate: {
    display: "October 27, 2026",
    dayOfWeek: "TUESDAY",
    dayNumber: "27",
    monthName: "OCTOBER",
    year: "2026",
    time: "7:00 PM",
    welcomeTime: "7:00 PM",
    receptionTime: "7:00 PM",
    targetIso: "2026-10-27T19:00:00",
    monthIndex: 9, // 0-based: October = 9
    highlightDay: 27,
  },

  // Venue details (Azha New Cairo)
  venue: {
    name: "Azha New Cairo",
    subtitle: "Suez Road — El Shorouk, Cairo Governorate",
    address: "Suez Rd, El Shorouk, Cairo Governorate",
    city: "Cairo",
    googleMapsLink: "https://www.google.com/maps/dir//Suez+Rd,+El+Shorouk,+Cairo+Governorate+4912052/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14581d543b64ee61:0x360ad4c38dc95575?entry=s&sa=X&ved=2ahUKEwjYg5ecvZuXAxX_gv0HHdEsBYEQlDt6BAgQEAA&hl=en",
    mapEmbedUrl: "https://maps.google.com/maps?q=Azha+New+Cairo,+Suez+Rd,+El+Shorouk,+Cairo+Governorate&hl=en&z=14&output=embed",
  },

  // Schedule / Timeline
  timeline: [
    { time: "19:00", title: "Welcome & Reception" },
    { time: "19:30", title: "Celebration & First Dance" },
    { time: "20:30", title: "Dinner & Music" },
    { time: "22:00", title: "Cake Cutting & Photos" },
  ],

  // Initial guestbook wishes
  initialWishes: [
    {
      id: "w-1",
      name: "Tarek & Yasmin",
      wishes: "Alf Mabrouk Hassan & Haidy! Wishing you a lifetime of happiness, peace, and eternal love!",
      timestamp: "Today",
      likes: 18,
    },
    {
      id: "w-2",
      name: "Ahmed & Salma",
      wishes: "Congratulations Hassan & Haidy! So thrilled to celebrate this magical day with you!",
      timestamp: "Today",
      likes: 12,
    },
  ],
};

