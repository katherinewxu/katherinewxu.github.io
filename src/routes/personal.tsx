import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/personal")({
  component: Personal,
  head: () => ({
    meta: [
      { title: "Personal — Katherine Xu" },
      {
        name: "description",
        content:
          "Personal interests, books, music, and writing by Katherine Xu.",
      },
      { property: "og:title", content: "Personal — Katherine Xu" },
      {
        property: "og:description",
        content:
          "Personal interests, books, music, and writing by Katherine Xu.",
      },
    ],
  }),
});

function Personal() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24">
      <SiteNav />
      <article className="prose-academic mx-auto max-w-2xl text-foreground">
        <h1>Personal</h1>

        <p>
          Outside of research and coursework, I spend time exploring the
          outdoors, sampling the local food scene, curating increasingly niche
          Spotify playlists, and reading.
        </p>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">
          Currently
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Hiking around the Bay Area on weekends.</li>
          <li>Trying every ramen spot within walking distance of campus.</li>
          <li>
            Reading a long novel slowly — the kind that fits in a backpack
            pocket.
          </li>
          <li>Building small tools to make student life a little easier.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">
          A few favorites
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <em>Books:</em> short story collections, anything by Italo Calvino,
            and slow nonfiction about science.
          </li>
          <li>
            <em>Music:</em> ambient electronic, indie folk, and the occasional
            J-pop deep cut.
          </li>
          <li>
            <em>Places:</em> Lake Tahoe in late spring, Tokyo at night, and the
            Stanford Dish at sunrise.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">Say hi</h2>
        <p>
          The best way to reach me is by email at{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a>. I'm always
          happy to talk about AI, research, food recommendations, or playlist
          swaps.
        </p>
      </article>
    </main>
  );
}
