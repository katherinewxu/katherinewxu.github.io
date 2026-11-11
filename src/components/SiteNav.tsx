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
      className="w-full border-b border-foreground/20 bg-background"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-6">
        <Link
          to="/"
          className="whitespace-nowrap font-bookshelf text-[1.22rem] font-bold leading-none tracking-[-0.02em] text-foreground"
        >
          Katherine Wang Xu
        </Link>
        <ul className="font-ui flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.76rem] tracking-[0.01em] sm:gap-x-5">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                className="decoration-1 underline-offset-[0.32rem] text-foreground/65 transition-colors hover:text-foreground"
                activeProps={{
                  className: "text-foreground underline decoration-foreground/70",
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
