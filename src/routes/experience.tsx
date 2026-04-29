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

type LinkRef = { label: string; url: string };

type Item = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  description: React.ReactNode;
};

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2 hover:text-foreground"
  >
    {children}
  </a>
);

const items: Item[] = [
  {
    role: "Software Engineer Intern",
    org: "Apple",
    orgUrl: "https://www.apple.com/",
    period: "Summer 2025",
    description:
      "Automated a multi-stage 3D scanning pipeline in Python — covering alignment, contact extraction, and visualization — reducing processing time by an order of magnitude and eliminating manual steps. Standardized SOPs for both data processing and user studies, increasing data yield and ensuring reproducible anthropometric measurements. Developed preliminary contact-quality metrics that enabled early quantitative analysis and informed new feature development for next-generation health sensing technologies.",
  },
  {
    role: "Research Assistant",
    org: "Stanford Artificial Intelligence Laboratory",
    orgUrl: "https://ai.stanford.edu/",
    period: "2024 – Present",
    description: (
      <>
        Collaborating with the{" "}
        <ExtLink href="https://pac.stanford.edu/">
          Partnership in AI-Assisted Care (PAC)
        </ExtLink>{" "}
        group under Dr. Narayan Schutz,{" "}
        <ExtLink href="https://profiles.stanford.edu/fei-fei-li">
          Prof. Fei-Fei Li
        </ExtLink>
        , and{" "}
        <ExtLink href="https://profiles.stanford.edu/ehsan-adeli">
          Prof. Ehsan Adeli
        </ExtLink>{" "}
        to develop multi-view pose estimation and deep learning models for
        activity recognition and clinical applications in older adults.
      </>
    ),
  },
  {
    role: "AI Governance Researcher",
    org: "Stanford Existential Risks Initiative",
    orgUrl:
      "https://seri.stanford.edu/resources/courses/courses/courses/courses/courses/2026-seri-summer-fellowship",
    period: "Summer 2025",
    description:
      "Conducted an independent research project on frontier AI governance focused on monitoring indicators of existential risk, institutional design for cross-lab oversight, and pathways from voluntary norms to enforceable regulation. Developed a structured taxonomy of technical risk indicators and analyzed governance analogues from nuclear, biosecurity, and finance to propose scalable, multi-stakeholder oversight mechanisms for advanced AI systems.",
  },
  {
    role: "Student Fellow",
    org: "Hoover Institution",
    orgUrl: "https://www.hoover.org/",
    period: "2024 – 2025",
    description: (
      <>
        Conducted private sector outreach, organized a summit, performed
        employment data analysis, helped design chatbot interventions, and
        co-authored a report for the Hoover Institution's{" "}
        <ExtLink href="https://www.hoover.org/research-teams/future-work-women-initiative">
          Future of Work for Women Initiative
        </ExtLink>{" "}
        to identify scalable solutions for increasing female labor force
        participation in India with{" "}
        <ExtLink href="https://www.myna.org/about">Dr. Suhani Jalota</ExtLink>.
      </>
    ),
  },
  {
    role: "Undergraduate Researcher",
    org: "Stanford International Genetically Engineered Machine (iGEM)",
    orgUrl: "https://stanford-igem.org/",
    period: "Summer 2024",
    description: (
      <>
        Built a predictive gene expression model and disease progression
        simulator for{" "}
        <ExtLink href="https://www.fshsociety.org/about-fshd/what-is-fshd/">
          FSHD
        </ExtLink>{" "}
        using Poisson-Beta regression, physics-inspired neural networks, and
        ODE/Markov chain comparisons in collaboration with{" "}
        <ExtLink href="https://med.stanford.edu/">Stanford Medicine</ExtLink>.
        Won nominations for Best Therapeutic, Best Education, and Best Human
        Outreach in the{" "}
        <ExtLink href="https://2024.igem.wiki/stanford/">
          Paris iGEM 2024 Grand Jamboree
        </ExtLink>
        .
      </>
    ),
  },
  {
    role: "Research Assistant",
    org: "The Ohio State University Bioinformatics & Mathematical Biosciences Lab",
    orgUrl: "https://u.osu.edu/mabbielab/",
    period: "Summer 2023",
    description:
      "Applied computer vision and deep learning techniques to identify tissue modules in biomedical imaging data, enhancing precision in understanding biomedical data with Dr. Jordan Krull.",
  },
  {
    role: "Research Assistant",
    org: "The Ohio State University Department of Political Science",
    orgUrl: "https://polisci.osu.edu/",
    period: "2023",
    description: (
      <>
        Contributed to political science research by analyzing tweets from
        political figures and groups in the United States and coding them by
        sentiment for analysis with{" "}
        <ExtLink href="https://polisci.osu.edu/people/ritchie.155">
          Dr. Melinda Ritchie
        </ExtLink>
        .
      </>
    ),
  },
];

function Experience() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Experience</h1>
        <ul className="space-y-7">
          {items.map((it, i) => (
            <li key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {it.orgUrl ? (
                    <ExtLink href={it.orgUrl}>{it.org}</ExtLink>
                  ) : (
                    it.org
                  )}{" "}
                  — <span className="italic">{it.role}</span>
                </p>
                <p className="text-sm text-muted-foreground">{it.period}</p>
              </div>
              <p className="mt-1">{it.description}</p>
            </li>
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
