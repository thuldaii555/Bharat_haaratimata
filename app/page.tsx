import Link from "next/link";
import { SectionHeader } from "./components/SectionHeader";
import { WoolScrollGuide } from "./components/WoolScrollGuide";

const trustItems = [
  ["1999", "Nepalese felt craft"],
  ["300+", "Women artisans"],
  ["100%", "Handmade wool felt"],
  ["Global", "Wholesale export focus"],
];

const collections = [
  {
    title: "Rugs & Carpets",
    copy: "Dense felt surfaces, quiet palettes, and custom formats for hotels, homes, and design studios.",
  },
  {
    title: "Home Decor",
    copy: "Baskets, garlands, tabletop accents, and soft sculptural pieces shaped for considered interiors.",
  },
  {
    title: "Toys & Accessories",
    copy: "Tactile wool objects designed for boutiques, museum shops, and refined retail assortments.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <WoolScrollGuide />
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-felt/30 blur-3xl" />
        <div className="absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[0.92fr_1.08fr] md:px-10 lg:px-12">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-5">Nepalese Felt Handicrafts Since 1999</p>
            <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
              Premium felt craft for global interiors.
            </h1>
            <p className="mt-8 text-lg leading-8 text-olive">
              Handmade wool felt collections from Nepal for wholesale buyers,
              interior designers, boutiques, and conscious export partners.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="button-dark" href="/showroom">
                View Showroom
              </Link>
              <Link className="button-light" href="/wholesale">
                Wholesale Inquiry
              </Link>
            </div>
          </div>
          <div className="editorial-frame relative z-10 p-4">
            <div className="image-well flex min-h-[520px] items-end p-8">
              <div className="relative z-10 max-w-sm rounded-3xl border border-ivory/50 bg-ivory/72 p-6 shadow-[0_24px_50px_rgba(58,42,32,0.16)] backdrop-blur">
                <p className="eyebrow text-gold">Showroom Study</p>
                <p className="mt-3 text-sm leading-6 text-walnut/76">
                  Warm wool textures, export-ready collections, and artisan
                  detail presented with a refined global point of view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-band border-y border-walnut/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-7 md:grid-cols-4 md:px-10 lg:px-12">
          {trustItems.map(([number, label]) => (
            <div
              className="rounded-2xl border border-walnut/10 bg-ivory/58 px-4 py-5 text-center shadow-sm"
              key={label}
            >
              <p className="font-serif text-3xl text-walnut">{number}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-olive">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Collections"
          title="Quiet forms, tactile luxury, export-ready craft."
          copy="A focused product language for premium spaces and retail assortments, with room for custom color, scale, and seasonal development."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <article className="panel group p-4" key={collection.title}>
              <div className="image-well mb-8 flex h-72 items-end p-5">
                <p className="relative z-10 rounded-full bg-ivory/75 px-4 py-2 text-xs uppercase tracking-[0.18em] text-walnut">
                  {collection.title}
                </p>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-serif text-3xl text-walnut">{collection.title}</h3>
                <p className="mt-4 leading-7 text-olive">{collection.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-band border-y border-walnut/10">
        <div className="section grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="editorial-frame p-4">
            <div className="image-well min-h-[430px]" />
          </div>
          <div>
            <p className="eyebrow mb-4">Human Story</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Felt shaped by skilled hands, patient time, and community.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-olive">
              <p>
                Haaratimata works with rural women artisans whose felt-making
                skill brings income, dignity, and continuity to local craft
                communities.
              </p>
              <p>
                The result is not anonymous decoration. It is wool, water,
                touch, and careful finishing made for international buyers who
                value origin as much as polish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2rem] bg-walnut px-6 py-14 text-ivory shadow-[0_30px_90px_rgba(58,42,32,0.2)] md:px-12">
          <div className="mb-10 h-px bg-gradient-to-r from-gold via-ivory/20 to-transparent" />
          <p className="eyebrow mb-5 text-gold">Wholesale & Export</p>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Build a considered felt collection with a Nepal-based export
              partner.
            </h2>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full border border-gold/70 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-gold hover:text-walnut"
              href="/contact"
            >
              Request Wholesale Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
