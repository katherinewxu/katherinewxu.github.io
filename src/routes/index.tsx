import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const profileLinks = [
  { label: "GitHub", href: "https://github.com/katherinewxu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/katherine-xu-6758421b1/" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works",
  },
];

const research = [
  {
    title:
      "In vitro and in silico characterization of competitive inhibition and repression of DUX4 target gene activation as a therapeutic approach for facioscapulohumeral muscular dystrophy (FSHD)",
    authors:
      "Heloise M. Hoffmann, Alice Finkelstein, Amanuel Geremew, Katherine Xu, Vanessa Chiprez Meza, Ayushi Mohanty, Maria Fernanda Velásquez, Michael Liu, Alex Engel, Phillip Kyriakakis",
    summary:
      "We evaluate a competitive inhibition strategy designed to reduce toxic DUX4 target-gene activation in FSHD.",
    href: "https://www.biorxiv.org/content/10.64898/2026.08.04.742607v3.abstract",
  },
  {
    title: "Audit Before Design: Failure Modes of SAE-Guided Steering in Genomic Foundation Models",
    authors: "Katherine Xu",
    summary:
      "We audit the limits of sparse autoencoder guided steering in genomic foundation models.",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Sli3mxEAAAAJ&citation_for_view=Sli3mxEAAAAJ:9yKSN-GCB0IC",
  },
  {
    title: "AI-driven personalized fall prevention for older adults",
    authors: "Katherine Xu",
    summary:
      "We present a personalized monitoring and intervention framework for fall prevention among older adults.",
    href: "https://ojs.aaai.org/index.php/AAAI/article/view/35342",
  },
  {
    title:
      "Effects of Acculturation of Eating Disorder Prevalence Across Generations of Asian American Immigrants",
    authors:
      "Tejas Devata, Veda Devata, Bianca Chiu, Karen Lin, Gouri Garg, Edward Thomas, Jennifer Lee, Cynthia Tan, Julia Ongking, Katherine Xu, Shreyas Pannase, Dada Dadas",
    summary:
      "We examine how acculturation and immigrant generation relate to eating disorder prevalence among Asian American communities.",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Sli3mxEAAAAJ&citation_for_view=Sli3mxEAAAAJ:d1gkVwhDpl0C",
  },
];

function ResearchAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Katherine Xu");

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <span className="font-normal text-[var(--accent-green)]">Katherine Xu</span>
      )}
    </span>
  ));
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Katherine Xu" },
      {
        name: "description",
        content:
          "Katherine Xu, Stanford student in Symbolic Systems and Computer Science, researching AI for human benefit.",
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
    <main className="min-h-screen pb-16 md:pb-24">
      <SiteNav />

      <header className="mx-auto max-w-3xl px-6 pb-12 pt-24 sm:pt-28">
        <h1 className="font-display text-5xl font-normal tracking-[-0.02em] text-foreground">
          Katherine Wang Xu
        </h1>
      </header>

      <article className="prose-academic mx-auto w-full max-w-3xl px-6 text-foreground">
        <p>
          I am a student at Stanford University pursuing a B.S. in Symbolic Systems (
          <a href="https://symsys.stanford.edu/" target="_blank" rel="noopener noreferrer">
            What's SymSys?
          </a>
          ) with a concentration in AI and concurrently pursuing an M.S. in Computer Science (AI),
          advised by{" "}
          <a
            href="https://www.linkedin.com/in/jerrycainjr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jerry Cain
          </a>{" "}
          and Professor{" "}
          <a href="https://stanford.edu/~eadeli/" target="_blank" rel="noopener noreferrer">
            Ehsan Adeli
          </a>
          .
        </p>

        <p>
          I'm passionate about finding new ways to use AI to benefit humanity. At Stanford, I'm a
          student researcher in James Zou's{" "}
          <a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
            Stanford AI for Science Lab
          </a>
          , where my research interests include evaluating AI-scientist agents, verification,
          memory, and reproducible scientific workflows.
        </p>

        <p>
          Previously, I worked at{" "}
          <a href="https://inflection.ai/" target="_blank" rel="noopener noreferrer">
            Inflection AI
          </a>{" "}
          and{" "}
          <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
            Apple
          </a>{" "}
          in research and engineering roles.
        </p>

        <p>
          I'm also devoted to the humanities. From studying literature and literary criticism at
          Oxford to thinking through the ethics of AI, I believe the questions worth asking about
          technology are ultimately questions about people, language, and meaning.
        </p>

        <p>
          In my free time, I enjoy exploring the outdoors, sampling the local food scene, curating
          increasingly niche Spotify playlists, and reading. Some of my favorite books can be found{" "}
          <Link to="/bookshelf">here</Link>.
        </p>

        <p>
          Feel free to reach me at <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a>.
        </p>

        <nav aria-label="Profile links" className="mt-10 flex flex-wrap items-center gap-x-2">
          {profileLinks.map((profileLink, index) => (
            <span key={profileLink.label}>
              {index > 0 && <span className="mr-2 text-foreground/45">/</span>}
              <a href={profileLink.href} target="_blank" rel="noopener noreferrer">
                {profileLink.label}
              </a>
            </span>
          ))}
        </nav>

        <section className="mt-20" aria-labelledby="updates-heading">
          <h2 id="updates-heading" className="font-display text-3xl font-normal">
            Updates
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[1rem] leading-[1.5] marker:text-foreground/45">
            <li>
              [08/04/2026] Our Stanford iGEM work on competitive DUX4 inhibition for FSHD is now
              available as a{" "}
              <a
                href="https://www.biorxiv.org/content/10.64898/2026.08.04.742607v3.abstract"
                target="_blank"
                rel="noopener noreferrer"
              >
                bioRxiv preprint
              </a>
              .
            </li>
            <li>
              [06/2026] I joined James Zou's{" "}
              <a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
                Stanford AI for Science Lab
              </a>{" "}
              to study evaluations, verification, and reproducible scientific workflows.
            </li>
            <li>
              [Spring 2026] I served as Head Teaching Assistant for{" "}
              <a href="https://codeinplace.stanford.edu/" target="_blank" rel="noopener noreferrer">
                Stanford Code in Place
              </a>
              .
            </li>
            <li>
              [Winter 2026] I studied Modern Literature and Literary Criticism at{" "}
              <a href="https://www.magd.ox.ac.uk/" target="_blank" rel="noopener noreferrer">
                Magdalen College, Oxford
              </a>
              .
            </li>
            <li>
              [2025] Our work on{" "}
              <a
                href="https://ojs.aaai.org/index.php/AAAI/article/view/35342"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI-driven personalized fall prevention for older adults
              </a>{" "}
              appeared at AAAI.
            </li>
            <li>
              [10/26/2024] Stanford iGEM won a Gold Medal at the{" "}
              <a
                href="https://engineering.stanford.edu/news/undergraduates-earn-gold-genetic-engineering-contest"
                target="_blank"
                rel="noopener noreferrer"
              >
                iGEM Grand Jamboree in Paris
              </a>{" "}
              for our project, “dux.”
            </li>
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="research-heading">
          <h2 id="research-heading" className="font-display text-3xl font-normal">
            Research
          </h2>
          <p className="mt-4">
            Find all my published research on{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            .
          </p>
          <div className="mt-8 space-y-10">
            {research.map((item) => (
              <article key={item.title} className="research-entry not-prose">
                <h3 className="font-bookshelf text-[1.28rem] font-normal leading-[1.2] tracking-[-0.015em] sm:text-[1.42rem]">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 text-[0.98rem] leading-[1.45] text-foreground/90">
                  <ResearchAuthors authors={item.authors} />
                </p>
                <p className="mt-2 text-[0.98rem] leading-[1.5] text-foreground/70">
                  {item.summary}
                </p>
                <p className="mt-2 text-[0.95rem]">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link)] underline underline-offset-4 hover:text-[var(--link-hover)]"
                  >
                    [Paper]
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
