import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SpeckleText } from "@/components/SpeckleText";

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
    <main className="min-h-screen pt-8 pb-16 md:pb-24">
      <SiteNav />
      <div className="mx-auto w-full max-w-5xl px-6 mb-10 md:mb-16">
        <SpeckleText text="katherine" />
      </div>
      <article className="prose-academic mx-auto w-full max-w-3xl px-6 text-foreground">
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
          Science (AI), advised by{" "}
          <a
            href="https://www.linkedin.com/in/jerrycainjr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jerry Cain
          </a>{" "}
          and Professor{" "}
          <a
            href="https://stanford.edu/~eadeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ehsan Adeli
          </a>
          .
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
          I'm also devoted to the humanities. From studying literature and
          literary criticism at Oxford to thinking through the ethics of AI, I
          believe the questions worth asking about technology are ultimately
          questions about people, language, and meaning.
        </p>

        <p>
          In my free time, I enjoy exploring the outdoors, sampling the local food
          scene, curating increasingly niche Spotify playlists, and reading. Some
          of my favorite books can be found <Link to="/bookshelf">here</Link>.
        </p>

        <p>
          Feel free to reach me at{" "}
          <a href="mailto:kwx04@stanford.edu">kwx04@stanford.edu</a>.
        </p>
      </article>
    </main>
  );
}
