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
          "Selected computational projects, teaching, and volunteering by Katherine Xu.",
      },
      { property: "og:title", content: "Portfolio — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Selected computational projects, teaching, and volunteering by Katherine Xu.",
      },
    ],
  }),
});

type Project = {
  title: string;
  blurb: string;
  topics: string;
};

const projects: Project[] = [
  {
    title:
      "Exploring Deep Segmentation Models for Brain Tumors: CNNs, Transformers, and Promptable Architectures",
    blurb:
      "Final project for Stanford's CS 231N: Deep Learning for Computer Vision (Spring 2025). Developed deep learning models for automated brain tumor segmentation using the BraTS 2021 dataset, comparing CNNs, transformers, and promptable architectures for pixel-level tumor detection.",
    topics:
      "Medical AI · Computer Vision · Deep Learning · Semantic Segmentation · Healthcare Technology",
  },
  {
    title: "Robust Brand Logo Detection Under Adversarial Conditions",
    blurb:
      "Final report for Stanford's CS 131: Computer Vision (Winter 2025). Built a custom CNN with adversarial training to detect Coca-Cola logos under blur, noise, and occlusion. Achieved +13% accuracy over YOLOv8 with extensive data augmentation.",
    topics:
      "Computer Vision · Adversarial Robustness · Object Detection · Data Augmentation",
  },
  {
    title: "Heap Allocator",
    blurb:
      "Final project for Stanford's CS 107 (Winter 2025). Implemented a full implicit + explicit free list allocator in C, including malloc, free, and realloc. Built debugging utilities (validate_heap, dump_heap) and stress-tested on real allocation traces.",
    topics:
      "Systems Programming · Memory Management · C · Performance Optimization",
  },
  {
    title:
      "What's in the noise? Musical Genre Classification using Neural Networks",
    blurb:
      "Final project for Stanford's CS 129 (Winter 2024). Trained VGG-style CNNs, GRUs, and LSTMs on mel spectrograms from GTZAN, incorporating noise, pitch-shift, and time-stretch augmentations for robustness.",
    topics:
      "Audio Classification · Deep Learning · CNNs · Music Information Retrieval",
  },
  {
    title:
      "Protecting Against Propaganda: AI for Misinformation Detection & Critical Thinking",
    blurb:
      "Final project for Stanford's CS 197 (Winter 2024). Built a GPT-4–powered browser extension that detects persuasive fallacies in political news, provides real-time annotations, and generates \"extremeness\" scores. Ran a pilot RCT to evaluate behavioral impacts.",
    topics:
      "Human-AI Interaction · Politics & Psychology · Media Literacy · Language Models",
  },
];

const teaching = [
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
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Portfolio</h1>

        <p>
          Inspired by my interdisciplinary coursework, I am drawn to research
          leveraging AI for positive change in the world. I aim to better
          understand technologies and how we interact with them to create AI
          systems that can support people through healthcare, policy, and
          overall in meaningful, human-centered ways.
        </p>

        <p>
          Below is a collection of works that summarize my academic interests.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Computational Projects
        </h2>
        <ul className="mt-4 space-y-7">
          {projects.map((p, i) => (
            <li key={i}>
              <p className="font-medium italic">{p.title}</p>
              <p className="mt-1">{p.blurb}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Topics: {p.topics}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          AI Policy/Ethics
        </h2>
        <ul className="mt-4 space-y-7">
          <li>
            <p className="font-medium italic">
              Seeing is Believing? A Sociotechnical Evaluation of Saliency
              Maps for Brain Tumor Segmentation
            </p>
            <p className="mt-1">
              Final poster for Stanford's CS 281: Ethics of Artificial
              Intelligence (Spring 2025). Benchmarking Grad-CAM, Integrated
              Gradients, and GradientSHAP across segmentation models,
              combining quantitative evaluation with clinician + researcher
              feedback to assess clinical usability.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Topics: Explainable AI · Medical Imaging · Model Interpretability
              · Human-AI Interaction
            </p>
          </li>
          <li>
            <p className="font-medium italic">
              Governance of Frontier AI: Monitoring, Institutions, and Policy
              Transitions
            </p>
            <p className="mt-1">
              Final research paper for the{" "}
              <a
                href="https://seri.stanford.edu/resources/courses/courses/courses/courses/courses/2026-seri-summer-fellowship"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Stanford Existential Risks Initiative (SERI)
              </a>{" "}
              Summer 2025. Examines how to govern frontier AI before
              catastrophic risks materialize. Develops a three-tiered taxonomy
              of monitoring indicators (capabilities, behavioral tendencies,
              and contextual triggers) for early detection of deception, goal
              misgeneralization, and power-seeking behavior; proposes
              institutional architectures for cross-lab and cross-border
              oversight drawing on analogies from the IAEA, NSABB, and Basel
              Committee; and outlines mechanisms for transitioning from
              voluntary commitments to binding regulation through audits,
              compliance cards, and staged oversight regimes.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Topics: AI Governance · AI Safety · Policy · Institutional
              Design · Existential Risk
            </p>
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Teaching</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {teaching.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Volunteering
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {volunteering.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Katherine Wang Xu ·{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </footer>
      </article>
    </main>
  );
}
