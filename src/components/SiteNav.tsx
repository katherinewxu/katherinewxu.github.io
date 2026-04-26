import { Link } from "@tanstack/react-router";

const links: { to: "/" | "/experience" | "/portfolio" | "/personal"; label: string; exact?: boolean }[] = [
  { to: "/", label: "About", exact: true },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/personal", label: "Personal" },
];

export function SiteNav() {
  return (
    <nav className="mx-auto mb-10 max-w-2xl border-b border-border pb-3 text-base">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              activeOptions={{ exact: l.exact }}
              className="text-foreground hover:underline"
              activeProps={{ className: "font-semibold underline" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
