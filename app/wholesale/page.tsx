import Link from "next/link";

import { AssetImage } from "../components/AssetImage";
import { categories } from "@/lib/categories";
import { premiumImages } from "@/lib/premiumImages";

const buyerGroups = [
  {
    title: "Boutiques & Retailers",
    copy: "Curated felt and wool pieces for seasonal assortments, gifting edits, and refined retail displays.",
  },
  {
    title: "Interior Designers",
    copy: "Material-led pieces, custom sizing, and color direction for homes, studios, and layered interior schemes.",
  },
  {
    title: "Hospitality Buyers",
    copy: "Warm handmade objects, rugs, accessories, and decor concepts for hotels, retreats, and guest spaces.",
  },
  {
    title: "Importers & Distributors",
    copy: "Export-ready category planning for buyers who need clear assortment structure and repeatable production.",
  },
  {
    title: "Gift & Lifestyle Shops",
    copy: "Soft wool goods, toys, decor, and small accessories suited to considered gifting and lifestyle retail.",
  },
  {
    title: "Private Label Buyers",
    copy: "Buyer-specific colors, forms, categories, and collection concepts for longer-term development programs.",
  },
];

const tradeServices = [
  {
    title: "Custom Design Development",
    copy: "Buyer-led colors, forms, sizing, and product concepts for curated collections.",
  },
  {
    title: "Sampling Support",
    copy: "Early samples help align texture, color, size, finish, and buyer expectations before larger production.",
  },
  {
    title: "Bulk Production Planning",
    copy: "Repeatable handmade production for seasonal assortments, retail programs, and trade partnerships.",
  },
  {
    title: "Color Palette Matching",
    copy: "Wool palettes can be planned around interior schemes, retail stories, or buyer-provided references.",
  },
  {
    title: "Export-Ready Coordination",
    copy: "Product details, packaging expectations, production timing, and buyer requirements are aligned early.",
  },
  {
    title: "Private Label Support",
    copy: "Custom collections and buyer-specific assortments can be discussed for long-term partnerships.",
  },
];

const tradeProcess = [
  {
    title: "Inquiry",
    copy: "Share your category interest, market, target quantity, and timeline so the conversation starts clearly.",
  },
  {
    title: "Design Discussion",
    copy: "Review colors, dimensions, references, product use, assortment goals, and customization needs.",
  },
  {
    title: "Sample Direction",
    copy: "Define the sample path around texture, scale, finish, material character, and buyer expectations.",
  },
  {
    title: "Quote & Production Plan",
    copy: "Align pricing, MOQ, lead time, category complexity, packing direction, and repeat production needs.",
  },
  {
    title: "Production & Quality Review",
    copy: "Handmade production moves forward with attention to form, finish, consistency, and buyer requirements.",
  },
  {
    title: "Export / Buyer Handoff",
    copy: "Final details are coordinated for packing, documentation, communication, and buyer-side planning.",
  },
];

export default function WholesalePage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-center">
        <div>
          <p className="eyebrow mb-5 text-gold">Trade</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            For buyers who need craft, consistency, and custom development.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            Haaratimata partners with boutiques, interior designers, hospitality
            buyers, importers, and retail teams seeking handmade felt and wool
            collections with thoughtful material quality, ethical production
            values, and export-ready planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-dark" href="/contact">
              Start a Trade Inquiry
            </Link>
            <Link className="button-light" href="/showroom">
              Explore Showroom
            </Link>
          </div>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.trade.weavingLoomDetail}
            alt="Handmade textile production detail for trade buyers"
            className="min-h-[460px]"
            imageClassName="saturate-[0.94] contrast-[1.04]"
            label="Trade Development"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)] md:grid-cols-[0.92fr_1.08fr]">
        <AssetImage
          src={premiumImages.trade.threadYarnDetail}
          alt="Wool and thread detail for trade sampling"
          className="min-h-[340px] rounded-none"
          imageClassName="opacity-[0.88] saturate-[0.95]"
          label="Buyer Program"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-5 text-gold">B2B Portal</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Built for considered sourcing, not transactional buying.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ivory/72">
            Trade conversations can include buyer program planning, custom
            development, sampling, bulk production, export-ready coordination,
            and long-term collection thinking.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Who We Work With</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Trade partners across retail, interiors, hospitality, and private label.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buyerGroups.map((group) => (
            <article className="panel min-h-56" key={group.title}>
              <div className="mb-7 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {group.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{group.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-4 text-gold">Trade Services</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Support for custom development and export-ready production.
          </h2>
          <p className="mt-5 text-lg leading-8 text-olive">
            The trade page is designed for serious buyer conversations around
            category fit, sample direction, production planning, and practical
            sourcing details.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tradeServices.map((service) => (
            <article
              className="rounded-[1.25rem] border border-walnut/10 bg-ivory/74 p-6 shadow-[0_18px_54px_rgba(58,42,32,0.07)]"
              key={service.title}
            >
              <p className="small-caps text-gold">{service.title}</p>
              <p className="mt-3 leading-7 text-olive">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Trade Process</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            A clear path from inquiry to buyer handoff.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tradeProcess.map((step, index) => (
            <article className="panel min-h-64" key={step.title}>
              <p className="eyebrow mb-8 text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-gold">Trade Categories</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Browse product families for buyer program planning.
            </h2>
          </div>
          <Link className="button-light w-fit" href="/showroom">
            Full Showroom
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              className="group rounded-[1.25rem] border border-walnut/10 bg-ivory/72 p-5 shadow-[0_18px_52px_rgba(58,42,32,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-ivory/92"
              href={`/showroom/category/${category.slug}`}
              key={category.id}
            >
              <p className="small-caps text-gold">{category.productCountLabel}</p>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-walnut">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-olive">
                {category.shortDescription}
              </p>
              <span className="mt-5 inline-flex text-xs uppercase tracking-[0.15em] text-walnut transition group-hover:text-gold">
                Explore Category
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="luxury-band mt-16 rounded-[1.65rem] border border-walnut/10 p-6 md:p-8">
        <p className="eyebrow mb-4 text-gold">Trade Buyer Note</p>
        <p className="max-w-5xl font-serif text-3xl leading-tight text-walnut md:text-4xl">
          Trade pricing, MOQ, lead time, and final production details depend on
          product type, size, color, quantity, customization level, and delivery
          requirements.
        </p>
      </div>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)]">
        <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-stretch">
          <div className="p-8 md:p-12">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-5 text-gold">Trade Inquiry</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Ready to discuss a trade collection?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/72">
              Share your category interest, target quantity, design direction,
              and market needs. Haaratimata can help shape a practical starting
              point for samples, pricing, and production planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-light" href="/contact">
                Contact Us
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-[0.8rem] border border-ivory/24 bg-ivory/10 px-6 text-xs uppercase tracking-[0.15em] text-ivory shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-ivory/18"
                href="/showroom"
              >
                Browse Showroom
              </Link>
            </div>
          </div>
          <AssetImage
            src={premiumImages.categories.customDesigns}
            alt="Custom felt and wool development for trade collections"
            className="min-h-[420px] rounded-none"
            imageClassName="opacity-[0.86] saturate-[0.95]"
            label="Custom Development"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </section>
    </section>
  );
}
