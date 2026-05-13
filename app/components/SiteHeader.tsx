import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Showroom", "/showroom"],
  ["Wholesale", "/wholesale"],
  ["Sustainability", "/sustainability"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-walnut/10 bg-ivory/82 shadow-[0_18px_40px_rgba(58,42,32,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-12">
        <Link href="/" className="shrink-0">
          <span className="block font-serif text-2xl leading-none text-walnut">
            Haaratimata
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.26em] text-gold">
            Nepal Felt Showroom
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.15em] text-olive lg:flex">
          {navItems.map(([label, href]) => (
            <Link className="transition-colors hover:text-walnut" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            aria-label="Showroom"
            className="grid h-10 w-10 place-items-center rounded-full border border-walnut/15 bg-background/70 text-walnut shadow-sm"
            href="/showroom"
          >
            <span className="h-4 w-4 border border-current border-t-0" />
          </Link>
          <Link className="text-xs uppercase tracking-[0.16em] text-walnut" href="/login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
