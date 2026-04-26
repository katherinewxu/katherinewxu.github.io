import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/bookshelf")({
  component: Bookshelf,
  head: () => ({
    meta: [
      { title: "Bookshelf — Katherine Xu" },
      {
        name: "description",
        content:
          "A running list of books Katherine Xu has loved — fiction, memoir, and more.",
      },
      { property: "og:title", content: "Bookshelf — Katherine Xu" },
      {
        property: "og:description",
        content:
          "A running list of books Katherine Xu has loved — fiction, memoir, and more.",
      },
    ],
  }),
});

type Book = { title: string; author: string };

const fiction: Book[] = [
  { title: "Wuthering Heights", author: "Emily Brontë" },
  { title: "Pachinko", author: "Min Jin Lee" },
  { title: "The Kite Runner", author: "Khaled Hosseini" },
  { title: "Never Let Me Go", author: "Kazuo Ishiguro" },
  { title: "Kim Ji-young, Born 1982", author: "Cho Nam-ju" },
];

const memoirAndNonfiction: Book[] = [
  { title: "When Breath Becomes Air", author: "Paul Kalanithi" },
  { title: "Crying in H Mart", author: "Michelle Zauner" },
];

function Shelf({ title, books }: { title: string; books: Book[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-3 space-y-1">
        {books.map((b, i) => (
          <li key={i}>
            <em>{b.title}</em> — {b.author}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Bookshelf() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Bookshelf</h1>
        <p>
          A running list of books I've loved. Inspired by{" "}
          <a
            href="https://brianhie.com/bookshelf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brian Hie's bookshelf
          </a>
          .
        </p>

        <Shelf title="Fiction" books={fiction} />
        <Shelf title="Memoir &amp; Nonfiction" books={memoirAndNonfiction} />

        <p className="mt-10">
          <Link to="/personal">← Back to personal</Link>
        </p>

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
