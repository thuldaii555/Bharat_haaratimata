import Link from "next/link";
import Image from "next/image";
import { premiumImages } from "@/lib/premiumImages";
import { AssetImage } from "./components/AssetImage";
import { SectionHeader } from "./components/SectionHeader";

const trustStats = [
  ["Est. 1999", "Nepalese felt craft company"],
  ["Handmade in Nepal", "Human-scale production"],
  ["100% New Zealand Wool", "Natural felt material"],
  ["300+ Women Artisans", "Rural Nepal maker network"],
  ["Trade & Export Ready", "Wholesale partner support"],
];

const heroFacts = ["Est. 1999", "300+ Women Artisans", "100% New Zealand Wool"];

const processCards = [
  ["Wool Selection", "Carefully chosen wool gives each collection its soft, dense, and lasting foundation."],
  ["Color Planning", "Palettes are developed for interiors, boutique assortments, and custom buyer programs."],
  ["Felting & Shaping", "Skilled handwork transforms wool into rugs, decor, toys, accessories, and custom pieces."],
  ["Finishing & Quality Check", "Each piece is reviewed for texture, form, consistency, and export readiness."],
];

const recognitionPlaceholders = [
  "Export Craft Recognition",
  "Fair Trade Focus",
  "Artisan Network Growth",
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
            className="hero-background-drift object-cover opacity-[0.7] saturate-[0.98] contrast-[1.02]"
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
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-7 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-5 lg:px-12">
          {trustStats.map(([value, label]) => (
            <div className="rounded-2xl border border-walnut/10 bg-ivory/62 p-5 shadow-sm" key={value}>
              <p className="font-serif text-3xl text-walnut">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.13em] text-olive">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <p className="eyebrow mb-4 text-gold">Brand Story</p>
          <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
            Handmade in Nepal, refined for global interiors.
          </h2>
          <p className="mt-7 text-lg leading-8 text-olive">
            Haaratimata Handicrafts brings Nepalese felt craft into premium
            homes, boutiques, and trade collections. Since 1999, the brand has
            worked with wool, texture, and handmade production to create pieces
            that feel warm, useful, and globally relevant.
          </p>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.loomWarm}
            alt="Handmade wool craft detail from Nepal"
            className="min-h-[440px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.textileVariety}
            alt="Nepalese handmade felt craft and textile display"
            className="min-h-[460px]"
            label="Founded 1999"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Heritage / Who We Are</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Nepalese felt craft shaped for modern wholesale and export.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-olive">
            <p>
              Established in 1999, Haaratimata Handicrafts works from a
              Nepalese handmade felt tradition while serving global buyers who
              need consistency, material clarity, and refined product direction.
            </p>
            <p>
              The company focuses on premium wool products across interiors,
              gifts, accessories, pet concepts, and custom development, with a
              network of 300+ women artisans central to the making process.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-band border-y border-walnut/10">
        <div className="section">
          <SectionHeader
            eyebrow="How We Make"
            title="A careful process shaped by material, color, and skilled hands."
            copy="Each collection moves through a human-scale workflow built for warmth, consistency, and trade-ready finishing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processCards.map(([title, copy]) => (
              <div className="panel" key={title}>
                <p className="small-caps text-gold">{title}</p>
                <p className="mt-4 text-lg leading-8 text-olive">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div>
          <p className="eyebrow mb-4 text-gold">Material Story</p>
          <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
            Wool with warmth, density, and natural character.
          </h2>
          <p className="mt-7 text-lg leading-8 text-olive">
            Made with 100% New Zealand wool, Haaratimata collections are
            designed around softness, durability, biodegradability, and the
            quiet texture that makes handmade felt feel distinct.
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

      <section className="section grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.whiteWoolFlowers}
            alt="Natural wool material detail"
            className="min-h-[420px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow mb-4 text-gold">Artisan Network</p>
          <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
            A human-scale production network.
          </h2>
          <p className="mt-7 text-lg leading-8 text-olive">
            Haaratimata supports a network of 300+ women artisans, combining
            skilled handwork with repeatable production for boutiques, interior
            designers, and trade buyers.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Awards & Recognition"
          title="Recognition notes for future verification."
          copy="These are editable placeholders for confirmed achievements, certifications, or milestones. They should be replaced only with verified recognition."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {recognitionPlaceholders.map((title) => (
            <div className="panel min-h-44" key={title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold to-transparent" />
              <p className="font-serif text-3xl text-walnut">{title}</p>
              <p className="mt-4 text-sm leading-6 text-olive">
                Editable placeholder. Replace with verified details before
                presenting as a formal award, certification, or claim.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#3a2a20,#4b3526)] px-6 py-16 text-ivory shadow-[0_36px_100px_rgba(58,42,32,0.24)] md:px-12">
          <div className="gold-rule mb-10" />
          <p className="eyebrow mb-5 text-gold">Next Step</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              Explore the showroom or begin a trade conversation.
            </h2>
            <p className="text-lg leading-8 text-ivory/72">
              Move from brand story into catalog browsing, custom development,
              and wholesale planning with the Haaratimata team.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 bg-gold px-6 text-sm uppercase tracking-[0.16em] text-walnut transition-colors hover:bg-ivory"
              href="/showroom"
            >
              Explore Showroom
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-ivory/35 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:text-gold"
              href="/wholesale"
            >
              Trade Inquiries
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
