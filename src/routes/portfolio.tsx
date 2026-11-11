import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const brainTumorImg = { url: "/projects/brain-tumor.png" };
const cokeTrashImg = { url: "/projects/coke-trash.png" };
const wsjImg = { url: "/projects/wsj-article.png" };
const heapImg = { url: "/projects/heap.jpg" };
const musicImg = { url: "/projects/music.jpg" };
const acgmeImg = { url: "/projects/acgme.jpg" };
const brainMriImg = { url: "/projects/brain-mri.jpg" };
const governanceImg = { url: "/projects/governance-new.jpg" };
const olfactoryImg = { url: "/projects/olfactory.jpg" };
const rlooLeashImg = { url: "/projects/rloo-leash.jpg" };

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
  year: string;
  image: string;
  imageAlt: string;
  blurb: string;
  tags: string[];
  category: ProjectCategory;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Tool-Integrated RLOO and Pass@K: Testing the Invisible Leash",
    year: "2025",
    image: rlooLeashImg.url,
    imageAlt: "Abstract visualization of a branching reasoning tree with mathematical notation",
    blurb:
      'CS224R final project investigating whether reinforcement learning with verifiable rewards (RLVR) can expand a small language model\'s reasoning frontier beyond its pretrained action space. Tests tool-integrated RLOO against the "invisible leash" hypothesis using Pass@K evaluations.',
    tags: ["Reinforcement Learning", "Language Models", "RLVR", "Reasoning", "Tool Use"],
    category: "Computational Projects",
  },
  {
    title:
      "Olfactory Biomarkers as Early Indicators of Neurodegenerative Disease: A Survey of AI-Driven Sensing and Diagnostic Technologies",
    year: "2025",
    image: olfactoryImg.url,
    imageAlt: "Abstract illustration of an electronic-nose sensor detecting volatile compounds",
    blurb:
      "Survey paper examining sensor-based and AI-enabled approaches to olfactory assessment, including electronic-nose chemical sensing, VOC analysis, wearable nasal airflow monitoring, and olfactory-evoked EEG responses, framing olfaction as both a diagnostic biomarker and an intervention target for early detection of neurodegenerative decline.",
    tags: ["Medical AI", "Neurodegeneration", "Sensor Technology", "Early Detection", "Biomarkers"],
    category: "Computational Projects",
  },
  {
    title:
      "Exploring Deep Segmentation Models for Brain Tumors: CNNs, Transformers, and Promptable Architectures",
    year: "2025",
    image: brainTumorImg.url,
    imageAlt: "MRI brain scan used for tumor segmentation",
    blurb:
      "Developed deep learning models for automated brain tumor segmentation using the BraTS 2021 dataset, comparing CNNs, transformers, and promptable architectures for pixel-level tumor detection.",
    tags: [
      "Medical AI",
      "Computer Vision",
      "Deep Learning",
      "Semantic Segmentation",
      "Healthcare Technology",
    ],
    category: "Computational Projects",
  },
  {
    title: "Robust Brand Logo Detection Under Adversarial Conditions",
    year: "2025",
    image: cokeTrashImg.url,
    imageAlt: "Coca-Cola bottle next to a trash bag on a sidewalk",
    blurb:
      "Built a custom CNN with adversarial training to detect Coca-Cola logos under blur, noise, and occlusion. Achieved +13% accuracy over YOLOv8 with extensive data augmentation.",
    tags: ["Computer Vision", "Adversarial Robustness", "Object Detection", "Data Augmentation"],
    category: "Computational Projects",
  },
  {
    title: "Heap Allocator",
    year: "2025",
    image: heapImg.url,
    imageAlt: "Diagram of memory blocks of varying sizes",
    blurb:
      "Implemented a full implicit + explicit free list allocator in C, including malloc, free, and realloc. Built debugging utilities (validate_heap, dump_heap) and stress-tested on real allocation traces.",
    tags: ["Systems Programming", "Memory Management", "C", "Performance Optimization"],
    category: "Computational Projects",
  },
  {
    title: "What's in the noise? Musical Genre Classification using Neural Networks",
    year: "2024",
    image: musicImg.url,
    imageAlt: "Colorful mel spectrogram of an audio signal",
    blurb:
      "Trained VGG-style CNNs, GRUs, and LSTMs on mel spectrograms from GTZAN, incorporating noise, pitch-shift, and time-stretch augmentations for robustness.",
    tags: ["Audio Classification", "Deep Learning", "CNNs", "Music Information Retrieval"],
    category: "Computational Projects",
  },
  {
    title: "Protecting Against Propaganda: AI for Misinformation Detection & Critical Thinking",
    year: "2024",
    image: wsjImg.url,
    imageAlt: "Wall Street Journal article annotated with fallacies",
    blurb:
      'Built a GPT-4–powered browser extension that detects persuasive fallacies in political news, provides real-time annotations, and generates "extremeness" scores. Ran a pilot RCT to evaluate behavioral impacts.',
    tags: ["Human-AI Interaction", "Politics & Psychology", "Media Literacy", "Language Models"],
    category: "Computational Projects",
  },
  {
    title:
      "Seeing is Believing? A Sociotechnical Evaluation of Saliency Maps for Brain Tumor Segmentation",
    year: "2025",
    image: brainMriImg.url,
    imageAlt: "Grayscale MRI scan of a human brain",
    blurb:
      "Benchmarking Grad-CAM, Integrated Gradients, and GradientSHAP across segmentation models, combining quantitative evaluation with clinician + researcher feedback to assess clinical usability.",
    tags: ["Explainable AI", "Medical Imaging", "Model Interpretability", "Human-AI Interaction"],
    category: "AI Policy/Ethics",
  },
  {
    title:
      "Longitudinal Assessment of ACGME Milestone Progression: Evaluating Gender and Racial Differences Across Graduate Medical Education Specialties",
    year: "2024",
    image: acgmeImg.url,
    imageAlt: "Line chart of milestone progression trajectories",
    blurb:
      "Co-authored research manuscript with Stanford School of Medicine and the University of Utah. Retrospective cohort study of 2,814 graduate medical trainees (2014–2020) analyzing gender and racial disparities in ACGME Milestone progression across 107 hospital-based, medical, and surgical programs using Wilcoxon rank-sum, Kruskal-Wallis, and linear mixed-effects models.",
    tags: [
      "Medical Education",
      "Health Equity",
      "Biostatistics",
      "Bias in Assessment",
      "Longitudinal Analysis",
    ],
    category: "Computational Projects",
  },
  {
    title: "Governance of Frontier AI: Monitoring, Institutions, and Policy Transitions",
    year: "2025",
    image: governanceImg.url,
    imageAlt: "United States Capitol building at dusk",
    blurb:
      "Examines how to govern frontier AI before catastrophic risks materialize, proposing risk-monitoring taxonomies, cross-lab oversight architectures, and pathways from voluntary commitments to binding regulation.",
    tags: ["AI Governance", "AI Safety", "Policy", "Institutional Design", "Existential Risk"],
    category: "AI Policy/Ethics",
    href: "https://seri.stanford.edu/resources/courses/courses/courses/courses/courses/2026-seri-summer-fellowship",
  },
];

