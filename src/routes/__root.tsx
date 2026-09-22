import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl tracking-widest">Signal Lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page doesn't exist in the archive.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-bone px-6 py-3 text-xs font-display tracking-widest hover:bg-bone hover:text-ink transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl tracking-widest">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something broke. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-primary bg-primary text-primary-foreground px-6 py-3 text-xs font-display tracking-widest hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-bone px-6 py-3 text-xs font-display tracking-widest hover:bg-bone hover:text-ink transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lixivia — Thrash / Crossover" },
      {
        name: "description",
        content:
          "Official site of Lixivia. Thrash crossover from the underground. Music, shows, merch, and press.",
      },
      { property: "og:title", content: "Lixivia — Thrash / Crossover" },
      {
        property: "og:description",
        content: "Official site of Lixivia. Thrash crossover from the underground.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Saira+Stencil+One&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('/__l5e/assets-v1/35d8514e-33ec-479b-9392-a3d1aef5421c/exilia-hero-logo.jpg')",
        }}
      />
      <div aria-hidden className="fixed inset-0 -z-10 bg-background/70" />
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
