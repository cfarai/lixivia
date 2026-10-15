import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import { SpotifyIcon } from "@/components/site/Footer";
import contact from "@/assets/band.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lixivia" },
      { name: "description", content: "Booking, press, and general contact for Lixivia." },
      { property: "og:title", content: "Contact — Lixivia" },
      { property: "og:description", content: "Booking, press, and general contact for Lixivia." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact" image={contact}>
        Booking, press, licensing, or a simple hello. Every message gets read.
      </PageHeader>

      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            {/* Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Message sent (placeholder)"); }}
              className="space-y-5"
            >
              <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Send a Message</div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="block text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-transparent border border-border focus:border-primary outline-none p-3 text-sm resize-y transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                  Reason
                </label>
                <select className="w-full bg-transparent border border-border focus:border-primary outline-none p-3 text-sm font-mono">
                  <option className="bg-background">Booking</option>
                  <option className="bg-background">Press / Interview</option>
                  <option className="bg-background">Licensing</option>
                  <option className="bg-background">General</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 font-display tracking-widest text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>

            {/* Info */}
            <aside className="space-y-8">
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Booking</div>
                <a href="mailto:booking@lixivia.band" className="mt-2 block font-display text-2xl hover:text-primary transition-colors">
                  <Mail className="inline h-5 w-5 mr-2 text-primary" />
                  booking@lixivia.band
                </a>
                <p className="mt-2 text-sm text-muted-foreground">EU: Someone Loud / NA: Someone Louder</p>
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Press</div>
                <a href="mailto:press@lixivia.band" className="mt-2 block font-display text-2xl hover:text-primary transition-colors">
                  <Mail className="inline h-5 w-5 mr-2 text-primary" />
                  press@lixivia.band
                </a>
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Based In</div>
                <div className="mt-2 font-display text-xl">
                  <MapPin className="inline h-4 w-4 mr-2 text-primary" />
                  Somewhere Loud
                </div>
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Follow</div>
                <div className="mt-3 flex gap-3">
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/lixivia.official/", label: "Instagram" },
                    { Icon: Youtube, href: "https://www.youtube.com/@LIXIVIA.Official", label: "YouTube" },
                    { Icon: SpotifyIcon, href: "https://open.spotify.com/artist/6hCuwsvPwI0T97hEOGdRvr", label: "Spotify" },
                    { Icon: Facebook, href: "https://www.facebook.com/people/Lixivia/61574311674844/", label: "Facebook" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lixivia on ${label}`}
                      className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border border-border focus:border-primary outline-none px-3 py-3 text-sm transition-colors"
      />
    </div>
  );
}
