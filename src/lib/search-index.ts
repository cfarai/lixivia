export type SearchEntry = {
  to: string;
  title: string;
  section: string;
  body: string;
  keywords?: string;
};

export const searchIndex: SearchEntry[] = [
  {
    to: "/",
    title: "Home",
    section: "Home",
    body: "Lixivia thrash crossover hardcore. New record Cold Witness out now. Tour dates, merch, archive.",
    keywords: "home landing hero new record cold witness",
  },
  {
    to: "/bio",
    title: "Bio — The Story",
    section: "Bio",
    body: "Formed in a rehearsal room. Thrash riffs and hardcore urgency. Band members, timeline, history.",
    keywords: "biography band members history timeline about",
  },
  {
    to: "/music",
    title: "Music — Discography",
    section: "Music",
    body: "Full-lengths, EPs, splits, singles. Streaming links, lyrics, embedded audio previews.",
    keywords: "music records albums discography singles ep lp vinyl streaming spotify bandcamp lyrics audio player",
  },
  {
    to: "/shows",
    title: "Shows — Tour Dates",
    section: "Shows",
    body: "Upcoming tour dates, past shows, tickets, venues. EU UK Spring tour.",
    keywords: "shows tour dates concerts tickets live venues gigs",
  },
  {
    to: "/store",
    title: "Store — Merch & Wax",
    section: "Store",
    body: "Shirts, hoodies, vinyl, cassettes, stickers. Print on demand, shipped worldwide.",
    keywords: "store shop merch t-shirt hoodie vinyl cassette sticker buy cart",
  },
  {
    to: "/press",
    title: "Press — Clippings & EPK",
    section: "Press",
    body: "Reviews, interviews, press kit, EPK download, promotional photos.",
    keywords: "press epk reviews interviews media kit promo photos",
  },
  {
    to: "/gallery",
    title: "Gallery — From The Pit",
    section: "Gallery",
    body: "Concert photography, studio outtakes, behind the scenes from the road.",
    keywords: "gallery photos images pictures concert live studio",
  },
  {
    to: "/contact",
    title: "Contact — Booking",
    section: "Contact",
    body: "Booking, press, licensing inquiries. Newsletter signup. Email us.",
    keywords: "contact booking email press licensing newsletter subscribe",
  },
];

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = searchIndex
    .map((entry) => {
      const hay = `${entry.title} ${entry.section} ${entry.body} ${entry.keywords ?? ""}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (!hay.includes(t)) return { entry, score: 0 };
        if (entry.title.toLowerCase().includes(t)) score += 3;
        if (entry.section.toLowerCase().includes(t)) score += 2;
        score += 1;
      }
      return { entry, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
  return scored;
}
