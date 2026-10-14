import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import gallery from "@/assets/gallerymain.jpg";
import band from "@/assets/band.jpg";
import hero from "@/assets/LIXIVIA_TRICINTY-29.jpg";
import shows from "@/assets/LIXIVIA_TRICINTY-66.jpg";
import music from "@/assets/LIXIVIA_TRICINTY-85.jpg";
import contact from "@/assets/contact.jpg";
import press from "@/assets/press.jpg";
import store from "@/assets/store.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lixivia" },
      { name: "description", content: "Concert photos, studio outtakes, and behind-the-scenes from Lixivia." },
      { property: "og:title", content: "Gallery — Lixivia" },
      { property: "og:description", content: "Concert photos, studio outtakes, and behind-the-scenes." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: hero, tag: "Live", aspect: "row-span-2" },
  { src: band, tag: "Portrait", aspect: "" },
  { src: shows, tag: "Live", aspect: "" },
  { src: music, tag: "Studio", aspect: "row-span-2" },
  { src: gallery, tag: "Contact Sheet", aspect: "" },
  { src: contact, tag: "Backstage", aspect: "" },
  { src: hero, tag: "Press", aspect: "" },
  { src: gallery, tag: "Merch", aspect: "row-span-2" },
  { src: band, tag: "Portrait", aspect: "" },
  { src: shows, tag: "Live", aspect: "" },
  { src: hero, tag: "Live", aspect: "" },
  { src: gallery, tag: "Studio", aspect: "" },
];

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <PageHeader eyebrow="Archive" title="Gallery" image={gallery}>
        From the pit, from the studio, from the van at 3am. Click any frame to enlarge.
      </PageHeader>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-2 md:gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`relative overflow-hidden group bg-secondary ${img.aspect}`}
              >
                <img
                  src={img.src}
                  alt={img.tag}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono tracking-widest bg-background/70 px-2 py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.tag}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 border border-bone hover:bg-bone hover:text-ink transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute top-4 left-4 text-xs font-mono tracking-widest text-muted-foreground">
            /{String(selected + 1).padStart(2, "0")} — {images[selected].tag.toUpperCase()}
          </div>
          <img
            src={images[selected].src}
            alt={images[selected].tag}
            className="max-h-[90vh] max-w-full object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
