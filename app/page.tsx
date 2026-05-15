import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { premiumImages } from "@/lib/premiumImages";
import { AssetImage } from "./components/AssetImage";
import { SectionHeader } from "./components/SectionHeader";

export const metadata: Metadata = {
  title: "Haaratimata Handicrafts | Handmade Felt & Wool Products from Nepal",
  description:
    "Premium handmade felt and wool products from Nepal for interiors, boutiques, trade buyers, and custom wholesale programs.",
};

const trustStats = [
  ["Est. 1999", "Nepal-based felt and wool brand"],
  ["Handmade in Nepal", "Human-scale production"],
  ["100% New Zealand Wool", "Natural felt material"],
  ["300+ Women Artisans", "Rural Nepal maker network"],
  ["Trade & Export Ready", "Wholesale and export support"],
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

const tradeBenefits = [
  [
    "Custom Design Development",
    "Buyer-led colors, forms, sizing, and product concepts for curated collections.",
  ],
  [
    "Export-Ready Production",
    "Repeatable handmade production with attention to quality, finish, and buyer requirements.",
  ],
  [
    "Ethical Artisan Network",
    "A women-led artisan network combining skilled handwork with responsible production values.",
  ],
];

const lookbookPreview = [
  [
    "Color Story",
    "Soft yarn palettes and material studies for custom development.",
    premiumImages.lookbook.colorStoryYarn,
  ],
  [
    "Material Study",
    "Wool, tools, and tactile details behind handmade felt collections.",
    premiumImages.lookbook.basketYarnStudy,
  ],
  [
    "Interior Mood",
    "Warm textile moments for homes, boutiques, and seasonal displays.",
    premiumImages.lookbook.cozyHomeTextile,
  ],
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
              Handmade in Nepal Since 1999
            </div>
            <h1 className="max-w-[780px] font-serif text-[clamp(52px,6vw,96px)] leading-[0.92] text-walnut">
              Premium handmade felt collections for global interiors.
            </h1>
            <p className="mt-8 max-w-[700px] text-lg font-semibold leading-8 text-walnut sm:text-xl sm:leading-9">
              Haaratimata Handicrafts is a Nepal-based felt and wool
              manufacturer and exporter creating refined wholesale collections
              from 100% New Zealand wool for interiors, boutiques, and trade
              buyers.
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
                <Link className="button-light min-w-48 text-center" href="/wholesale">
                Request Trade Quote
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
                    Rugs, felt textures, and decor objects prepared for calm global interiors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-6 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-5 lg:px-12">
          {trustStats.map(([value, label]) => (
            <div className="rounded-[1.15rem] border border-walnut/10 bg-ivory/68 p-4 shadow-[0_14px_34px_rgba(58,42,32,0.055),inset_0_1px_0_rgba(255,252,245,0.7)]" key={value}>
              <p className="font-serif text-2xl leading-tight text-walnut">{value}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.13em] text-olive">{label}</p>
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
            className="min-h-[460px]"
            label="Nepal Wool Craft"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.lookbook.basketYarnStudy}
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
              Nepalese handmade felt tradition while serving buyers who need
              consistency, material clarity, and refined product direction.
            </p>
            <p>
              The company focuses on premium wool products for interiors,
              boutiques, gifts, accessories, pet concepts, and custom
              development, with a network of 300+ women artisans central to the
              making process.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-band border-y border-walnut/10">
        <div className="section">
          <SectionHeader
            eyebrow="How We Make"
            title="A careful process shaped by material, color, and skilled hands."
            copy="Each collection moves through a human-scale workflow built for material consistency, careful finishing, and trade-ready presentation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processCards.map(([title, copy], index) => (
              <div className="panel min-h-72" key={title}>
                <div className="mb-8 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 bg-ivory/74 font-serif text-xl text-walnut">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/70 to-transparent" />
                </div>
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
            quiet texture that gives handmade felt its character.
          </p>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.sustainability.woolTexture}
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
            src={premiumImages.trade.threadYarnDetail}
            alt="Wool thread and handcraft process detail"
            className="min-h-[440px]"
            label="300+ Women Artisans"
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
            designers, and trade buyers who need reliable handmade output.
          </p>
          <div className="mt-8 max-w-sm rounded-[1.35rem] border border-walnut/10 bg-ivory/74 p-6 shadow-[0_20px_54px_rgba(58,42,32,0.08)]">
            <p className="font-serif text-5xl leading-none text-walnut">300+</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-olive">
              Women artisans in the production network
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="showroom-panel grid gap-8 p-8 md:grid-cols-[0.78fr_1.22fr] md:items-center md:p-10">
          <div>
            <p className="eyebrow mb-4 text-gold">Fair Trade Focus</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              People-first production with responsible standards in view.
            </h2>
          </div>
          <p className="text-lg leading-8 text-olive">
            Fair Trade values, fair payment principles, safe working
            conditions, capacity building, and environmental responsibility
            guide the way Haaratimata works with artisan communities.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Prepared Credentials"
          title="Awards & Recognition"
          copy="This section is prepared for verified awards, certifications, export recognition, and trade credentials as the business provides official documentation."
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
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-gold">Visual Notes</p>
            <h2 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
              From the Lookbook
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-olive">
            A quiet study of wool, color, texture, and handmade forms designed
            for warm interiors, boutiques, and custom development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {lookbookPreview.map(([label, caption, src]) => (
            <div className="image-led-card group" key={label}>
              <div className="relative h-[24rem] overflow-hidden">
                <Image
                  src={src}
                  alt={`${label} lookbook preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="premium-image-hover object-cover object-center saturate-[0.96] contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(58,42,32,0.42)),linear-gradient(90deg,rgba(255,252,245,0.08),transparent_45%)]" />
              </div>
              <div className="p-6">
                <p className="small-caps text-gold">{label}</p>
                <p className="mt-4 text-lg leading-8 text-olive">{caption}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="button-light mt-10 inline-flex" href="/gallery">
          View Lookbook
        </Link>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_14%_18%,rgba(184,145,75,0.24),transparent_18rem),linear-gradient(135deg,#3a2a20,#4b3526_54%,#2f221b)] text-ivory shadow-[0_36px_100px_rgba(58,42,32,0.24)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.72fr]">
            <div className="px-6 py-16 md:px-12">
              <div className="gold-rule mb-10" />
              <p className="eyebrow mb-5 text-gold">Trade Partnership</p>
              <h2 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
                For trade buyers, designers, and global retail partners.
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-ivory/72">
                Haaratimata supports custom development, bulk planning, sampling
                discussions, and repeatable felt/wool production for boutiques,
                interior designers, hospitality buyers, and export partners.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {tradeBenefits.map(([title, copy]) => (
                  <div className="rounded-[1.35rem] border border-ivory/14 bg-ivory/8 p-5 shadow-[inset_0_1px_0_rgba(255,252,245,0.1)] backdrop-blur" key={title}>
                    <p className="small-caps text-gold">{title}</p>
                    <p className="mt-4 text-sm leading-6 text-ivory/72">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 bg-gold px-6 text-sm uppercase tracking-[0.16em] text-walnut transition-colors hover:bg-ivory"
                  href="/wholesale"
                >
                  Start Trade Inquiry
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-ivory/35 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:text-gold"
                  href="/showroom"
                >
                  Explore Showroom
                </Link>
              </div>
            </div>
            <div className="min-h-[360px] lg:min-h-full">
              <AssetImage
                src={premiumImages.trade.weavingLoomDetail}
                alt="Trade-ready handmade wool production detail"
                className="h-full min-h-[360px] rounded-none shadow-none"
                imageClassName="saturate-[0.96] contrast-[1.04]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
