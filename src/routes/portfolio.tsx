import { useMemo, useState } from "react";
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
          "Selected computational projects, AI policy work, teaching, and volunteering by Katherine Xu.",
      },
      { property: "og:title", content: "Portfolio — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Selected computational projects, AI policy work, teaching, and volunteering by Katherine Xu.",
      },
    ],
  }),
});

type ProjectCategory = "Computational Projects" | "AI Policy/Ethics";
type FilterKey = "All" | ProjectCategory;

type Project = {
  title: string;
  blurb: string;
  topics: string;
  category: ProjectCategory;
  href?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title:
      "Exploring Deep Segmentation Models for Brain Tumors: CNNs, Transformers, and Promptable Architectures",
    blurb:
      "Final project for Stanford's CS 231N: Deep Learning for Computer Vision (Spring 2025). Developed deep learning models for automated brain tumor segmentation using the BraTS 2021 dataset, comparing CNNs, transformers, and promptable architectures for pixel-level tumor detection.",
    topics:
      "Medical AI · Computer Vision · Deep Learning · Semantic Segmentation · Healthcare Technology",
    category: "Computational Projects",
  },
  {
    title: "Robust Brand Logo Detection Under Adversarial Conditions",
    blurb:
      "Final report for Stanford's CS 131: Computer Vision (Winter 2025). Built a custom CNN with adversarial training to detect Coca-Cola logos under blur, noise, and occlusion. Achieved +13% accuracy over YOLOv8 with extensive data augmentation.",
    topics:
      "Computer Vision · Adversarial Robustness · Object Detection · Data Augmentation",
    category: "Computational Projects",
  },
  {
    title: "Heap Allocator",
    blurb:
      "Final project for Stanford's CS 107 (Winter 2025). Implemented a full implicit + explicit free list allocator in C, including malloc, free, and realloc. Built debugging utilities (validate_heap, dump_heap) and stress-tested on real allocation traces.",
    topics:
      "Systems Programming · Memory Management · C · Performance Optimization",
    category: "Computational Projects",
  },
  {
    title:
      "What's in the noise? Musical Genre Classification using Neural Networks",
    blurb:
      "Final project for Stanford's CS 129 (Winter 2024). Trained VGG-style CNNs, GRUs, and LSTMs on mel spectrograms from GTZAN, incorporating noise, pitch-shift, and time-stretch augmentations for robustness.",
    topics:
      "Audio Classification · Deep Learning · CNNs · Music Information Retrieval",
    category: "Computational Projects",
  },
  {
    title:
      "Protecting Against Propaganda: AI for Misinformation Detection & Critical Thinking",
    blurb:
      'Final project for Stanford\'s CS 197 (Winter 2024). Built a GPT-4–powered browser extension that detects persuasive fallacies in political news, provides real-time annotations, and generates "extremeness" scores. Ran a pilot RCT to evaluate behavioral impacts.',
    topics:
      "Human-AI Interaction · Politics & Psychology · Media Literacy · Language Models",
    category: "Computational Projects",
  },
  {
    title:
      "Seeing is Believing? A Sociotechnical Evaluation of Saliency Maps for Brain Tumor Segmentation",
    blurb:
      "Final poster for Stanford's CS 281: Ethics of Artificial Intelligence (Spring 2025). Benchmarking Grad-CAM, Integrated Gradients, and GradientSHAP across segmentation models, combining quantitative evaluation with clinician + researcher feedback to assess clinical usability.",
    topics:
      "Explainable AI · Medical Imaging · Model Interpretability · Human-AI Interaction",
    category: "AI Policy/Ethics",
  },
  {
    title: "Governance of Frontier AI: Monitoring, Institutions, and Policy Transitions",
    blurb:
      "Final research paper for the Stanford Existential Risks Initiative (SERI) Summer 2025. Examines how to govern frontier AI before catastrophic risks materialize, proposing risk-monitoring taxonomies, cross-lab oversight architectures, and pathways from voluntary commitments to binding regulation.",
    topics:
      "AI Governance · AI Safety · Policy · Institutional Design · Existential Risk",
    category: "AI Policy/Ethics",
    href: "https://seri.stanford.edu/resources/courses/courses/courses/courses/courses/2026-seri-summer-fellowship",
    linkLabel: "SERI",
  },
];

const filters: FilterKey[] = ["All", "Computational Projects", "AI Policy/Ethics"];

const teaching = [
  "Spring 2026: CS106A Programming Methodologies — Python, Programming Concepts",
  "Spring 2026: Stanford Code in Place — Head TA",
  "Fall 2025: CS106A Programming Methodologies — Python, Programming Concepts",
  "Spring 2025: CS106A through Stanford Code in Place — Python, Programming Concepts",
];

const volunteering = [
  "Stanford Women in Computer Science 2025 — Director of Outreach",
  "ASES Launchpad 2025 — Organizer",
  "Listen to the Silence 2024 — Workshops Co-Chair",
  "Black LaiR — CS106A/106B Course Helper",
  "Stanford Women in Computer Science 2024 — Outreach Intern",
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-5xl text-foreground">
        <h1>Portfolio</h1>

        <p className="max-w-2xl">
          Inspired by my interdisciplinary coursework, I am drawn to research
          leveraging AI for positive change in the world. I aim to better
          understand technologies and how we interact with them to create AI
          systems that can support people through healthcare, policy, and
          overall in meaningful, human-centered ways.
        </p>

        <p className="max-w-2xl">
          Below is a collection of works that summarize my academic interests.
        </p>

        <section className="mt-10 not-prose">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Project Archive
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Selected coursework, research, and policy projects.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={[
                    "min-w-[5.5rem] border px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col border border-border bg-background p-5"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-3 text-[1.35rem] leading-tight font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-foreground/90">
                  {project.blurb}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {project.topics}
                </p>
                {project.href ? (
                  <p className="mt-4 text-sm">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel ?? "Related link"}
                    </a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">Publications</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Xu, K. (2025). AI-driven personalized fall prevention for older
            adults. <em>Proceedings of the AAAI Conference on Artificial
            Intelligence</em>, 39(28), 29610.{" "}
            <a
              href="https://ojs.aaai.org/index.php/AAAI/article/view/35342"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Teaching</h2>
        <p className="mt-3 max-w-2xl">
          I'm passionate about education and believe that great teaching is one
          of the most powerful tools we have for opening doors. Whether through
          section, office hours, or course design, I love helping students build
          confidence in computer science and discover that they belong in this
          field.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {teaching.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Volunteering
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {volunteering.map((v) => (
            <li key={v}>{v}</li>
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
