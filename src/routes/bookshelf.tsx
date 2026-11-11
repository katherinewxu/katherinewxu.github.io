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
    <article className="group flex h-full flex-col items-center px-3 py-6 text-center sm:px-4">
      <div className="mb-5 flex aspect-[2/3] w-full max-w-[176px] items-center justify-center overflow-hidden rounded-sm bg-muted/30 shadow-[0_10px_28px_-14px_oklch(0.28_0.06_150_/_0.65)] transition duration-300 group-hover:shadow-[0_18px_34px_-16px_oklch(0.28_0.06_150_/_0.72)]">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-medium leading-snug text-[oklch(0.36_0.08_150)] sm:min-h-[2.6rem]">
        {book.title}
      </h3>
      <p className="mt-1 text-sm italic text-foreground/75">{book.author}</p>
    </article>
  );
}

function Bookshelf() {
  return (
    <main className="font-bookshelf min-h-screen pb-16 md:pb-24">
      <SiteNav />

      <header className="mx-auto max-w-5xl px-6 pt-14 text-center sm:pt-20">
        <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">
          <span className="italic text-[oklch(0.45_0.09_150)]">Katherine's</span> Bookshelf
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          A running list of books I've loved.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-4xl px-6">
        <div className="relative overflow-hidden border-y border-[oklch(0.78_0.04_145)] bg-[oklch(0.965_0.018_90)] px-7 py-8 sm:px-10">
          <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[oklch(0.89_0.06_145_/_0.55)] blur-2xl" />
          <h2 className="relative text-lg font-medium text-[oklch(0.42_0.09_150)]">
            Currently reading
          </h2>
          <div className="relative mt-5 grid gap-5 sm:grid-cols-2 sm:gap-8">
            <div>
              <h2 className="text-2xl italic text-foreground">Wild Swans</h2>
              <p className="mt-1 text-sm text-muted-foreground">Jung Chang</p>
            </div>
            <div className="border-t border-[oklch(0.78_0.04_145)] pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <h2 className="text-2xl italic leading-snug text-foreground">
                The Restaurant at the End of the Universe
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Douglas Adams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="mb-5 flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-2xl text-foreground">Books that stayed with me</h2>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">{books.length} favorites</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-4">
          {books.map((b, i) => (
            <BookCard key={i} book={b} />
          ))}
        </div>
        <p className="mt-10 text-center text-xs italic leading-relaxed text-muted-foreground">
          Book covers are from Ben Dodson's{" "}
          <a
            href="https://bendodson.com/projects/itunes-artwork-finder/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[oklch(0.45_0.09_150)] underline decoration-[oklch(0.65_0.08_150)] underline-offset-4 hover:text-[oklch(0.36_0.08_150)]"
          >
            artwork finder
          </a>
          .
        </p>
      </section>

      <div className="mx-auto mt-16 max-w-2xl px-6 text-center">
        <Link to="/personal" className="text-sm text-[oklch(0.45_0.09_150)] hover:underline">
          ← Back to personal
        </Link>
      </div>

      <footer className="mx-auto mt-16 max-w-2xl border-t border-border px-6 pt-6 text-center text-sm text-muted-foreground">
        © 2026 Katherine Wang Xu ·{" "}
        <a href="mailto:kwx04@stanford.edu" className="hover:text-[oklch(0.36_0.08_150)]">
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
