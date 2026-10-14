import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
// import heroLogo from "@/assets/lixivia-hero-logo.jpg.asset.json";
import heroLogo from "@/assets/music.jpg.asset.json";
import band from "@/assets/band.jpg";
import music from "@/assets/single2.jpg";
import shows from "@/assets/shows.jpg";
import store from "@/assets/store.jpg";
import press from "@/assets/press.jpg";
import gallery from "@/assets/gallery.jpg";
import contact from "@/assets/contact.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lixivia — Thrash Crossover Band" },
      {
        name: "description",
        content:
          "Official home of Lixivia. New record out now. Tour dates, merch, and the archive.",
      },
      { property: "og:title", content: "Lixivia — Thrash Crossover Band" },
      {
        property: "og:description",
        content: "Official home of Lixivia. New record out now.",
      },
    ],
  }),
  component: Index,
});

const sections = [
  {
    to: "/bio",
    label: "Bio",
    title: "BIO",
    body: "Lixivia has been welding thrash riffs to hardcore urgency since the first blackout. Read the story.",
    image: band,
  },
  {
    to: "/music",
    label: "Music",
    title: "The Records",
    body: "Two singles. Full discography, streaming links, and lyrics — all in one place.",
    image: music,
  },
  {
    to: "/shows",
    label: "Shows",
    title: "On The Road",
    body: "Every date on the current tour, plus every dive bar and warehouse we've played since day one. Grab tickets or come say hi.",
    image: shows,
  },
  {
    to: "/store",
    label: "Store",
    title: "Merch & Wax",
    body: "Shirts, hoodies, vinyl, cassettes, and one-off runs. Everything printed on-demand and shipped worldwide.",
    image: store,
  },
  {
    to: "/press",
    label: "Press",
    title: "The Clippings",
    body: "Reviews, interviews, and the press kit. Everything you need to write about the band lives here.",
    image: press,
  },
  {
    to: "/gallery",
    label: "Gallery",
    title: "From The Pit",
    body: "Concert photography, studio outtakes, and behind-the-scenes frames pulled from the road.",
    image: gallery,
  },
  {
    to: "/contact",
    label: "Contact",
    title: "Booking & Everything Else",
    body: "For booking, press, licensing, or just to say what's up. We answer everything eventually.",
    image: contact,
  },
] as const;

function Index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src={heroLogo.url}
            alt="Lixivia"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        <div className="absolute inset-0 slash-divider opacity-[0.03]" />
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_100%)]" />

        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20 sm:pb-24">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-primary uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="h-px w-12 bg-primary" />
            <span className="toxic-glow animate-flicker">New Record — Out Now</span>
          </div>
          <h1 className="sr-only">Lixivia</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Thrash. Crossover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-display tracking-widest animate-toxic-pulse hover:opacity-90 transition-opacity"
            >
              Listen Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/shows"
              className="inline-flex items-center gap-2 border border-bone px-6 py-3 text-xs font-display tracking-widest hover:bg-bone hover:text-ink transition-colors"
            >
              Tour Dates
            </Link>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
            <span>SCROLL ↓</span>
          </div>
        </div>
      </section>

      {/* Alternating sections */}
      {sections.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.to}
            className="relative border-b border-border py-20 sm:py-28"
          >
            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${
                  reversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-2 slash-divider opacity-0 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute -top-3 -left-3 z-10 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-mono tracking-widest uppercase toxic-box-glow rotate-[-6deg] group-hover:rotate-0 transition-transform">
                    ☣ {s.label}
                  </div>
                  <div className="relative aspect-[9/6] overflow-hidden bg-secondary border border-border group-hover:border-primary/50 transition-colors">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scanlines" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-primary uppercase">
                    <span className="h-px w-8 bg-primary" />
                    {s.label}
                  </div>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight group-hover:toxic-glow transition-all">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
                    {s.body}
                  </p>
                  <Link
                    to={s.to}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-display tracking-widest border-b border-bone pb-1 hover:text-primary hover:border-primary transition-colors group animate-toxic-pulse"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
