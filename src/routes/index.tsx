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
          I'm passionate about using AI to benefit humanity. At Stanford, I study reliable
          AI-scientist agents in James Zou's{" "}
          <a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
            Stanford AI for Science Lab
          </a>
          .
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
          in roles spanning research and engineering.
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
              [09/2026] Our work,{" "}
              <a
                href="https://openreview.net/forum?id=Ra1o0e3uMs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audit Before Design: Failure Modes of SAE-Guided Steering in Genomic Foundation
                Models
              </a>
              , audits the limits of sparse autoencoder guided steering in genomic foundation
              models.
            </li>
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
              [06/22/2026] I joined{" "}
              <a href="https://inflection.ai/" target="_blank" rel="noopener noreferrer">
                Inflection AI
              </a>{" "}
              for the summer, working across research and engineering.
            </li>
            <li>
              [Winter 2026] I studied Modern Literature and Literary Criticism at{" "}
              <a href="https://www.magd.ox.ac.uk/" target="_blank" rel="noopener noreferrer">
                Magdalen College, Oxford
              </a>
              .
            </li>
            <li>
              [06/23/2025] I joined{" "}
              <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
                Apple
              </a>{" "}
              for the summer, working across research and engineering.
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
      </article>
    </main>
  );
}
