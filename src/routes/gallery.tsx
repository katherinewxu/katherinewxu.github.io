import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Katherine Xu" },
      {
        name: "description",
        content: "A running collection of art that Katherine Xu loves.",
      },
      { property: "og:title", content: "Gallery — Katherine Xu" },
      {
        property: "og:description",
        content: "A running collection of art that Katherine Xu loves.",
      },
    ],
  }),
});

type Artwork = {
  artist: string;
  title: string;
  year: string;
  image: string;
};

const artworks: Artwork[] = [
  { artist: "Edward Hopper", title: "Morning Sun", year: "1952", image: "/art/morningsun.jpg" },
  { artist: "George Luks", title: "Boxing Match", year: "1910", image: "/art/boxingmatch.jpg" },
  { artist: "Mary Cassatt", title: "In the Loge", year: "1878", image: "/art/intheloge.jpg" },
  { artist: "Jean-Michel Basquiat", title: "Untitled", year: "1981", image: "/art/untitled.jpg" },
  {
    artist: "Vincent Van Gogh",
    title: "Portrait of a Peasant (Patience Escalier)",
    year: "1888",
    image: "/art/patienceescalier.jpg",
  },
  {
    artist: "Francisco de Zurbarán",
    title: "Christ & the Virgin in the House at Nazareth",
    year: "c. 1630",
    image: "/art/nazareth.jpg",
  },
  {
    artist: "Marc Chagall",
    title: "America Windows",
    year: "1977",
    image: "/art/americawindows.jpg",
  },
  { artist: "Mel Chin", title: "Spirit", year: "1994", image: "/art/spirit.jpg" },
  { artist: "Gustav Klimt", title: "The Kiss", year: "c. 1907–1909", image: "/art/thekiss.jpg" },
  { artist: "Diego Velázquez", title: "Las Meninas", year: "1656", image: "/art/lasmeninas.jpg" },
  { artist: "Chris Burden", title: "Urban Light", year: "2008", image: "/art/urbanlight.jpg" },
  {
    artist: "Georgia O'Keeffe",
    title: "The Lawrence Tree",
    year: "1929",
    image: "/art/lawrencetree.jpg",
  },
  {
    artist: "Artemisia Gentileschi",
    title: "Judith & Her Maidservant with the Head of Holofernes",
    year: "c. 1623–1625",
    image: "/art/judith.jpg",
  },
  {
    artist: "Johannes Vermeer",
    title: "The Milkmaid",
    year: "c. 1657–1658",
    image: "/art/themilkmaid.jpg",
  },
  {
    artist: "Kehinde Wiley",
    title: "Portrait of Andries Stilte II",
    year: "2006",
    image: "/art/andriesstilteii.jpg",
  },
  {
    artist: "Berthe Morisot",
    title: "The Harbor at Lorient",
    year: "1869",
    image: "/art/theharboratlorient.jpg",
  },
  {
    artist: "John Singer Sargent",
    title: "The Daughters of Edward Darley Boit",
    year: "1882",
    image: "/art/thedaughters.jpg",
  },
  {
    artist: "Gian Lorenzo Bernini",
    title: "Ecstasy of Saint Teresa",
    year: "1647–1652",
    image: "/art/ecstasyofstteresa.jpg",
  },
  {
    artist: "Rembrandt",
    title: "Saint Bartholomew",
    year: "1661",
    image: "/art/stbartholomew.jpg",
  },
  {
    artist: "Claude Monet",
    title: "The Portal of Rouen Cathedral in Morning Light",
    year: "1894",
    image: "/art/rouencathedral.jpg",
  },
  { artist: "Ruth Asawa", title: "Faces", year: "c. 1960–2000", image: "/art/faces.jpg" },
  {
    artist: "Dominique Fung",
    title: "Sans Les Mains",
    year: "2022",
    image: "/art/sanslesmains.jpg",
  },
  {
    artist: "Ai Weiwei",
    title: "Treasure Box (宝盒)",
    year: "2014",
    image: "/art/treasurebox.jpg",
  },
  { artist: "Edward Hopper", title: "Gas", year: "1940", image: "/art/gas.jpg" },
];

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <figure className="group mb-11 break-inside-avoid-column">
      <div className="overflow-hidden bg-[oklch(0.93_0.015_85)] shadow-[0_12px_32px_-24px_oklch(0.25_0.04_150_/_0.55)]">
        <img
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}`}
          loading="lazy"
          className="block h-auto w-full transition duration-500 group-hover:scale-[1.012]"
        />
      </div>
      <figcaption className="mt-3.5">
        <p className="font-ui text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[oklch(0.4_0.08_150)]">
          {artwork.artist}
        </p>
        <p className="mt-1 text-[1.02rem] leading-snug text-foreground">
          <em>{artwork.title}</em>, {artwork.year}
        </p>
      </figcaption>
    </figure>
  );
}

function Gallery() {
  return (
    <main className="min-h-screen pb-20 md:pb-28">
      <SiteNav />

      <header className="mx-auto max-w-6xl px-6 pb-12 pt-14 sm:pb-16 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.45_0.09_150)]">
          A personal collection
        </p>
        <div className="mt-4 grid gap-7 border-b border-border pb-10 md:grid-cols-[1fr_1.25fr] md:items-end">
          <h1 className="font-serif text-5xl font-normal tracking-tight text-foreground sm:text-6xl">
            Gallery
          </h1>
          <div className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            <p>A running list of art that I love.</p>
            <p className="mt-3">
              Some of my favorite museums are the National Gallery in London and The Metropolitan
              Museum of Art in New York.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6" aria-label="Favorite artworks">
        <div className="columns-1 gap-7 sm:columns-2 lg:columns-3 lg:gap-9">
          {artworks.map((artwork) => (
            <ArtworkCard key={`${artwork.artist}-${artwork.title}`} artwork={artwork} />
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-14 max-w-6xl border-t border-border px-6 pt-6 text-sm text-muted-foreground">
        © 2026 Katherine Wang Xu · <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a> ·{" "}
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
    </main>
  );
}
