import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

import wutheringHeights from "@/assets/books/wuthering-heights.jpg";
import pachinko from "@/assets/books/pachinko.jpg";
import kiteRunner from "@/assets/books/kite-runner.jpg";
import neverLetMeGo from "@/assets/books/never-let-me-go.jpg";
import kimJiyoung from "@/assets/books/kim-jiyoung.jpg";
import whenBreath from "@/assets/books/when-breath-becomes-air.jpg";
import cryingHMart from "@/assets/books/crying-in-h-mart.jpg";
import beloved from "@/assets/books/beloved.jpg";
import paleFire from "@/assets/books/pale-fire.jpg";
import bellJar from "@/assets/books/bell-jar.jpg";
import frankenstein from "@/assets/books/frankenstein.jpg";
import lifeOfPi from "@/assets/books/life-of-pi.jpg";
import catcherInTheRye from "@/assets/books/catcher-in-the-rye.jpg";
import fridayBlack from "@/assets/books/friday-black.jpg";

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
  cover: string;
};

const books: Book[] = [
  { title: "Wuthering Heights", author: "By Emily Brontë", cover: wutheringHeights },
  { title: "Pachinko", author: "By Min Jin Lee", cover: pachinko },
  { title: "The Kite Runner", author: "By Khaled Hosseini", cover: kiteRunner },
  { title: "Never Let Me Go", author: "By Kazuo Ishiguro", cover: neverLetMeGo },
  { title: "Kim Ji-young, Born 1982", author: "By Cho Nam-ju", cover: kimJiyoung },
  { title: "When Breath Becomes Air", author: "By Paul Kalanithi", cover: whenBreath },
  { title: "Crying in H Mart", author: "By Michelle Zauner", cover: cryingHMart },
  { title: "Beloved", author: "By Toni Morrison", cover: beloved },
  { title: "Pale Fire", author: "By Vladimir Nabokov", cover: paleFire },
  { title: "The Bell Jar", author: "By Sylvia Plath", cover: bellJar },
  { title: "Frankenstein", author: "By Mary Shelley", cover: frankenstein },
  { title: "Life of Pi", author: "By Yann Martel", cover: lifeOfPi },
  { title: "The Catcher in the Rye", author: "By J. D. Salinger", cover: catcherInTheRye },
  { title: "Friday Black", author: "By Nana Kwame Adjei-Brenyah", cover: fridayBlack },
];

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <div className="mb-5 flex h-[260px] w-[180px] items-center justify-center overflow-hidden bg-muted/30 shadow-[0_2px_10px_-4px_oklch(0.36_0.08_150_/_0.35)]">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-semibold leading-snug text-[oklch(0.36_0.08_150)]">
        {book.title}
      </h3>
      <p className="mt-1 text-sm italic text-foreground/75">{book.author}</p>
    </div>
  );
}

function Bookshelf() {
  return (
    <main className="font-bookshelf min-h-screen px-6 py-16 md:py-24">
      <SiteNav />

      <header className="mx-auto mt-4 max-w-5xl text-center">
        <h1 className="text-4xl font-normal tracking-tight">
          <span className="italic text-[oklch(0.45_0.09_150)]">Katherine's</span>{" "}
          Bookshelf
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          A running list of books I've loved.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((b, i) => (
            <BookCard key={i} book={b} />
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Link
          to="/personal"
          className="text-sm text-[oklch(0.45_0.09_150)] hover:underline"
        >
          ← Back to personal
        </Link>
      </div>

      <footer className="mx-auto mt-16 max-w-2xl border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 Katherine Wang Xu ·{" "}
        <a
          href="mailto:kwx04@stanford.edu"
          className="hover:text-[oklch(0.36_0.08_150)]"
        >
          kwx04@stanford.edu
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[oklch(0.36_0.08_150)]"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[oklch(0.36_0.08_150)]"
        >
          Google Scholar
        </a>
      </footer>
    </main>
  );
}
