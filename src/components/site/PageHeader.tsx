
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate min-h-[70px] overflow-hidden border-b border-border bg-background pt-40 pb-24 sm:pt-30 sm:pb-32">

      {/* Background image */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_20%] opacity-60"
          />

          {/* Keep the image visible while protecting text contrast */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/55 to-background/10" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
        </>
      )}

      {/* Existing cyberpunk texture */}
      <div className="scanlines pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            <span className="toxic-glow">{eyebrow}</span>
          </div>
        )}

        <h1 className="mt-4 max-w-5xl font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] toxic-glow">
          {title}
        </h1>

        {children && (
          <div className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
