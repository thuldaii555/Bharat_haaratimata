"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Showroom", href: "/showroom" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c7a3]/60 bg-[#fff8ea]/90 shadow-[0_12px_40px_rgba(58,42,32,0.08)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[360px_1fr_auto_auto] items-center gap-4 px-5 py-3">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Haaratimata Handicrafts Home"
          className="flex h-[74px] w-[330px] items-center justify-center overflow-hidden rounded-[18px] bg-[#fff8ea] px-0 py-0"
        >
         <Image
  src="/brand/Haaratimata-Logo.png"
  alt="Haaratimata Handicrafts"
  width={900}
  height={260}
  priority
  className="h-full w-full scale-[1.55] object-contain object-center [clip-path:inset(0_8%_0_8%)]"
/>
        </Link>

        {/* Navigation */}
        <nav className="flex min-h-[58px] items-center justify-center rounded-full border border-[#c9a968]/70 bg-[#3a2a20] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_28px_rgba(58,42,32,0.14)]">
          <div className="flex w-full items-center justify-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium tracking-[0.03em] transition-all duration-200",
                    active
                      ? "bg-[#b8914b] text-[#fff8ea] shadow-[0_6px_18px_rgba(184,145,75,0.35)]"
                      : "text-[#f7ead0] hover:bg-[#fff8ea]/10 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Cart */}
        <Link
          href="/showroom"
          aria-label="Cart placeholder"
          className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#c9a968]/70 bg-[#fffaf0] text-[#3a2a20] shadow-[0_10px_24px_rgba(58,42,32,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f2e4c8]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6.5 7.5h14l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L6 4.8H3.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.8 20.2h.1M17.2 20.2h.1"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        {/* Login */}
        <Link
          href="/login"
          className="flex h-[58px] items-center justify-center rounded-full border border-[#c9a968]/70 bg-[#fffaf0] px-7 text-sm font-semibold tracking-[0.04em] text-[#3a2a20] shadow-[0_10px_24px_rgba(58,42,32,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f2e4c8]"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
