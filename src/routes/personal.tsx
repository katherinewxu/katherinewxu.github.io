import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/personal")({
  component: Personal,
  head: () => ({
    meta: [
      { title: "Personal — Katherine Xu" },
      {
        name: "description",
        content:
          "Personal interests, books, and creative pursuits of Katherine Xu.",
      },
      { property: "og:title", content: "Personal — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Personal interests, books, and creative pursuits of Katherine Xu.",
      },
    ],
  }),
});

function Personal() {
  return (
    <main className="min-h-screen pt-8 pb-16 md:pb-24">
      <SiteNav />
      <article className="prose-academic mx-auto w-full max-w-3xl px-6 text-foreground">
        <h1>Personal</h1>

        <p>
          More on my personal background: I was born in Utah but grew up in
          Ohio. I also studied abroad at the University of Oxford in Winter
          2026, where I immersed myself in British life and participated in a
          tutorial on Modern Literature and Literary Criticism. I enjoy
          learning guzheng, hiking, fiction, and trying new cuisines.
        </p>

        <h2 className="mt-6 text-xl font-semibold tracking-tight">
          The Outdoors
        </h2>
        <p>
          I grew up in Ohio and have always loved being outdoors — whether it's
          hiking, backpacking, or just enjoying quiet spaces. At Stanford, I'm
          a trip leader at the Outdoor Center, guiding backpacking and camping
          trips to help others explore nature.
        </p>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">
          Art &amp; Fashion
        </h2>
        <p>
          I love art and fashion design, and enjoy expressing creativity
          through visual ideas and tailored pieces. In the winter, I designed
          a garment showcased in the Stanford FashionX Show.
        </p>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">
          Miscellaneous Facts
        </h2>
        <p>
          During high school, I studied abroad in Songdo, South Korea for
          seven weeks through a government-sponsored{" "}
          <a
            href="https://www.nsliforyouth.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Critical Language Scholarship (NSLI-Y)
          </a>
          . I deepened my Korean, formed close friendships, and learned how
          quickly unfamiliar places can feel like home.
        </p>
        <p>
          The favicon for this site is a photo I took of Half Dome in Yosemite
          — one of my favorite places to escape to and a small reminder of
          how grounding the outdoors can be.
        </p>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">Classes</h2>
        <p>
          For a list of classes I've taken at Stanford, see my{" "}
          <Link to="/classes">classes page</Link>.
        </p>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">Books</h2>
        <p>
          I love reading. For a list of some of my favorites, see my{" "}
          <Link to="/bookshelf">bookshelf</Link>.
        </p>

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Katherine Wang Xu ·{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
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
