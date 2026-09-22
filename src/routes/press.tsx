import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Download, Quote } from "lucide-react";
import press from "@/assets/press.jpg";
import band from "@/assets/band.jpg";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Lixivia" },
      { name: "description", content: "Reviews, interviews, press kit, and downloadable media for Lixivia." },
      { property: "og:title", content: "Press — Lixivia" },
      { property: "og:description", content: "Reviews, interviews, and press kit for Lixivia." },
    ],
  }),
  component: Press,
});

const reviews = [
  { quote: "The best crossover record of the year — no contest.", source: "Loud & Quiet", rating: "9/10" },
  { quote: "Furious, focused, and completely without pretension.", source: "Kerrang", rating: "★★★★★" },
  { quote: "A masterclass in economy. Not a wasted second.", source: "The Quietus", rating: "8/10" },
  { quote: "Sounds like the room is on fire and no one cares.", source: "Metal Hammer", rating: "9/10" },
];

const interviews = [
  { title: "On writing 'Cold Witness'", source: "Decibel Magazine", date: "Feb 2025" },
  { title: "The Underground Now", source: "No Echo", date: "Nov 2024" },
  { title: "Tape and Tour Diaries", source: "Bandcamp Daily", date: "Aug 2024" },
];

function Press() {
  return (
    <>
      <PageHeader eyebrow="Press & Media" title="Press" image={press}>
        The clippings, the interviews, and everything you need to write about the band.
      </PageHeader>

      {/* Press kit */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-center border border-border p-8 bg-secondary/30">
            <div>
              <div className="text-xs font-mono tracking-widest text-primary uppercase">EPK</div>
              <h2 className="mt-2 font-display text-4xl">Press Kit</h2>
              <p className="mt-3 text-muted-foreground">
                High-res photos, band bio, logos, and stage plot. Everything you need in one .zip.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {["Photos (.zip)", "Logos (.svg)", "Bio (.pdf)", "Stage Plot"].map((f) => (
                <a
                  key={f}
                  href="#"
                  className="inline-flex items-center gap-2 border border-bone px-5 py-3 text-xs font-display tracking-widest hover:bg-bone hover:text-ink transition-colors"
                >
                  <Download className="h-3 w-3" />
                  {f}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Reviews</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reviews.map((r) => (
              <blockquote key={r.source} className="border border-border p-6 relative">
                <Quote className="absolute top-4 right-4 h-6 w-6 text-primary/40" />
                <p className="text-lg font-display leading-tight pr-8">"{r.quote}"</p>
                <footer className="mt-4 flex items-center justify-between">
                  <cite className="not-italic text-sm text-muted-foreground">— {r.source}</cite>
                  <span className="text-xs font-mono text-primary tracking-widest">{r.rating}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Interviews</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {interviews.map((it, i) => (
              <a
                key={it.title}
                href="#"
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 px-2 hover:bg-secondary/40 transition-colors group"
              >
                <div className="text-primary font-mono text-sm">/0{i + 1}</div>
                <div className="min-w-0">
                  <div className="font-display text-xl truncate group-hover:text-primary transition-colors">
                    {it.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{it.source}</div>
                </div>
                <div className="text-xs font-mono tracking-widest text-muted-foreground">{it.date}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promo photos */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Promotional Photos</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[band, press, band].map((src, i) => (
              <div key={i} className="aspect-[4/5] bg-secondary overflow-hidden group relative">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <a href="#" className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-display tracking-widest inline-flex items-center gap-2">
                    <Download className="h-3 w-3" /> DOWNLOAD HI-RES
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
