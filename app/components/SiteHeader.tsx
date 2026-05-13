import Link from "next/link";
import Image from "next/image";

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
    <header className="sticky top-0 z-40 border-b border-walnut/10 bg-ivory/76 shadow-[0_18px_44px_rgba(58,42,32,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="relative h-14 w-14 overflow-hidden rounded-2xl border border-gold/30 bg-ivory shadow-sm">
            <Image
              src="/Brand/Haaratimata-Logo.png"
              alt="Haaratimata Handicrafts logo"
              fill
              sizes="56px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span>
            <span className="block font-serif text-2xl leading-none text-walnut">
              Haaratimata Handicrafts
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-gold">
              Nepal Felt Wool Exporter
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 rounded-2xl border border-walnut/10 bg-background/42 px-5 py-3 text-[0.76rem] uppercase tracking-[0.12em] text-olive shadow-sm lg:flex">
          {navItems.map(([label, href]) => (
            <Link className="transition-colors hover:text-walnut" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            aria-label="Showroom"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-walnut/15 bg-background/70 text-walnut shadow-sm"
            href="/showroom"
          >
            <span className="relative h-4 w-4 border border-current border-t-0 before:absolute before:-top-1 before:left-1 before:h-2 before:w-2 before:rounded-full before:border before:border-current before:border-b-0" />
          </Link>
          <Link className="rounded-2xl border border-walnut/10 bg-background/55 px-4 py-3 text-xs uppercase tracking-[0.14em] text-walnut shadow-sm" href="/login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
