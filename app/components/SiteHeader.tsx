"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Showroom", href: "/showroom" },
  { label: "Trade", href: "/wholesale" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Lookbook", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c7a3]/60 bg-[#fff8ea]/88 shadow-[0_16px_48px_rgba(58,42,32,0.1)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1560px] flex-wrap items-center gap-3 px-4 py-3 lg:grid lg:grid-cols-[360px_minmax(0,1fr)_auto_auto] lg:gap-4 lg:px-5">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Haaratimata Handicrafts Home"
          className="order-1 flex h-[58px] w-[clamp(160px,44vw,330px)] shrink-0 items-center justify-center overflow-hidden rounded-[18px] bg-[#fff8ea] px-0 py-0 sm:h-[68px] sm:w-[280px] lg:h-[74px] lg:w-[330px]"
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
        <nav className="order-4 flex min-h-[62px] basis-full items-center rounded-full border border-[#b8914b]/45 bg-[linear-gradient(135deg,rgba(74,53,38,0.82),rgba(58,42,32,0.76)_48%,rgba(94,70,48,0.7))] px-2.5 shadow-[0_18px_45px_rgba(58,42,32,0.18),0_0_26px_rgba(184,145,75,0.12),inset_0_1px_0_rgba(255,248,234,0.16)] backdrop-blur-xl lg:order-none lg:basis-auto lg:col-span-1 lg:px-3">
          <div className="flex w-full flex-wrap items-center justify-between gap-1.5 sm:flex-nowrap">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex min-h-11 flex-1 basis-[calc(50%-0.375rem)] items-center justify-center rounded-full px-4 py-2 text-[15px] font-semibold tracking-[0.025em] transition-all duration-300 sm:basis-0",
                    active
                      ? "bg-[linear-gradient(135deg,rgba(255,248,234,0.95),rgba(184,145,75,0.86))] text-[#3a2a20] shadow-[0_8px_24px_rgba(184,145,75,0.3),inset_0_1px_0_rgba(255,255,255,0.46)]"
                      : "text-[#f8ead0] hover:bg-[#fff8ea]/13 hover:text-white hover:shadow-[0_0_18px_rgba(255,248,234,0.12)]",
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
          href="/cart"
          aria-label="Cart"
          className="order-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b8914b]/55 bg-[linear-gradient(145deg,rgba(255,250,240,0.94),rgba(242,228,200,0.74))] text-[#3a2a20] shadow-[0_12px_28px_rgba(58,42,32,0.13),inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:bg-[#fff8ea] hover:shadow-[0_16px_34px_rgba(58,42,32,0.16),0_0_18px_rgba(184,145,75,0.18)] sm:h-[58px] sm:w-[58px] lg:order-none"
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
          className="order-3 flex h-11 items-center justify-center rounded-full border border-[#b8914b]/55 bg-[linear-gradient(145deg,rgba(255,250,240,0.94),rgba(242,228,200,0.74))] px-4 text-sm font-semibold tracking-[0.035em] text-[#3a2a20] shadow-[0_12px_28px_rgba(58,42,32,0.13),inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:bg-[#fff8ea] hover:shadow-[0_16px_34px_rgba(58,42,32,0.16),0_0_18px_rgba(184,145,75,0.18)] sm:h-[58px] sm:px-7 sm:text-[15px] lg:order-none"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
