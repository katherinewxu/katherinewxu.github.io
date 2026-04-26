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
  period: string;
  description: string;
};

const items: Item[] = [
  {
    role: "Software Engineer Intern",
    org: "Apple",
    period: "Summer 2025",
    description:
      "Automated a multi-stage 3D scanning pipeline in Python — covering alignment, contact extraction, and visualization — reducing processing time by an order of magnitude and eliminating manual steps. Standardized SOPs for both data processing and user studies, increasing data yield and ensuring reproducible anthropometric measurements. Developed preliminary contact-quality metrics that enabled early quantitative analysis and informed new feature development for next-generation health sensing technologies.",
  },
  {
    role: "Research Assistant",
    org: "Stanford Artificial Intelligence Laboratory",
    period: "2024 – Present",
    description:
      "Collaborating with the Partnership in AI-Assisted Care (PAC) group under Dr. Narayan Schutz, Prof. Fei-Fei Li, and Prof. Ehsan Adeli to develop multi-view pose estimation and deep learning models for activity recognition and clinical applications in older adults.",
  },
  {
    role: "AI Governance Researcher",
    org: "Stanford Existential Risks Initiative",
    period: "Summer 2025",
    description:
      "Conducted an independent research project on frontier AI governance focused on monitoring indicators of existential risk, institutional design for cross-lab oversight, and pathways from voluntary norms to enforceable regulation. Developed a structured taxonomy of technical risk indicators and analyzed governance analogues from nuclear, biosecurity, and finance to propose scalable, multi-stakeholder oversight mechanisms for advanced AI systems.",
  },
  {
    role: "Student Fellow",
    org: "Hoover Institution",
    period: "2024 – 2025",
    description:
      "Conducted private sector outreach, organized a summit, performed employment data analysis, helped design chatbot interventions, and co-authored a report for the Hoover Institution's Future of Work for Women Initiative to identify scalable solutions for increasing female labor force participation in India with Dr. Suhani Jalota.",
  },
  {
    role: "Undergraduate Researcher",
    org: "Stanford International Genetically Engineered Machine (iGEM)",
    period: "Summer 2024",
    description:
      "Built a predictive gene expression model and disease progression simulator for FSHD using Poisson-Beta regression, physics-inspired neural networks, and ODE/Markov chain comparisons in collaboration with Stanford Medicine. Won nominations for Best Therapeutic, Best Education, and Best Human Outreach in the Paris iGEM 2024 Grand Jamboree.",
  },
  {
    role: "Research Assistant",
    org: "The Ohio State University Bioinformatics & Mathematical Biosciences Lab",
    period: "Summer 2023",
    description:
      "Applied computer vision and deep learning techniques to identify tissue modules in biomedical imaging data, enhancing precision in understanding biomedical data with Dr. Jordan Krull.",
  },
  {
    role: "Research Assistant",
    org: "The Ohio State University Department of Political Science",
    period: "2023",
    description:
      "Contributed to political science research by analyzing tweets from political figures and groups in the United States and coding them by sentiment for analysis with Dr. Melinda Ritchie.",
  },
];

function Experience() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Experience</h1>
        <ul className="space-y-7">
          {items.map((it, i) => (
            <li key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {it.org} — <span className="italic">{it.role}</span>
                </p>
                <p className="text-sm text-muted-foreground">{it.period}</p>
              </div>
              <p className="mt-1">{it.description}</p>
            </li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2025 Katherine Wang Xu ·{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </footer>
      </article>
    </main>
  );
}
