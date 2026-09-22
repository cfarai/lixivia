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
    <section className="relative pt-32 pb-16 border-b border-border overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </>
      )}
      <div className="absolute inset-0 scanlines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            <span className="toxic-glow">{eyebrow}</span>
          </div>
        )}
        <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] toxic-glow">
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
