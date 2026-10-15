
import press from "@/assets/blabla.png";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import deuxm from "@/assets/2m.png";
import liik from "@/assets/liik.png";
import diari from "@/assets/diari.jpg";
import blabla from "@/assets/blabla.png";
import riffwire from "@/assets/riffwire.jpg";

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
  image: liik,
  outlet: "liiktv",
  date: "Oct 2026",
  title: "Au festival L'Boulevard, la scène métal marocaine impose sa voix et sa passion",
  blurb:
    "Longtemps marginalisé, le métal sous toutes ses déclinaisons trouve un terrain d'expression vibrant au Maroc. À Casablanca, le festival L'Boulevard continue de donner une voix aux jeunes formations locales, démontrant la vitalité et la cohésion d'une communauté soudée par l'amour d'une musique brute et authentique.",
  url: "https://liik.tv/articles/au-festival-l-boulevard-la-scene-metal-marocaine-impose-sa-voix-et-sa-passion/",
  },
  {
  image: diari,
  outlet: "diariodeunmetalhead",
  date: "Oct 2026",
  title: "L'BOULEVARD: from the revolution born in a courtroom, to the most important festival in Africa.",
  blurb:
    "Lixivia started off by completely shattering all our expectations. You find a band of incredibly young guys, each dressed in their own unique style: a rhythm guitarist in white, a singer with a typical old-school thrash metal look, a bassist in a classic sleeveless jacket covered in patches and Crisix-style shorts, and a lead guitarist wearing a Dream Theater t-shirt.",
  url: "https://www.diariodeunmetalhead.com/2026/10/lboulevard-de-la-revolucion-nacida-en.html?utm_source=chatgpt.com",
  },
  {
    image: deuxm,
    outlet: "2M.ma",
    date: "Sep 2026",
    title: "L’Boulevard 2026 : 24 ans après, le festival casablancais continue de compter autrement",
    blurb:
      "L’Boulevard revient du 17 au 20 septembre 2026 au Stade du R.U.C à Casablanca, avec une programmation qui revendique une nouvelle fois la diversité des musiques actuelles et des cultures urbaines.",
    url: "https://2m.ma/ar/news/L-Boulevard-2026-24-ans-apr%C3%A8s-le-festival-casablancais-continue-20260903",
  },
  {
  image: blabla,
  outlet: "The Blabla project",
  date: "Sep 2026",
  title: "The Blabla project EP 04",
  blurb:
    "مشروع حواري راس مالو البلابلا، بتكلفة كبيرة ديال الهضرة وميزانية ضخمة ديال هاك وهارا. مشروع  هدفه:  يدوي على راسو... أحسن مشروع بدون دعم التنمية فقط الحب الشغف والقليل من الشبق ... لهلا يجعل مها فرجة ممتعة",
  url: "https://youtu.be/3wlz4e9Co9c?t=3004",
  },
  {
    image: riffwire,
    outlet: "riffwire.mag",
    date: "May 2026",
    title: "Underground takes the first step at Tricinty Fest",
    blurb:
      "Tricinty Fest is back, and if you still don’t have “June” circled on your calendar, it may be time to reconsider your priorities. The city’s flagship heavy music event is creeping closer, and this year’s edition marks a clear step up in both scale and intent.",
    url: "https://www.instagram.com/p/DYaKz-1DBpV/?img_index=9",
  },
];

function Press() {
  return (
    <>
      <PageHeader eyebrow="Press & Media" title="Press" image={press}>
        Interviews and features on the band. Each one opens the full piece in a new tab.
      </PageHeader>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group flex flex-col border border-border bg-secondary/70 overflow-hidden transition-colors hover:border-primary/60"
              >
                <div className="aspect-[4/3] bg-background overflow-hidden">
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

                  <h2 className="mt-3 font-display text-2xl leading-tight sm:text-xl leading-tight">{f.title}</h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 leading-tight">{f.blurb}</p>

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