import Link from "next/link";
import { products } from "@/lib/products";
import { AssetImage } from "./components/AssetImage";
import { SectionHeader } from "./components/SectionHeader";
import { UnwindingWoolBall } from "./components/motion/UnwindingWoolBall";

const trustStats = [
  ["Est. 1999", "Nepalese felt craft company"],
  ["300+ Women Artisans", "Rural Nepal maker network"],
  ["100% New Zealand Wool", "Natural felt material"],
  ["Handmade in Nepal", "Human-scale production"],
];

const benefits = [
  "Custom design development",
  "Sampling discussion",
  "Bulk order support",
  "Export readiness",
  "Ethical artisan network",
  "Long-term buyer partnership",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute inset-0">
          <AssetImage
            src="/backgrounds/hero-wool-craft.jpg"
            alt=""
            priority
            className="h-full rounded-none opacity-28 blur-[2px]"
            imageClassName="scale-105"
            sizes="100vw"
          />
        </div>
        <div className="absolute left-[-10rem] top-12 h-[34rem] w-[34rem] rounded-full bg-felt/34 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-[28rem] w-[28rem] rounded-full bg-gold/16 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-clay/12 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[0.88fr_1.12fr] md:px-10 lg:px-12">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex rounded-2xl border border-gold/30 bg-ivory/64 px-4 py-3 text-xs uppercase tracking-[0.18em] text-walnut shadow-sm backdrop-blur">
              Handmade Nepal Felt Wool Since 1999
            </div>
            <h1 className="font-serif text-6xl leading-[0.9] text-walnut md:text-8xl">
              Deluxe handmade felt collections for global interiors.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-9 text-olive">
              Haaratimata Handicrafts is a Nepal-based felt wool products
              supplier, manufacturer, and exporter creating refined wholesale
              collections from 100% New Zealand wool.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="button-dark min-w-48" href="/showroom">
                View Showroom
              </Link>
              <Link className="button-light min-w-48" href="/contact">
                Request Wholesale Quote
              </Link>
            </div>
          </div>

          <div className="relative z-10 min-h-[660px]">
            <div className="editorial-frame absolute right-0 top-0 w-[88%] p-4">
              <div className="image-well hero-image-well flex min-h-[560px] items-end p-8">
                <AssetImage
                  src="/backgrounds/hero-wool-craft.jpg"
                  alt="Representative wool craft texture used as temporary showroom imagery"
                  className="absolute inset-0 rounded-[1.45rem]"
                  imageClassName="opacity-80"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute left-8 top-8 z-10 h-40 w-32 rounded-[1.35rem] border border-ivory/50 bg-[linear-gradient(145deg,rgba(255,252,245,0.72),rgba(217,213,204,0.42))] shadow-[0_22px_54px_rgba(58,42,32,0.14)]" />
                <div className="absolute right-10 top-14 z-10 h-48 w-40 rounded-[1.4rem] border border-ivory/40 bg-[radial-gradient(circle_at_35%_30%,rgba(255,252,245,0.7),transparent_6rem),linear-gradient(145deg,rgba(200,184,157,0.76),rgba(169,130,99,0.5))] shadow-[0_24px_58px_rgba(58,42,32,0.16)]" />
                <div className="absolute bottom-28 left-24 z-10 h-24 w-56 rounded-full border border-ivory/50 bg-[linear-gradient(90deg,rgba(217,213,204,0.62),rgba(255,252,245,0.72),rgba(200,184,157,0.58))] shadow-[0_18px_42px_rgba(58,42,32,0.12)]" />
                <div className="relative z-20 max-w-xs rounded-[1.5rem] border border-ivory/60 bg-ivory/78 p-6 shadow-[0_26px_60px_rgba(58,42,32,0.18)] backdrop-blur">
                  <p className="eyebrow text-gold">Temporary Showroom Visuals</p>
                  <p className="mt-3 text-sm leading-6 text-walnut/76">
                    Representative wool imagery and layered material studies
                    set the tone until official catalog photography is added.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-well felt-swatch-well absolute left-0 top-24 hidden h-56 w-52 rounded-[1.6rem] border border-ivory/60 p-4 shadow-[0_28px_70px_rgba(58,42,32,0.18)] md:block">
              <p className="relative z-10 rounded-full bg-ivory/78 px-4 py-2 text-xs uppercase tracking-[0.16em] text-walnut">
                Felt Texture Study
              </p>
            </div>
            <UnwindingWoolBall />
            <div className="absolute bottom-10 left-8 w-72 rounded-[1.6rem] border border-walnut/10 bg-ivory/84 p-6 shadow-[0_28px_70px_rgba(58,42,32,0.16)] backdrop-blur">
              <p className="font-serif text-4xl text-walnut">B2B</p>
              <p className="mt-2 text-sm leading-6 text-olive">
                Custom palettes, sampling, bulk-buy planning, and repeatable
                wholesale programs for international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-7 sm:grid-cols-2 md:grid-cols-4 md:px-10 lg:px-12">
          {trustStats.map(([value, label]) => (
            <div className="rounded-2xl border border-walnut/10 bg-ivory/62 p-5 shadow-sm" key={value}>
              <p className="font-serif text-3xl text-walnut">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.13em] text-olive">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Product Collections"
          title="Image-led product families for wholesale buyers."
          copy="Representative visuals guide the showroom while official Haaratimata catalog photography is prepared. Each category supports custom design, bulk-buy planning, and export conversations."
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="showroom-panel group p-4" key={product.slug}>
              <AssetImage
                src={product.imageSrc}
                alt={`${product.name} representative showroom visual`}
                className="mb-8 h-80"
                label={`Collection 0${index + 1}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="px-2 pb-3">
                <p className="small-caps text-gold">{product.category}</p>
                <h3 className="mt-3 font-serif text-4xl leading-tight text-walnut">
                  {product.name}
                </h3>
                <p className="mt-4 leading-7 text-olive">{product.summary}</p>
                <Link
                  className="mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-walnut"
                  href={`/showroom/${product.slug}`}
                >
                  Explore collection
                  <span className="h-px w-10 bg-gold transition-all group-hover:w-16" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-band border-y border-walnut/10">
        <div className="section grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="relative">
            <div className="editorial-frame p-4">
              <AssetImage
                src="/artisans/women-artisans.jpg"
                alt="Representative image of women artisans used as temporary showroom imagery"
                className="min-h-[520px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[1.6rem] border border-walnut/10 bg-ivory/88 p-6 shadow-[0_26px_70px_rgba(58,42,32,0.16)] backdrop-blur">
              <p className="font-serif text-3xl leading-tight text-walnut">
                Handmade production keeps the evidence of skilled hands visible.
              </p>
            </div>
          </div>
          <div className="pt-10 md:pt-0">
            <p className="eyebrow mb-4">Artisan Story</p>
            <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
              A women artisan network behind every finished piece.
            </h2>
            <p className="mt-7 text-lg leading-8 text-olive">
              Established in 1999, Haaratimata supports more than 300 women
              artisans from rural Nepal. The work connects Nepalese felt craft
              with export-focused production for buyers who value origin,
              consistency, and human-scale making.
            </p>
          </div>
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div>
          <p className="eyebrow mb-4 text-gold">Material & Sustainability</p>
          <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
            Natural wool, biodegradable felt, and careful handmade production.
          </h2>
          <p className="mt-7 text-lg leading-8 text-olive">
            Haaratimata works with 100% New Zealand wool and a Fair Trade
            focused production mindset. The result is eco-friendly felt made by
            hand for buyers who care about material character and long-term
            supplier relationships.
          </p>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src="/gallery/felt-texture.jpg"
            alt="Representative felt texture used as temporary showroom imagery"
            className="min-h-[440px]"
            label="Wool Felt Texture"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#3a2a20,#4b3526)] px-6 py-16 text-ivory shadow-[0_36px_100px_rgba(58,42,32,0.24)] md:px-12">
          <div className="gold-rule mb-10" />
          <p className="eyebrow mb-5 text-gold">Wholesale & Export</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              A serious supplier conversation for global buyers.
            </h2>
            <p className="text-lg leading-8 text-ivory/72">
              Build a focused felt assortment with a Nepal-based export partner
              that understands sampling, customization, bulk orders, and Fair
              Trade focused production.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div className="rounded-[1.4rem] border border-ivory/12 bg-ivory/6 p-5" key={benefit}>
                <p className="small-caps text-gold">{benefit}</p>
              </div>
            ))}
          </div>
          <Link
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-gold hover:text-walnut"
            href="/contact"
          >
            Request Wholesale Quote
          </Link>
        </div>
      </section>
    </>
  );
}
