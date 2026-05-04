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
          "Katherine Xu — Stanford student in Symbolic Systems and Computer Science, researching AI for human benefit.",
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
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Katherine Xu</h1>

        <p>
          I am a student at Stanford University pursuing a B.S. in Symbolic Systems
          (
          <a
            href="https://symsys.stanford.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What's SymSys?
          </a>
          ) with a concentration in AI and concurrently pursuing an M.S. in Computer
          Science (AI), advised by Professor Jerry Cain and Professor Ehsan Adeli.
        </p>

        <p>
          I'm passionate about finding new ways to use AI to benefit humanity. At
          Stanford, I'm a student researcher at the Stanford Vision and Learning
          Lab (SVL), working with Professors Fei-Fei Li and Ehsan Adeli at the{" "}
          <a
            href="https://med.stanford.edu/content/sm/pacresearch.html/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partnership in AI-Assisted Care
          </a>
          .
        </p>

        <p>
          In my free time, I enjoy exploring the outdoors, sampling the local food
          scene, curating increasingly niche Spotify playlists, and reading. Some
          of my favorite books can be found <Link to="/bookshelf">here</Link>.
        </p>

        <p>
          Feel free to reach me at{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a>. You can
          also find my publications on{" "}
          <a
            href="https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>
      </article>
    </main>
  );
}
