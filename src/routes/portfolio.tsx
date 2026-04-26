import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio — Katherine Xu" },
      {
        name: "description",
        content:
          "Selected projects by Katherine Xu in AI, computer vision, and applied machine learning.",
      },
      { property: "og:title", content: "Portfolio — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Selected projects by Katherine Xu in AI, computer vision, and applied ML.",
      },
    ],
  }),
});

type Project = {
  title: string;
  href?: string;
  period: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "AI-Assisted Clinical Vision",
    period: "2024",
    description:
      "Computer vision pipeline for activity recognition in clinical settings, exploring privacy-preserving representations for hospital environments.",
    tags: ["Computer Vision", "Healthcare", "PyTorch"],
  },
  {
    title: "Symbolic Reasoning with LLMs",
    period: "2024",
    description:
      "Investigating how large language models combine symbolic structure with learned representations on multi-step reasoning benchmarks.",
    tags: ["NLP", "Reasoning", "LLMs"],
  },
  {
    title: "Personal Music Recommender",
    period: "2023",
    description:
      "A small recommender that turns my listening history into increasingly niche Spotify playlists using collaborative filtering and audio features.",
    tags: ["RecSys", "Spotify API", "Python"],
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Portfolio</h1>
        <p>
          A selection of projects I've worked on. For source code and more, see
          my{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>

        <ul className="mt-8 space-y-8">
          {projects.map((p, i) => (
            <li key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="text-lg font-semibold">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h2>
                <p className="text-sm text-muted-foreground">{p.period}</p>
              </div>
              <p className="mt-1">{p.description}</p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                {p.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
