import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import logoAsset from "@/assets/lixivia-logo.png.asset.json";
import { searchSite } from "@/lib/search-index";


const links = [
  { to: "/", label: "Home" },
  { to: "/bio", label: "Bio" },
  { to: "/music", label: "Music" },
  { to: "/shows", label: "Shows" },
  { to: "/store", label: "Store" },
  { to: "/press", label: "Press" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchSite(query), [query]);

  const closeSearch = () => {
    setSearch(false);
    setQuery("");
  };

  const goTo = (to: string) => {
    navigate({ to });
    closeSearch();
  };

  useEffect(() => {
    if (search) {
      // focus handled via autoFocus, but ensure focus if reopened
      inputRef.current?.focus();
    }
  }, [search]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b-2 border-primary/60 shadow-[0_0_24px_-4px_var(--blood)]"
            : "bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        {/* toxic hazard strip */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, var(--blood) 0 10px, var(--ink) 10px 20px)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 sm:h-24 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="group flex items-center shrink-0" aria-label="Lixivia — Home">
              <img
                src={logoAsset.url}
                alt="Lixivia"
                className="h-16 sm:h-20 w-auto object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2 group-hover:toxic-glow"
              />
            </Link>

            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="group px-3 py-2 font-nav text-sm tracking-[0.14em] uppercase text-bone/90 hover:text-primary transition-colors relative"
                  activeProps={{ className: "text-primary toxic-glow" }}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`relative z-10 ${isActive ? "animate-flicker" : ""}`}>
                        {l.label}
                      </span>
                      <span
                        className={`absolute inset-x-2 bottom-1 h-[2px] bg-primary transition-transform origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ boxShadow: "0 0 12px var(--blood), 0 0 20px var(--blood)" }}
                      />
                    </>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => (search ? closeSearch() : setSearch(true))}
                aria-label={search ? "Close search" : "Open search"}
                aria-expanded={search}
                className="p-2 text-muted-foreground hover:text-bone transition-colors"
              >
                {search ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 text-bone"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {search && (
            <div className="pb-3 animate-in fade-in slide-in-from-top-2 duration-200" role="search">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (results[0]) goTo(results[0].to);
                }}
              >
                <input
                  ref={inputRef}
                  autoFocus
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the archive..."
                  aria-label="Search the site"
                  aria-controls="site-search-results"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm font-mono placeholder:text-muted-foreground"
                />
              </form>
              {query.trim() && (
                <ul
                  id="site-search-results"
                  role="listbox"
                  className="mt-2 max-h-80 overflow-y-auto border border-border bg-background/95 backdrop-blur-md"
                >
                  {results.length === 0 && (
                    <li className="px-4 py-3 text-xs font-mono tracking-widest text-muted-foreground uppercase">
                      No matches in the archive
                    </li>
                  )}
                  {results.map((r) => (
                    <li key={r.to} role="option" aria-selected="false">
                      <button
                        type="button"
                        onClick={() => goTo(r.to)}
                        className="w-full text-left px-4 py-3 border-b border-border/60 last:border-b-0 hover:bg-secondary/60 focus:bg-secondary/60 outline-none transition-colors"
                      >
                        <div className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase">
                          {r.section}
                        </div>
                        <div className="mt-1 font-display text-sm tracking-wider text-bone">
                          {r.title}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground line-clamp-1">
                          {r.body}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <div className="relative h-full flex flex-col">
          <div className="flex h-20 items-center justify-between px-6">
            <img src={logoAsset.url} alt="Lixivia" className="h-16 w-auto object-contain" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-nav text-4xl tracking-wider py-3 border-b border-border/40 hover:text-primary hover:pl-3 transition-all duration-300 ${
                  open ? "animate-in slide-in-from-right-8 fade-in" : ""
                }`}
                style={{ animationDelay: `${i * 50}ms`, animationFillMode: "backwards" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-8 text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Est. MMXX — Underground &amp; Unbowed
          </div>
        </div>
      </div>
    </>
  );
}
