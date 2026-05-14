import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { getPlacedProductImage, premiumImages } from "@/lib/premiumImages";
import { AssetImage } from "./components/AssetImage";
import { SectionHeader } from "./components/SectionHeader";

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

const heroFacts = ["Est. 1999", "300+ Women Artisans", "100% New Zealand Wool"];

const atelierNotes = [
  ["Material Integrity", "Dense wool felt, hand-finished texture, and natural tactility for long-use interiors."],
  ["Interior Positioning", "Rugs, decor, and custom objects planned for boutiques, hospitality, and design studios."],
  ["Export Partnership", "Sampling, color development, bulk planning, and repeatable wholesale programs from Nepal."],
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={premiumImages.hero.background}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.7] saturate-[0.98] contrast-[1.02]"
          />
        </div>
        <div className="absolute inset-0 bg-[#fff8ea]/30" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f3ea] to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-8 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(460px,1.05fr)] lg:gap-12 lg:px-10 xl:px-12 2xl:px-8">
          <div className="w-full">
            <div className="premium-kicker mb-7">
              Handmade Nepal Felt Wool Since 1999
            </div>
            <h1 className="max-w-[780px] font-serif text-[clamp(52px,6vw,96px)] leading-[0.92] text-walnut">
              Deluxe handmade felt collections for global interiors.
            </h1>
            <p className="mt-8 max-w-[700px] text-lg font-semibold leading-8 text-walnut sm:text-xl sm:leading-9">
              Haaratimata Handicrafts is a Nepal-based felt wool products
              supplier, manufacturer, and exporter creating refined wholesale
              collections from 100% New Zealand wool.
            </p>
            <div className="mt-8 grid w-full max-w-[700px] grid-cols-1 overflow-hidden rounded-[1.1rem] border border-walnut/12 bg-ivory/72 shadow-[0_18px_44px_rgba(58,42,32,0.09)] backdrop-blur sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <p className="border-b border-walnut/10 px-4 py-3 text-center text-[0.68rem] uppercase tracking-[0.14em] text-walnut last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" key={fact}>
                  {fact}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="button-dark min-w-48 text-center" href="/showroom">
                View Showroom
              </Link>
              <Link className="button-light min-w-48 text-center" href="/contact">
                Request Wholesale Quote
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="editorial-frame w-full p-3 sm:p-4">
              <div className="relative min-h-[460px] overflow-hidden rounded-[1.25rem] md:min-h-[520px] lg:min-h-[560px]">
                <Image
                  src={premiumImages.hero.feature}
                  alt="Basket filled with colorful wool yarn for handmade felt collections"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="hero-editorial-drift object-cover object-center saturate-[1.02] contrast-[1.04]"
                />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(58,42,32,0.01),rgba(58,42,32,0.18)),linear-gradient(90deg,rgba(255,252,245,0.06),transparent_44%)]" />
                <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-ivory/20 bg-walnut/42 px-5 py-4 text-ivory backdrop-blur-md md:px-6 md:py-5">
                  <p className="small-caps text-gold">Premium interior collections</p>
                  <p className="mt-2 max-w-xl font-serif text-2xl leading-tight md:text-3xl">
                    Rugs, felt textures, and decor objects composed for calm global spaces.
                  </p>
                </div>
              </div>
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
          copy="Each category is presented with a clear material story, premium image treatment, and practical wholesale direction for buyers planning assortments."
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="image-led-card group" key={product.slug}>
              <div className="relative">
                <AssetImage
                  src={getPlacedProductImage(product.slug, product.imageSrc)}
                  alt={`${product.name} collection image`}
                  className="h-[24rem] rounded-none shadow-none"
                  imageClassName="saturate-[0.94]"
                  label={`Collection 0${index + 1}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(58,42,32,0.58))]" />
                <div className="absolute bottom-6 left-6 right-6 z-10 text-ivory">
                  <p className="small-caps text-gold">{product.category}</p>
                  <h3 className="mt-3 font-serif text-4xl leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="leading-7 text-olive">{product.summary}</p>
                <Link className="catalog-cta mt-7" href={`/showroom/${product.slug}`}>
                  Explore collection
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
                src={premiumImages.loomWarm}
                alt="Close wool rug texture and hand-finished surface"
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

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {atelierNotes.map(([title, copy], index) => (
            <div className="image-led-card group" key={title}>
              <AssetImage
                src={index === 0 ? premiumImages.whiteWoolFlowers : index === 1 ? premiumImages.winterHome : premiumImages.pastelYarn}
                alt={`${title} visual`}
                className="h-72 rounded-none shadow-none"
                imageClassName="saturate-[0.98] contrast-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <p className="small-caps text-gold">{title}</p>
                <p className="mt-4 text-lg leading-8 text-olive">{copy}</p>
              </div>
            </div>
          ))}
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
            src={premiumImages.loomTexture}
            alt="Natural felt texture detail"
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
