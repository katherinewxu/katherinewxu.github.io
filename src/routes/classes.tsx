import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/classes")({
  component: Classes,
  head: () => ({
    meta: [
      { title: "Classes — Katherine Xu" },
      {
        name: "description",
        content:
          "List of classes Katherine Xu has taken at Stanford and Oxford.",
      },
      { property: "og:title", content: "Classes — Katherine Xu" },
      {
        property: "og:description",
        content:
          "List of classes Katherine Xu has taken at Stanford and Oxford.",
      },
    ],
  }),
});

const stanford: { code: string; title: string }[] = [
  // 2025–2026 Spring
  { code: "CS 224R", title: "Deep Reinforcement Learning" },
  {
    code: "CS 235",
    title:
      "Computational Methods for Biomedical Image Analysis and Interpretation",
  },
  { code: "CS 273B", title: "Deep Learning in Genomics and Biomedicine" },
  { code: "ENGLISH 177B", title: "Contemporary American Short Stories" },
  { code: "MUSIC 72G", title: "Gu-Zheng Class" },
  // 2025–2026 Autumn
  { code: "CS 221", title: "Artificial Intelligence: Principles and Techniques" },
  { code: "CS 198", title: "Teaching Computer Science" },
  { code: "CS 199", title: "Independent Work" },
  { code: "ENGR 40M", title: "An Intro to Making: What is EE" },
  { code: "EPS 5", title: "Living on the Edge" },
  { code: "LINGUIST 145", title: "Introduction to Psycholinguistics" },
  {
    code: "OTOHNS 206",
    title:
      "Augmenting Human Senses: Enhancing Perception with Technology and Bioscience",
  },
  // 2025–2026 Winter (Oxford)
  { code: "CS 205L", title: "Continuous Mathematical Methods with an Emphasis on Machine Learning" },
  // 2024–2025 Spring
  { code: "CS 281", title: "Ethics of Artificial Intelligence" },
  { code: "CS 231N", title: "Deep Learning for Computer Vision" },
  { code: "CS 202", title: "Law for Computer Science Professionals" },
  { code: "PHIL 81", title: "Philosophy and Literature" },
  {
    code: "ENGLISH 66",
    title: "'A Model Island': Britain in Historical and Cultural Perspective",
  },
  { code: "MUSIC 72G", title: "Gu-Zheng Class" },
  // 2024–2025 Winter
  { code: "CS 131", title: "Computer Vision: Foundations and Applications" },
  { code: "CS 107", title: "Computer Organization and Systems" },
  { code: "SYMSYS 1", title: "Minds and Machines" },
  { code: "SYMSYS 280", title: "Symbolic Systems Research Seminar" },
  { code: "EARTHSYS 213", title: "Innovation for Climate and Sustainability" },
  { code: "OUTDOOR 106", title: "Outdoor Leadership Practicum" },
  // 2024–2025 Autumn
  { code: "CS 161", title: "Design and Analysis of Algorithms" },
  { code: "PSYCH 1", title: "Introduction to Psychology" },
  { code: "EMED 126", title: "Wilderness First Responder" },
  { code: "MUSIC 220D", title: "Research in Computer-Generated Music" },
  { code: "PWR 2SNA", title: "Writing & Rhetoric 2: The Rhetoric of Bodies" },
  // 2023–2024 Summer
  {
    code: "OCEANS 10SC",
    title:
      "Discover Monterey Bay through Oceanography, Ecology, and Literature",
  },
  // 2023–2024 Spring
  { code: "BIO 150", title: "Human Behavioral Biology" },
  {
    code: "BIOE 80",
    title: "Introduction to Bioengineering (Engineering Living Matter)",
  },
  {
    code: "BIOE 191",
    title: "Bioengineering Problems and Experimental Investigation",
  },
  { code: "CS 103", title: "Mathematical Foundations of Computing" },
  { code: "CS 103ACE", title: "Mathematical Problem-Solving Strategies" },
  {
    code: "PWR 1AH",
    title:
      "Writing & Rhetoric 1: The Rhetoric of American Multicultural Experience",
  },
  // 2023–2024 Winter
  { code: "CS 129", title: "Applied Machine Learning" },
  { code: "CS 197", title: "Computer Science Research" },
  { code: "CS 109", title: "Introduction to Probability for Computer Scientists" },
  { code: "DESIGN 283Q", title: "Tinkering with Inequity in Emerging Tech" },
  { code: "COLLEGE 102", title: "Citizenship in the 21st Century" },
  { code: "MUSIC 12B", title: "Introductory Piano Class" },
  // 2023–2024 Autumn
  { code: "CS 106B", title: "Programming Abstractions" },
  { code: "CS 106S", title: "Coding for Social Good" },
  { code: "MATH 51", title: "Linear Algebra, Multivariable Calculus, and Modern Applications" },
  {
    code: "ANTHRO 27N",
    title: "Ethnicity and Violence: Anthropological Perspectives",
  },
  { code: "COLLEGE 101", title: "Why College? Your Education and the Good Life" },
  {
    code: "EDUC 64",
    title:
      "Shaping America's Future: Exploring the Key Issues on Our Path to the 2024 Elections",
  },
  { code: "SYMSYS 280", title: "Symbolic Systems Research Seminar" },
];

const oxford: { code: string; title: string }[] = [
  { code: "OSPOXFRD 57", title: "The Rise of the Woman Writer 1660-1860" },
  { code: "OSPOXFRD 195A", title: "Oxford Tutorial — Modern Literature and Literary Criticism" },
];

function Classes() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Classes</h1>

        <h2 className="mt-2 text-xl font-semibold tracking-tight">At Stanford</h2>
        <hr className="my-3 border-border" />
        <p className="italic text-muted-foreground">
          Chronological order (newest first)
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {stanford.map((c, i) => (
            <li key={`s-${i}`}>
              <span className="font-semibold">{c.code}</span> {c.title}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          At Oxford
        </h2>
        <hr className="my-3 border-border" />
        <p className="italic text-muted-foreground">Winter 2026</p>
        <ul className="list-disc pl-6 space-y-1">
          {oxford.map((c, i) => (
            <li key={`o-${i}`}>
              <span className="font-semibold">{c.code}</span> {c.title}
            </li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Katherine Wang Xu ·{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href="https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        </footer>
      </article>
    </main>
  );
}
