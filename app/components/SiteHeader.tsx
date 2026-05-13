"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-walnut/12 bg-[linear-gradient(180deg,rgba(255,252,245,0.96),rgba(247,243,234,0.88))] shadow-[0_22px_60px_rgba(58,42,32,0.1)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-10">
        <Link href="/" className="group flex shrink-0 items-center">
          <span className="relative h-[4.15rem] w-[12.9rem] overflow-hidden rounded-[1rem] border border-walnut/14 bg-ivory shadow-[0_16px_42px_rgba(58,42,32,0.12),inset_0_1px_0_rgba(255,252,245,0.95)] ring-1 ring-gold/10 transition-colors group-hover:border-gold/50 sm:h-[4.65rem] sm:w-[14.5rem] xl:h-[5.15rem] xl:w-[16rem]">
            <Image
              src="/Brand/Haaratimata-Logo.png"
              alt="Haaratimata Handicrafts logo"
              fill
              sizes="(max-width: 640px) 206px, (max-width: 1280px) 232px, 256px"
              className="object-contain p-1.5"
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center rounded-[1.25rem] border border-walnut/12 bg-[linear-gradient(135deg,rgba(255,252,245,0.88),rgba(247,243,234,0.64)_52%,rgba(200,184,157,0.18))] p-1.5 text-[0.66rem] uppercase tracking-[0.15em] text-olive shadow-[0_16px_42px_rgba(58,42,32,0.08),inset_0_1px_0_rgba(255,252,245,0.9)] lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              aria-current={isActive(href) ? "page" : undefined}
              className={`nav-link ${isActive(href) ? "nav-link-active" : ""}`}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <Link
            aria-label="Cart"
            className={`header-action grid h-12 w-12 place-items-center ${isActive("/showroom") ? "header-action-active" : ""}`}
            href="/showroom"
          >
            <span className="relative h-[1.125rem] w-[1.125rem] rounded-b-[0.2rem] border border-current border-t-0 before:absolute before:-top-1.5 before:left-1/2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border before:border-current before:border-b-0 after:absolute after:-bottom-1 after:left-1 after:h-1 after:w-1 after:rounded-full after:bg-current" />
          </Link>
          <Link
            className={`header-action inline-flex h-12 items-center px-4 text-[0.68rem] uppercase tracking-[0.16em] ${isActive("/login") ? "header-action-active" : ""}`}
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
