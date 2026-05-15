import Link from "next/link";

import { AssetImage } from "../components/AssetImage";
import { premiumImages } from "@/lib/premiumImages";

const moodBoardImages = [
  {
    label: "Color Story",
    caption: "Wool palettes for custom buyer development.",
    src: premiumImages.lookbook.colorStoryYarn,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Material Study",
    caption: "Texture, fiber, and hand-finished surface detail.",
    src: premiumImages.lookbook.basketYarnStudy,
    className: "md:col-span-2",
  },
  {
    label: "Interior Warmth",
    caption: "Soft textiles for calm, considered spaces.",
    src: premiumImages.lookbook.cozyHomeTextile,
    className: "md:row-span-2",
  },
  {
    label: "Rug Surface",
    caption: "Felt and wool surfaces shaped for interiors.",
    src: premiumImages.categories.rugs,
    className: "",
  },
  {
    label: "Handmade Detail",
    caption: "Tools, yarn, and materials behind the collection.",
    src: premiumImages.trade.weavingLoomDetail,
    className: "",
  },
  {
    label: "Playful Forms",
    caption: "Felt toys and soft goods for boutique gifting.",
    src: premiumImages.categories.toys,
    className: "",
  },
  {
    label: "Tapestry Mood",
    caption: "Textile-led wall and display inspiration.",
    src: premiumImages.categories.wallHangings,
    className: "md:col-span-2",
  },
  {
    label: "Natural Wool",
    caption: "Material warmth with biodegradable character.",
    src: premiumImages.sustainability.naturalWool,
    className: "",
  },
  {
    label: "Product Detail",
    caption: "Felt, stitch, and surface studies for buyer review.",
    src: premiumImages.showroom.whiteCarpetTexture,
    className: "",
  },
  {
    label: "Retail Mood",
    caption: "Warm object stories for interiors and displays.",
    src: premiumImages.categories.homeDecorations,
    className: "md:col-span-2",
  },
  {
    label: "Yarn Study",
    caption: "Color and fiber direction for custom collections.",
    src: premiumImages.showroom.blueYarnKnitting,
    className: "",
  },
  {
    label: "Showroom Surface",
    caption: "Floor textile scale and catalog presentation.",
    src: premiumImages.showroom.rugDisplay,
    className: "",
  },
];

const textureStudies = [
  {
    title: "Wool Surface",
    copy: "Close material views show the warmth, softness, and visible fiber character behind each felt collection.",
    src: premiumImages.sustainability.woolTexture,
  },
  {
    title: "Felt Density",
    copy: "Layered wool and compressed felt surfaces help buyers read thickness, hand, structure, and finish.",
    src: premiumImages.showroom.whiteCarpetTexture,
  },
  {
    title: "Color & Fiber",
    copy: "Yarn palettes and wool studies guide custom buyer programs before sampling and production planning.",
    src: premiumImages.lookbook.colorStoryYarn,
  },
];

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-center">
        <div>
          <p className="eyebrow mb-5 text-gold">Lookbook</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Texture, color, and handmade warmth in motion.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            Explore visual studies of wool, felt, yarn, interior mood, product
            detail, and handcrafted forms. The Lookbook is designed to inspire
            buyers, designers, and retail partners before they explore the
            showroom.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-dark" href="/showroom">
              Explore Showroom
            </Link>
            <Link className="button-light" href="/wholesale">
              Start a Trade Inquiry
            </Link>
          </div>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.lookbook.cozyHomeTextile}
            alt="Warm interior textile lookbook mood"
            className="min-h-[460px]"
            imageClassName="saturate-[0.94] contrast-[1.04]"
            label="Interior Mood"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Editorial Mood Board</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Wool, felt, color, texture, interiors, and handmade forms.
          </h2>
        </div>
        <div className="grid auto-rows-[18rem] gap-5 md:grid-cols-4">
          {moodBoardImages.map((item) => (
            <article
              className={`group relative overflow-hidden rounded-[1.35rem] border border-walnut/10 bg-ivory/70 shadow-[0_24px_70px_rgba(58,42,32,0.1)] ${item.className}`}
              key={item.label}
            >
              <AssetImage
                src={item.src}
                alt={`${item.label} lookbook image`}
                className="h-full rounded-none shadow-none"
                imageClassName="saturate-[0.93] contrast-[1.03]"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(58,42,32,0.74))] p-5 pt-16 text-ivory">
                <p className="small-caps text-gold">{item.label}</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-ivory/78">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Texture Studies</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Tactile details that make handmade pieces feel distinct.
          </h2>
          <p className="mt-5 text-lg leading-8 text-olive">
            A closer look at wool surfaces, yarn structure, felt density, and
            the tactile details that make handmade pieces feel distinct.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {textureStudies.map((study) => (
            <article className="image-led-card group" key={study.title}>
              <AssetImage
                src={study.src}
                alt={`${study.title} texture study`}
                className="h-72 rounded-none shadow-none"
                imageClassName="saturate-[0.94] contrast-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <p className="small-caps text-gold">{study.title}</p>
                <p className="mt-4 leading-7 text-olive">{study.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-band mt-16 grid gap-8 rounded-[2rem] border border-walnut/10 p-6 md:grid-cols-[0.92fr_1.08fr] md:p-8 md:items-center">
        <AssetImage
          src={premiumImages.categories.homeDecorations}
          alt="Handmade felt decor styled for warm interiors"
          className="min-h-[360px]"
          label="Interior / Product Mood"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="p-2 md:p-4">
          <p className="eyebrow mb-4 text-gold">
            For homes, boutiques, and trade collections.
          </p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Visual direction for warm interiors and considered retail stories.
          </h2>
          <p className="mt-6 text-lg leading-8 text-olive">
            Lookbook imagery helps buyers understand how Haaratimata products
            can live within warm interiors, seasonal retail stories, and custom
            wholesale programs.
          </p>
          <Link className="button-dark mt-8" href="/showroom">
            Browse Product Categories
          </Link>
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)]">
        <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-stretch">
          <div className="p-8 md:p-12">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-5 text-gold">Custom Development Visuals</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              From material palette to buyer collection.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/72">
              Color, texture, size, and form can be discussed for custom product
              development, sampling, and trade programs.
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[0.8rem] border border-ivory/24 bg-ivory/10 px-6 text-xs uppercase tracking-[0.15em] text-ivory shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-ivory/18"
              href="/wholesale"
            >
              Discuss Trade Options
            </Link>
          </div>
          <AssetImage
            src={premiumImages.lookbook.colorStoryYarn}
            alt="Wool color palette for custom buyer development"
            className="min-h-[420px] rounded-none"
            imageClassName="opacity-[0.86] saturate-[0.95]"
            label="Buyer Collection"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </section>
    </section>
  );
}
