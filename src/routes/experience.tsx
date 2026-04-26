import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/experience")({
  component: Experience,
  head: () => ({
    meta: [
      { title: "Experience — Katherine Xu" },
      {
        name: "description",
        content:
          "Research, internships, and academic experience of Katherine Xu, Stanford Symbolic Systems and CS student.",
      },
      { property: "og:title", content: "Experience — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Research, internships, and academic experience of Katherine Xu.",
      },
    ],
  }),
});

type Item = {
  role: string;
  org: string;
  href?: string;
  period: string;
  description: string;
};

const research: Item[] = [
  {
    role: "Student Researcher",
    org: "Stanford Vision and Learning Lab (SVL)",
    href: "https://svl.stanford.edu/",
    period: "2023 — Present",
    description:
      "Working with Professors Fei-Fei Li and Ehsan Adeli at the Partnership in AI-Assisted Care on computer vision systems for healthcare.",
  },
];

const academic: Item[] = [
  {
    role: "B.S. Symbolic Systems (AI) & M.S. Computer Science (AI)",
    org: "Stanford University",
    href: "https://symsys.stanford.edu/",
    period: "Expected 2026",
    description:
      "Coursework across machine learning, natural language processing, cognitive science, and probabilistic modeling. Advised by Prof. Jerry Cain and Prof. Ehsan Adeli.",
  },
];

const teaching: Item[] = [
  {
    role: "Course Assistant",
    org: "Stanford Computer Science",
    period: "2024 — Present",
    description:
      "Supporting introductory programming and AI coursework, holding office hours and grading.",
  },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="space-y-5">
        {items.map((it, i) => (
          <li key={i}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-medium">
                {it.role} ·{" "}
                {it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer">
                    {it.org}
                  </a>
                ) : (
                  <span>{it.org}</span>
                )}
              </p>
              <p className="text-sm text-muted-foreground">{it.period}</p>
            </div>
            <p className="mt-1">{it.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Experience</h1>
        <Section title="Research" items={research} />
        <Section title="Education" items={academic} />
        <Section title="Teaching" items={teaching} />
      </article>
    </main>
  );
}
