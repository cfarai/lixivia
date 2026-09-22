import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Instagram, Youtube } from "lucide-react";

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.5 17.31a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.12-10.59-1.16a.75.75 0 1 1-.33-1.46c4.6-1.05 8.54-.6 11.7 1.34.35.22.46.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.24-1.99-8.17-2.57-12-1.41a.94.94 0 1 1-.55-1.8c4.37-1.32 9.8-.68 13.53 1.61.44.27.58.85.31 1.29Zm.13-3.4C15.24 8.35 8.88 8.14 5.19 9.26a1.12 1.12 0 1 1-.65-2.15c4.24-1.28 11.28-1.03 15.72 1.61a1.12 1.12 0 1 1-1.16 1.92Z" />
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/lixivia.official/", label: "Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/@LIXIVIA.Official", label: "YouTube", Icon: Youtube },
  { href: "https://open.spotify.com/artist/6hCuwsvPwI0T97hEOGdRvr", label: "Spotify", Icon: SpotifyIcon },
  { href: "https://www.facebook.com/people/Lixivia/61574311674844/", label: "Facebook", Icon: Facebook },
] as const;
import logoAsset from "@/assets/lixivia-logo.png.asset.json";

const links = [
  { to: "/bio", label: "Bio" },
  { to: "/music", label: "Music" },
  { to: "/shows", label: "Shows" },
  { to: "/store", label: "Store" },
  { to: "/press", label: "Press" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-border py-4 bg-secondary/30 relative">
        <div className="absolute inset-x-0 top-0 h-[3px] opacity-60 slash-divider" />
        <div className="animate-marquee flex whitespace-nowrap font-display text-2xl tracking-widest">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              TOXIC &amp; REAL <span className="text-primary toxic-glow">☣</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <img src={logoAsset.url} alt="Lixivia" className="h-16 w-auto object-contain" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Thrash / crossover;
              Booking &amp; press:{" "}
              <a href="mailto:contact@lixivia.band" className="text-bone underline underline-offset-4">
                lixiviaband.official@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-primary">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.slice(0, 4).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-primary">More</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.slice(4).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-primary">Follow</h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lixivia on ${label}`}
                  className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono tracking-widest text-muted-foreground uppercase">
          <span>© {new Date().getFullYear()} Lixivia. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-bone"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
