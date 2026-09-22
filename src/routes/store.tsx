import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ShoppingBag } from "lucide-react";
import store from "@/assets/store.jpg";
import band from "@/assets/band.jpg";
import toxicshirt from "@/assets/toxicshirt.jpg";
import blackshirt from "@/assets/blackshirt.jpg";
import stickers from "@/assets/stickers.jpg";
import music from "@/assets/music.jpg";
import press from "@/assets/press.jpg";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Lixivia" },
      { name: "description", content: "Official merch: t-shirts, hoodies, vinyl, cassettes, and more." },
      { property: "og:title", content: "Store — Lixivia" },
      { property: "og:description", content: "Official merch: t-shirts, hoodies, vinyl, and cassettes." },
    ],
  }),
  component: Store,
});

const products = [
  { name: "Toxic colorway", price: "200DH", cat: "T-Shirts", img: toxicshirt },
  { name: "Blackout version", price: "200DH", cat: "T-Shirts", img: blackshirt },
  { name: "Stickers", price: "10Dh", cat: "Accessories", img: stickers },
];

const categories = ["All", "T-Shirts", "Accessories"];

function Store() {
  return (
    <>
    
      <PageHeader eyebrow="Merch" title="Store" image={store}>
        Everything is printed on demand and shipped worldwide.
      </PageHeader>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 text-xs font-display tracking-widest border transition-colors ${
                  i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 border border-border px-4 py-2 text-xs font-display tracking-widest">
              <ShoppingBag className="h-3 w-3" />
              Cart (0)
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <article key={p.name} className="group cursor-pointer">
                <div className="aspect-square bg-secondary relative overflow-hidden border border-border group-hover:border-primary transition-colors">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest bg-background/70 px-2 py-1 uppercase">
                    {p.cat}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <button className="w-full bg-primary text-primary-foreground py-2 text-xs font-display tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 text-xs font-mono text-muted-foreground">
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base tracking-wide">{p.name}</h3>
                  <div className="text-primary font-mono text-sm">{p.price}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
