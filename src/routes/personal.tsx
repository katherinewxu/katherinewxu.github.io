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
    <main className="min-h-screen px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
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
          I studied abroad in Songdo, South Korea for seven weeks through a
          government-sponsored Critical Language Scholarship. I deepened my
          Korean, formed close friendships, and learned how quickly unfamiliar
          places can feel like home.
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
          </a>
        </footer>
      </article>
    </main>
  );
}
