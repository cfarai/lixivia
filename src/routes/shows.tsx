import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin, Ticket } from "lucide-react";
import shows from "@/assets/tricintyshow.jpeg";
import shows2 from "@/assets/tricintyshow2.jpeg";

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

const past = [
  { date: "SEP 19 2026", city: "Casablanca, MA", venue: "L'boulevard" },
  { date: "SEP 19 2026", city: "Casablanca, MA", venue: "L'Uzine" },
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

      {/* Past*/}
      
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Past Dates</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {past.map((s) => (
              <div key={s.date + s.city} className="flex items-baseline justify-between border-b border-border/60 py-3">
                <div>
                  <div className="font-display text-lg">{s.city}</div>
                  <div className="text-xs text-muted-foreground">{s.venue}</div>
                </div>
                <div className="text-xs font-mono tracking-widest text-muted-foreground">{s.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Posters*/}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Past Shows</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[shows, shows2 ].map((src, i) => (
              <div key={i} className="aspect-[4/5] bg-secondary overflow-hidden group relative">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <a href="#" className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
