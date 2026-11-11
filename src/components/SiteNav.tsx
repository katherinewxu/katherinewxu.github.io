import { Link } from "@tanstack/react-router";

const links: {
  to: "/" | "/experience" | "/portfolio" | "/personal" | "/gallery";
  label: string;
  exact?: boolean;
}[] = [
  { to: "/", label: "About", exact: true },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/personal", label: "Personal" },
  { to: "/gallery", label: "Gallery" },
];

export function SiteNav() {
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-6 sm:py-6">
        <Link
          to="/"
          className="whitespace-nowrap text-[1.5rem] font-medium leading-none tracking-[-0.025em] text-[oklch(0.36_0.08_150)] hover:text-[oklch(0.36_0.08_150)] sm:text-[1.65rem]"
        >
          Katherine Wang Xu
        </Link>
        <ul className="font-ui flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] tracking-[0.01em] sm:gap-x-5 sm:text-[0.82rem]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                className="decoration-1 underline-offset-[0.42rem] text-foreground/80 transition-colors hover:text-[oklch(0.36_0.08_150)] hover:underline"
                activeProps={{
                  className:
                    "font-medium underline text-[oklch(0.36_0.08_150)] decoration-[oklch(0.45_0.09_150)]",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
