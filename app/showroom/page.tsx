import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../components/SectionHeader";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Showroom | Haaratimata Handicrafts",
  description:
    "Explore handmade felt and wool collections developed for interiors, boutiques, trade buyers, and custom wholesale programs.",
};

export default function ShowroomPage() {
  return (
    <>
      <section className="section pb-8">
        <SectionHeader
          eyebrow="Showroom"
          title="Showroom"
          copy="Explore handmade felt and wool collections developed for interiors, boutiques, trade buyers, and custom wholesale programs."
        />
      </section>

      <section className="section pt-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-gold">Category Browsing</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Shop by collection category.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-olive">
            Choose a product family to browse rugs, decor, toys, accessories,
            pet concepts, and custom development programs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.35rem] border border-walnut/10 bg-ivory/76 shadow-[0_24px_70px_rgba(58,42,32,0.1)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_34px_90px_rgba(58,42,32,0.14)]"
              href={`/showroom/category/${category.slug}`}
              key={category.id}
            >
              <div className="relative h-[19rem] overflow-hidden bg-[radial-gradient(circle_at_22%_18%,rgba(255,252,245,0.72),transparent_9rem),radial-gradient(circle_at_78%_22%,rgba(184,145,75,0.24),transparent_11rem),linear-gradient(135deg,#e8dfd1,#d9d5cc_42%,#c8b89d_74%,#a98263)] md:h-[21rem]">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={`${category.name} collection image`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="premium-image-hover object-cover object-center saturate-[0.95] contrast-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <span className="max-w-48 rounded-full border border-ivory/50 bg-ivory/72 px-5 py-3 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
                      Category image coming soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,42,32,0.02),rgba(58,42,32,0.34)),linear-gradient(90deg,rgba(255,252,245,0.12),transparent_48%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-ivory/35 bg-walnut/52 px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-ivory backdrop-blur">
                  {category.productCountLabel}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-3xl leading-tight text-walnut">
                  {category.name}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-olive">
                  {category.shortDescription}
                </p>
                <span className="catalog-cta mt-7">Explore Category</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section pt-6">
        <div className="showroom-panel grid gap-6 p-8 md:grid-cols-[0.78fr_1.22fr] md:items-center md:p-10">
          <div>
            <p className="eyebrow mb-4 text-gold">Catalog Note</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Product data is ready for catalog growth.
            </h2>
          </div>
          <p className="text-lg leading-8 text-olive">
            Individual product pages include material, size, weight,
            availability, retail pricing, trade pricing, MOQ, and quote options.
            Product data is structured for future admin editing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#3a2a20,#4b3526)] px-6 py-14 text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)] md:px-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-5 text-gold">Trade Support</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Looking for custom development or trade pricing?
            </h2>
            <p className="text-lg leading-8 text-ivory/72">
              Share your buyer brief, target assortment, palette direction, or
              volume plan and begin a focused wholesale conversation.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 bg-gold px-6 text-sm uppercase tracking-[0.16em] text-walnut transition-colors hover:bg-ivory"
              href="/wholesale"
            >
              Start a Trade Inquiry
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-ivory/35 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:text-gold"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
