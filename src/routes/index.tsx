import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SpeckleText } from "@/components/SpeckleText";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Katherine Xu" },
      {
        name: "description",
        content:
          "Katherine Xu — Stanford student in Symbolic Systems and Computer Science, researching AI for human benefit.",
      },
      { property: "og:title", content: "Katherine Xu" },
      {
        property: "og:description",
        content:
          "Stanford student in Symbolic Systems (AI) and CS, researching AI for human benefit at Stanford Vision and Learning Lab.",
      },
    ],
  }),
});

function Index() {
  return (
    <Index_Inner />
  );
}

function Index_Inner() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero takes full viewport. Fade out over first 100vh of scroll.
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.min(1, scrollY / (vh * 0.7));
  const heroOpacity = 1 - progress;
  const heroScale = 1 - progress * 0.08;
  const heroTranslate = -progress * 40;

  return (
    <main className="pb-16 md:pb-24">
      <SiteNav />

      {/* Full-screen interactive hero */}
      <div
        ref={heroRef}
        className="pointer-events-none fixed inset-0 z-10 flex h-[100svh] w-full items-center justify-center"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslate}px) scale(${heroScale})`,
          willChange: "opacity, transform",
        }}
        aria-hidden={progress > 0.95 ? "true" : undefined}
      >
        <div className="pointer-events-auto mx-auto w-full max-w-5xl px-6">
          <SpeckleText text="katherine" />
        </div>
      </div>

      <article className="prose-academic relative z-20 mx-auto mt-[80svh] w-full max-w-3xl bg-background px-6 pt-12 text-foreground">

        <p>
          I am a student at Stanford University pursuing a B.S. in Symbolic Systems
          (
          <a
            href="https://symsys.stanford.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What's SymSys?
          </a>
          ) with a concentration in AI and concurrently pursuing an M.S. in Computer
          Science (AI), advised by{" "}
          <a
            href="https://www.linkedin.com/in/jerrycainjr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jerry Cain
          </a>{" "}
          and Professor{" "}
          <a
            href="https://stanford.edu/~eadeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ehsan Adeli
          </a>
          .
        </p>

        <p>
          I'm passionate about finding new ways to use AI to benefit humanity. At
          Stanford, I'm a student researcher at the Stanford Vision and Learning
          Lab (SVL), working with Professors Fei-Fei Li and Ehsan Adeli at the{" "}
          <a
            href="https://med.stanford.edu/content/sm/pacresearch.html/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partnership in AI-Assisted Care
          </a>
          .
        </p>

        <p>
          I'm also devoted to the humanities. From studying literature and
          literary criticism at Oxford to thinking through the ethics of AI, I
          believe the questions worth asking about technology are ultimately
          questions about people, language, and meaning.
        </p>

        <p>
          In my free time, I enjoy exploring the outdoors, sampling the local food
          scene, curating increasingly niche Spotify playlists, and reading. Some
          of my favorite books can be found <Link to="/bookshelf">here</Link>.
        </p>

        <p>
          Feel free to reach me at{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a>.
        </p>
      </article>
    </main>
  );
}
