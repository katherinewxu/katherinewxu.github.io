import { Link } from "@tanstack/react-router";

const links: { to: "/" | "/experience" | "/portfolio" | "/personal"; label: string; exact?: boolean }[] = [
  { to: "/", label: "About", exact: true },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/personal", label: "Personal" },
];

export function SiteNav() {
  return (
    <nav className="mb-10 w-full border-b border-border pb-3 text-base">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-6">
        <Link
          to="/"
          className="text-[1.75rem] font-semibold tracking-tight text-[oklch(0.36_0.08_150)] hover:text-[oklch(0.36_0.08_150)]"
        >
          Katherine Wang Xu
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                className="text-foreground hover:text-[oklch(0.36_0.08_150)] hover:underline"
                activeProps={{ className: "font-semibold underline text-[oklch(0.36_0.08_150)]" }}
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
