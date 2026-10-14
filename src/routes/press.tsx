import { Download, Quote } from "lucide-react";
import press from "@/assets/press.jpg";
import band from "@/assets/band.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import gallery from "@/assets/gallery.jpg";
import shows from "@/assets/shows.jpg";
import music from "@/assets/music.jpg";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Lixivia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Interviews and features on Lixivia — photos, brief write-ups, and links to the full pieces." },
      { property: "og:title", content: "Press — Lixivia" },
      { property: "og:description", content: "Interviews and features on Lixivia." },
    ],
  }),
  component: Press,
});

// Paste the real interview URLs in the `url` fields below.
const features = [
  {
    image: band,
    outlet: "Decibel Magazine",
    date: "Feb 2025",
    title: "On writing the demos in a basement with no door",
    blurb:
      "A short conversation about tracking the demos in a shared rehearsal space, the amps that survived the sessions, and why nothing was fixed afterwards.",
    url: "#",
  },
  {
    image: shows,
    outlet: "No Echo",
    date: "Nov 2024",
    title: "The underground now: five bands from the circuit",
    blurb:
      "A round-up feature on the venues keeping the scene alive, with a few paragraphs on how the band books its own tours and builds its own flyers.",
    url: "#",
  },
  {
    image: music,
    outlet: "Bandcamp Daily",
    date: "Aug 2024",
    title: "Tape runs, tour diaries and the value of a bad night",
    blurb:
      "Notes from the road between two shows — the van, the merch table, and why the worst rooms taught the band more than the good ones.",
    url: "#",
  },
  {
    image: gallery,
    outlet: "Loud & Quiet",
    date: "May 2024",
    title: "Photographer's set: a night at the back of the room",
    blurb:
      "A photo-led interview following the band through load-in, soundcheck and the encore, shot entirely from the back of the room.",
    url: "#",
  },
];

function Press() {
  return (
    <>
      <PageHeader eyebrow="Press & Media" title="Press" image={press}>
        Interviews and features on the band. Each one opens the full piece in a new tab.
      </PageHeader>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f) => (
              <article
                key={f.title}
                className="group flex flex-col border border-border bg-secondary/70 overflow-hidden transition-colors hover:border-primary/60"
              >
                <div className="aspect-[7/5] bg-background overflow-hidden">
                  <img
                    src={f.image}
                    alt={`${f.outlet} feature: ${f.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase">
                    <span className="text-primary toxic-glow">{f.outlet}</span>
                    <span className="h-px w-6 bg-border" />
                    <span className="text-foreground/60">{f.date}</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{f.title}</h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.blurb}</p>

                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 border border-bone px-5 py-2.5 text-xs font-display tracking-widest transition-colors hover:bg-primary hover:border-primary hover:text-ink"
                  >
                    READ MORE
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}