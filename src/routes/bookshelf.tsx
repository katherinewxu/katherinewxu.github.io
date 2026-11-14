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
import hamnet from "@/assets/books/hamnet.jpg";
import theStranger from "@/assets/books/the-stranger.jpg";
import whyFish from "@/assets/books/why-fish-dont-exist.jpg";
import educated from "@/assets/books/educated.jpg";
import masterPetersburg from "@/assets/books/master-of-petersburg.jpg";
import stLucys from "@/assets/books/st-lucys.jpg";
import kafkaShore from "@/assets/books/kafka-on-the-shore.jpg";
import janeEyre from "@/assets/books/jane-eyre.jpg";
import aMercy from "@/assets/books/a-mercy.jpg";

export const Route = createFileRoute("/bookshelf")({
  component: Bookshelf,
  head: () => ({
    meta: [
      { title: "Bookshelf | Katherine Xu" },
      {
        name: "description",
        content:
          "A running list of books Katherine Xu has loved, including fiction, memoir, and more.",
      },
      { property: "og:title", content: "Bookshelf | Katherine Xu" },
      {
        property: "og:description",
        content:
          "A running list of books Katherine Xu has loved, including fiction, memoir, and more.",
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
  { title: "Hamnet", author: "By Maggie O'Farrell", cover: hamnet },
  { title: "The Stranger", author: "By Albert Camus", cover: theStranger },
  { title: "Why Fish Don't Exist", author: "By Lulu Miller", cover: whyFish },
  { title: "Educated", author: "By Tara Westover", cover: educated },
  { title: "The Master of Petersburg", author: "By J. M. Coetzee", cover: masterPetersburg },
  {
    title: "St. Lucy's Home for Girls Raised by Wolves",
    author: "By Karen Russell",
    cover: stLucys,
  },
  { title: "Kafka on the Shore", author: "By Haruki Murakami", cover: kafkaShore },
  { title: "Jane Eyre", author: "By Charlotte Brontë", cover: janeEyre },
  { title: "A Mercy", author: "By Toni Morrison", cover: aMercy },
];

function BookCard({ book }: { book: Book }) {
  return (
    <article className="min-w-0">
      <div className="aspect-[2/3] w-full overflow-hidden bg-foreground/5">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-bookshelf mt-3 text-[1.05rem] font-bold leading-tight text-foreground">
        {book.title}
      </h3>
      <p className="font-ui mt-1 text-[0.78rem] leading-snug text-foreground/60">
        {book.author.replace(/^By /, "")}
      </p>
    </article>
  );
}

function Bookshelf() {
  return (
    <main className="min-h-screen pb-16 md:pb-24">
      <SiteNav />

      <header className="mx-auto w-full max-w-6xl px-6 pt-14 sm:pt-16">
        <h1 className="font-bookshelf text-4xl font-normal tracking-[-0.025em] sm:text-5xl">
          Bookshelf
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70">
          A running list of books I've loved.
        </p>
      </header>

      <section className="mx-auto mt-12 w-full max-w-6xl px-6">
        <h2 className="font-bookshelf text-2xl font-normal text-foreground">Currently reading</h2>
        <div className="mt-4 grid border-y border-foreground/25 sm:grid-cols-2">
          <div className="py-5 sm:pr-8">
            <h3 className="font-bookshelf text-xl font-bold leading-snug text-foreground">
              Wild Swans
            </h3>
            <p className="mt-1 text-sm text-foreground/60">Jung Chang</p>
          </div>
          <div className="border-t border-foreground/20 py-5 sm:border-l sm:border-t-0 sm:pl-8">
            <h3 className="font-bookshelf text-xl font-bold leading-snug text-foreground">
              The Restaurant at the End of the Universe
            </h3>
            <p className="mt-1 text-sm text-foreground/60">Douglas Adams</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-6xl px-6">
        <div className="mb-7 flex items-end justify-between border-b border-foreground/25 pb-3">
          <h2 className="font-bookshelf text-2xl font-normal text-foreground">Favorites</h2>
          <p className="text-sm text-foreground/50">{books.length} books</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-8">
          {books.map((b, i) => (
            <BookCard key={i} book={b} />
          ))}
        </div>
        <p className="mt-12 text-xs leading-relaxed text-foreground/50">
          Book covers are from Ben Dodson's{" "}
          <a
            href="https://bendodson.com/projects/itunes-artwork-finder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--link)] underline underline-offset-4 hover:text-[var(--link-hover)]"
          >
            artwork finder
          </a>
          .
        </p>
      </section>

      <div className="mx-auto mt-16 w-full max-w-6xl px-6">
        <Link
          to="/personal"
          className="text-sm text-[var(--link)] underline-offset-4 hover:text-[var(--link-hover)] hover:underline"
        >
          ← Back to personal
        </Link>
      </div>

      <footer className="mx-auto mt-16 w-full max-w-6xl border-t border-border px-6 pt-6 text-sm text-muted-foreground">
        © 2026 Katherine Wang Xu ·{" "}
        <a
          href="mailto:kwx04@stanford.edu"
          className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline"
        >
          kwx04@stanford.edu
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://scholar.google.com/citations?hl=en&user=Sli3mxEAAAAJ&view_op=list_works"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline"
        >
          Google Scholar
        </a>
      </footer>
    </main>
  );
}
