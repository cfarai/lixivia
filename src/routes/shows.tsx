import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin, Ticket } from "lucide-react";
import shows from "@/assets/shows.jpg";
import tricinty from "@/assets/tricintyshow.jpeg";
import uzine from "@/assets/uzine.jpg";
import boulevard from "@/assets/boulevard.jpeg";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows — Lixivia" },
      { name: "description", content: "Upcoming and past tour dates for Lixivia." },
      { property: "og:title", content: "Shows — Lixivia" },
      { property: "og:description", content: "Upcoming and past tour dates for Lixivia." },
    ],
  }),
  component: Shows,
});

const upcoming = [
  // { date: "SEP 19", city: "Casablanca, MA", venue: "Urban Spree", status: "On Sale" },
  // { date: "JUNE 05", city: "Rabat, MA", venue: "Modrá Vopice", status: "On Sale" },
];

const images = [boulevard, uzine, tricinty];

const past = [
  { date: "SEP 19 2026", city: "Casablanca, MA", venue: "L'boulevard" },
  { date: "JULY 24 2026", city: "Casablanca, MA", venue: "L'Uzine" },
  { date: "JUNE 05 2026", city: "Rabat, MA", venue: "La renaissance" },
];

function Shows() {
  return (
    <>
      <PageHeader eyebrow="Live" title="Shows" image={shows}>
        Every date on the road. Come early, stay late.
      </PageHeader>

      {/* Upcoming */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl sm:text-5xl">Upcoming</h2>
            <div className="text-xs font-mono tracking-widest text-muted-foreground">
              {upcoming.length} DATES CONFIRMED
            </div>
          </div>

          <div className="mt-10 border-y border-border divide-y divide-border">
            {upcoming.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground font-mono text-sm tracking-widest">
                No upcoming shows scheduled at this time.
              </div>
            ) : (
            upcoming.map((s) => (
              <div
                key={s.date + s.city}
                className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[120px_1fr_1fr_auto] items-center gap-4 py-5 px-2 hover:bg-secondary/40 transition-colors group"
              >
                <div className="font-display text-xl sm:text-2xl text-primary tracking-widest">
                  {s.date}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg sm:text-xl truncate">{s.city}</div>
                  <div className="text-xs text-muted-foreground font-mono tracking-widest sm:hidden">
                    {s.venue}
                  </div>
                </div>
                <div className="hidden sm:block text-muted-foreground text-sm">
                  <MapPin className="inline h-3 w-3 mr-1" />
                  {s.venue}
                </div>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-display tracking-widest border transition-colors shrink-0 ${
                    s.status === "Sold Out"
                      ? "border-border text-muted-foreground pointer-events-none"
                      : "border-primary bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  <Ticket className="h-3 w-3" />
                  <span className="hidden sm:inline">{s.status}</span>
                  <span className="sm:hidden">{s.status === "Sold Out" ? "OUT" : "GO"}</span>
                </a>
              </div>
            ))
          )}
          </div>
        </div>
      </section>

      {/*Past*/}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Past Shows</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((r, i) => (
              <article key={r.city} className="group border border-border hover:border-primary transition-colors">
                <div className="aspect-[5/4] aspect-square bg-secondary relative overflow-hidden">
                  <img
                    src={images[i % images.length]}
                    alt={r.city}
                    loading="lazy"
                    className="h-full w-full object-covergrayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 text-xs font-mono tracking-widest bg-background/70 px-2 py-1">
                    {r.venue}
                  </div>
                </div>
                <div className="p-4 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-display text-xl truncate">{r.venue}</div>
                    <div className="text-xs text-muted-foreground font-mono tracking-widest">
                      {r.city}
                    </div>
                  </div>
                  <div className="text-primary font-mono text-sm">{r.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
