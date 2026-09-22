import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SpotifyEmbed } from "@/components/site/SpotifyEmbed";
import { ExternalLink } from "lucide-react";
import music from "@/assets/music.jpg";
import store from "@/assets/store.jpg";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music — Lixivia" },
      { name: "description", content: "Discography, singles, and streaming links for Lixivia." },
      { property: "og:title", content: "Music — Lixivia" },
      { property: "og:description", content: "Discography, singles, and streaming links for Lixivia." },
    ],
  }),
  component: Music,
});

const releases = [
  { title: "No Chains Left (Demo)", year: "2025", type: "Demo", tracks: 1 },
  { title: "ScreenFall (Demo)", year: "2025", type: "Single", tracks: 1 },
];

const songs = [
  {
    title: "No Chains Left (Demo)",
    kind: "Album",
    embed:
      "https://open.spotify.com/embed/album/3TlLuG99qvDaFcgqCxxbnH?utm_source=oembed",
    link: "https://open.spotify.com/album/3TlLuG99qvDaFcgqCxxbnH",
  },
  {
    title: "ScreenFall (Demo)",
    kind: "Single",
    embed:
      "https://open.spotify.com/embed/track/7yzA1v9RDt1pdjOzTqHJHX?utm_source=oembed",
    link: "https://open.spotify.com/track/7yzA1v9RDt1pdjOzTqHJHX",
  },
];

function Music() {
  return (
    <>
      <PageHeader eyebrow="Discography" title="Music" image={music}>
        Every release, every single, every stream. All in one place.
      </PageHeader>

      {/* Featured */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="aspect-square bg-secondary relative overflow-hidden group">
              <img src={store} alt="No Chains Left cover" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
                Latest Release · Demo
              </div>
              <h2 className="mt-3 font-display text-5xl sm:text-6xl leading-[0.9]">No Chains Left</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-lg">
                Our latest demo, out now. Stream it everywhere.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://open.spotify.com/artist/6hCuwsvPwI0T97hEOGdRvr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-display tracking-widest hover:border-primary hover:text-primary transition-colors"
                >
                  Spotify <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.youtube.com/@LIXIVIA.Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-display tracking-widest hover:border-primary hover:text-primary transition-colors"
                >
                  YouTube <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="mt-8">
                <SpotifyEmbed
                  src={songs[0].embed}
                  title={songs[0].title}
                  height={152}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singles */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Singles</h2>
          <div className="mt-8 space-y-4">
            {songs.map((s) => (
              <div key={s.title}>
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <div className="font-display text-lg sm:text-xl">{s.title}</div>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-muted-foreground hover:text-primary uppercase"
                  >
                    Open in Spotify <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <SpotifyEmbed src={s.embed} title={s.title} height={152} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">Full Discography</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((r, i) => (
              <article key={r.title} className="group border border-border hover:border-primary transition-colors">
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img
                    src={i % 2 ? music : store}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 text-xs font-mono tracking-widest bg-background/70 px-2 py-1">
                    {r.type}
                  </div>
                </div>
                <div className="p-4 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-display text-xl truncate">{r.title}</div>
                    <div className="text-xs text-muted-foreground font-mono tracking-widest">
                      {r.tracks} TRACK{r.tracks === 1 ? "" : "S"}
                    </div>
                  </div>
                  <div className="text-primary font-mono text-sm">{r.year}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}