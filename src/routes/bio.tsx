import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import band from "@/assets/band.jpg";
import store from "@/assets/store.jpg";
import samuel from "@/assets/samuel.jpg";
import ayoub from "@/assets/ayoub.jpg";
import hamza from "@/assets/hamza.jpg";
import hisham from "@/assets/hisham.jpg";
import houssam from "@/assets/houssam.jpg";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — Lixivia" },
      { name: "description", content: "The story, history, and members of Lixivia." },
      { property: "og:title", content: "Bio — Lixivia" },
      { property: "og:description", content: "The story, history, and members of Lixivia." },
    ],
  }),
  component: Bio,
});

const members = [
  { name: "Samuel", role: "Vocals", image: samuel },
  { name: "Ayoub", role: "Guitar", image: ayoub },
  { name: "Hisham", role: "Bass", image: hisham },
  { name: "Hamza", role: "Drums", image: hamza},
  { name: "Houssam", role: "Lead guitar", image: houssam},
];

const timeline = [
  { year: "2024", event: "Founded by two members: Hisham on bass and Ayoub on guitar." },
  { year: "2024", event: "New members joined: Houssam on lead guitar, Samuel on vocals and Hamza on drums" },
  { year: "2026", event: "First concert at Tricinty fest." },
  { year: "2026", event: "Second concert at l'boulevard Tremplin. " },
];

function Bio() {
  return (
    <>
      <PageHeader eyebrow="The Band" title="Bio" image={band}>
        Everything you need to know about Lixivia.
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-bone text-2xl font-display leading-tight">
              <span className="text-primary toxic-glow">☣</span> TOXIC &amp; REAL <span className="text-primary toxic-glow">☣</span>
            </p>
            <p>
              LIXIVIA is a crossover thrash metal band forged in 2024 Sale/morocco, delivering a high speed collision of old-school thrash aggression and hardcore punk intensity. 
              Drawing influence from bands such as Municipal Waste, D.R.I., and Toxic Holocaust… ,The band was originally founded by two members: Hisham on bass and Ayoub on guitar, 
              As the project grew, new musicians joined the group, bringing fresh influences and perspectives, including Houssam on lead guitar, Samuel on vocals, and Hamza on drums.
            </p>
          </div>

          <aside className="border border-border p-6 h-fit sticky top-24">
            <div className="text-xs font-mono tracking-widest text-primary uppercase">
              Quick Facts
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Formed", "2024"],
                ["From", "Sale/morocco"],
                ["Members", "5"],
                ["Records", "2 Singles"],
                ["Label", "Independent"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-display tracking-widest">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Timeline</h2>
          <div className="mt-10 relative border-l-2 border-border pl-8 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 bg-primary" />
                <div className="text-xs font-mono tracking-widest text-primary">{t.year}</div>
                <p className="mt-1 text-lg text-bone">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">The Members</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((m, i) => (
              <div key={m.name} className="group border border-border">
                <div className="aspect-[3/4] bg-secondary overflow-hidden relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ objectPosition: `${25 * i}% center` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs font-mono text-primary tracking-widest">
                      /0{i + 1}
                    </div>
                    <div className="mt-1 font-display text-2xl">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
