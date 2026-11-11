import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

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
        <h1 className="text-5xl font-bold tracking-[-0.035em] text-foreground">
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
          , where I work on evaluations and verifiers for AI-scientist agents.
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
      </article>
    </main>
  );
}