const filters: FilterKey[] = ["All", "Computational Projects", "AI Policy/Ethics"];

const teaching: { text: string; link?: { label: string; href: string } }[] = [
  {
    text: "Fall 2025/Spring 2026: CS106A Programming Methodologies — Python, Programming Concepts",
  },
  {
    text: "Spring 2025: CS106A through {LINK} — Python, Programming Concepts",
    link: { label: "Stanford Code in Place", href: "https://codeinplace.stanford.edu/" },
  },
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

  const projectYears = useMemo(
    () => [...new Set(visibleProjects.map((project) => project.year))].sort().reverse(),
    [visibleProjects],
  );

  return (
    <main className="min-h-screen pb-16 md:pb-24">
      <SiteNav />
      <article className="prose-academic mx-auto w-full max-w-6xl px-6 text-foreground">
        <h1>Portfolio</h1>

        <p>
          Selected coursework and research across AI, healthcare, policy, and human-centered
          computing.
        </p>

        <section className="mt-10 not-prose">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-foreground/25 pb-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={[
                      "border-b py-1 text-sm transition-colors",
                      isActive
                        ? "border-foreground font-bold text-foreground"
                        : "border-transparent text-foreground/55 hover:border-foreground/30 hover:text-foreground",
                    ].join(" ")}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-foreground/60">
              {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-10">
            {projectYears.map((year) => (
              <section key={year} className="mb-10" aria-labelledby={`projects-${year}`}>
                <h3
                  id={`projects-${year}`}
                  className="mb-2 text-right text-2xl font-normal text-foreground"
                >
                  {year}
                </h3>
                <div className="border-t border-foreground/25">
                  {visibleProjects
                    .filter((project) => project.year === year)
                    .map((project) => (
                      <article
                        key={project.title}
                        className="grid gap-5 border-b border-foreground/25 py-4 sm:grid-cols-[7.5rem_1fr] sm:items-start"
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          className="aspect-square w-full object-cover sm:w-[7.5rem]"
                        />
                        <div className="min-w-0 pt-0.5">
                          <h4 className="text-xl font-normal leading-snug text-foreground">
                            {project.href ? (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-4 hover:underline"
                              >
                                {project.title}
                              </a>
                            ) : (
                              project.title
                            )}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                            {project.blurb}
                          </p>
                          <p className="mt-2 text-sm text-foreground/60">
                            {project.category} · {project.tags.join(" · ")}
                          </p>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">Publications</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Xu, K. (2025). AI-driven personalized fall prevention for older adults.{" "}
            <em>Proceedings of the AAAI Conference on Artificial Intelligence</em>, 39(28), 29610.{" "}
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
        <p className="mt-3">
          I'm passionate about education and believe that great teaching is one of the most powerful
          tools we have for opening doors. Whether through section, office hours, or course design,
          I love helping students build confidence in computer science and discover that they belong
          in this field.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {teaching.map((t) => {
            if (!t.link) return <li key={t.text}>{t.text}</li>;
            const [before, after] = t.text.split("{LINK}");
            return (
              <li key={t.text}>
                {before}
                <a href={t.link.href} target="_blank" rel="noopener noreferrer">
                  {t.link.label}
                </a>
                {after}
              </li>
            );
          })}
          <li>
            Summer 2023: Mobile App Development through{" "}
            <a href="https://www.kodewithklossy.com/" target="_blank" rel="noopener noreferrer">
              Kode with Klossy
            </a>{" "}
            — Swift, App Development
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Volunteering</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {volunteering.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Katherine Wang Xu · <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
