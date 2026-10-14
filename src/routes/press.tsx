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
      
      {/* Promo photos */} {/* repace with pic from interiews*/}
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
