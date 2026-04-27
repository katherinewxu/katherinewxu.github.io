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

type Book = {
  title: string;
  author: string;
  cover?: string;
};

const books: Book[] = [
  { title: "Wuthering Heights", author: "By Emily Brontë" },
  { title: "Pachinko", author: "By Min Jin Lee" },
  { title: "The Kite Runner", author: "By Khaled Hosseini" },
  { title: "Never Let Me Go", author: "By Kazuo Ishiguro" },
  { title: "Kim Ji-young, Born 1982", author: "By Cho Nam-ju" },
  { title: "When Breath Becomes Air", author: "By Paul Kalanithi" },
  { title: "Crying in H Mart", author: "By Michelle Zauner" },
];

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <div className="mb-5 flex h-[260px] w-[180px] items-center justify-center border border-border bg-muted/40 px-3">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-sm italic text-muted-foreground">
            {book.title}
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold leading-snug">{book.title}</h3>
      <p className="mt-1 text-sm italic text-foreground/80">{book.author}</p>
    </div>
  );
}

function Bookshelf() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />

      <header className="mx-auto mt-4 max-w-5xl text-center">
        <h1 className="text-4xl font-normal tracking-tight">
          <span className="italic text-[oklch(0.75_0.15_75)]">Katherine's</span>{" "}
          Bookshelf
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          A running list of books I've loved. Inspired by{" "}
          <a
            href="https://brianhie.com/bookshelf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Brian Hie's bookshelf
          </a>
          .
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 md:grid-cols-3 lg:grid-cols-4">
          {books.map((b, i) => (
            <div
              key={i}
              className="border-border sm:border-b sm:[&:nth-child(n+3)]:border-t-0 md:[&:nth-child(n+4)]:border-t-0 lg:[&:nth-child(n+5)]:border-t-0 [&:not(:last-child)]:sm:border-r-0 sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(4n)]:border-r-0"
            >
              <BookCard book={b} />
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Link
          to="/personal"
          className="text-sm text-[oklch(0.5_0.18_260)] hover:underline"
        >
          ← Back to personal
        </Link>
      </div>

      <footer className="mx-auto mt-16 max-w-2xl border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2025 Katherine Wang Xu ·{" "}
        <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
