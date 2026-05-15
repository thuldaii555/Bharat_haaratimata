import Link from "next/link";

import { AssetImage } from "../components/AssetImage";
import { premiumImages } from "@/lib/premiumImages";

const overviewCards = [
  {
    title: "Natural Wool",
    copy: "100% New Zealand wool brings softness, density, warmth, and biodegradable material character to handmade felt collections.",
  },
  {
    title: "Handmade Production",
    copy: "Hand-felted and hand-finished processes support slower, more intentional production for products made with care.",
  },
  {
    title: "Responsible Buyer Planning",
    copy: "Custom development, bulk planning, and thoughtful assortments help reduce waste and create clearer production intent.",
  },
];

const certificatePlaceholders = [
  {
    title: "Certification Logo",
    copy: "To be uploaded by admin",
  },
  {
    title: "Certificate Image",
    copy: "To be uploaded by admin",
  },
  {
    title: "Verification Details",
    copy: "To be added by admin",
  },
];

const fairTradeStandards = [
  {
    number: "01",
    title: "Opportunities for Disadvantaged Producers",
    copy: "Supporting rural and disadvantaged artisan communities through meaningful employment and market access.",
  },
  {
    number: "02",
    title: "Transparency and Accountability",
    copy: "Maintaining responsible relationships with artisans, staff, buyers, and production partners.",
  },
  {
    number: "03",
    title: "Fair Trade Practices",
    copy: "Building long-term partnerships based on trust, respect, timely commitments, and shared value.",
  },
  {
    number: "04",
    title: "Fair Payment",
    copy: "Supporting fair payment principles, timely payment, and equal pay for equal work.",
  },
  {
    number: "05",
    title: "No Child Labour, No Forced Labour",
    copy: "Standing against child labor and forced labor while supporting family livelihoods through dignified work.",
  },
  {
    number: "06",
    title: "No Discrimination, Gender Equality, Freedom of Association",
    copy: "Promoting equal opportunity, women's participation, and respectful workplace voice.",
  },
  {
    number: "07",
    title: "Good Working Conditions",
    copy: "Supporting safe, healthy, and legally compliant working conditions for production teams.",
  },
  {
    number: "08",
    title: "Capacity Building",
    copy: "Providing training and skill development so artisans can strengthen quality, craft, and production capability.",
  },
  {
    number: "09",
    title: "Promote Fair Trade",
    copy: "Helping buyers and customers understand the value of Fair Trade and responsible handmade production.",
  },
  {
    number: "10",
    title: "Respect for the Environment",
    copy: "Reducing environmental impact through natural materials, responsible production choices, recycled packaging where possible, and lower-impact operational practices.",
  },
];

export default function SustainabilityPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-center">
        <div>
          <p className="eyebrow mb-5 text-gold">Our Commitment to Sustainability</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Fair Trade values, natural wool, and handmade production with purpose.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            Haaratimata&apos;s official materials describe the company as Fair
            Trade Certified and rooted in people-first production. The new
            Sustainability page should present this commitment through clear,
            premium storytelling around artisans, materials, working conditions,
            environmental responsibility, and future certificate documentation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-dark" href="/showroom">
              Explore Showroom
            </Link>
            <Link className="button-light" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.sustainability.naturalWool}
            alt="Natural wool texture for handmade felt production"
            className="min-h-[460px]"
            imageClassName="saturate-[0.94] contrast-[1.04]"
            label="Natural Wool"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Sustainability Overview</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Materials, process, and planning shaped around responsible production.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {overviewCards.map((card) => (
            <article className="panel min-h-64" key={card.title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)] md:grid-cols-[0.95fr_1.05fr]">
        <AssetImage
          src={premiumImages.sustainability.woolTexture}
          alt="Wool texture connected to Fair Trade and sustainability values"
          className="min-h-[380px] rounded-none"
          imageClassName="opacity-[0.88] saturate-[0.95]"
          label="Fair Trade Certified"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-5 text-gold">Fair Trade Certified</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            People-first production presented with careful certification wording.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ivory/72">
            Haaratimata&apos;s official materials describe the company as Fair
            Trade Certified, with a people-first approach to artisan work, fair
            payment, safe working conditions, capacity building, and
            environmental responsibility.
          </p>
          <p className="mt-5 text-sm leading-7 text-ivory/62">
            Certificate numbers, issuing bodies, dates, verification links, and
            official marks should be added only after the company provides
            approved documentation and assets.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Certification Documents & Logos</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Prepared for verified certification assets.
          </h2>
          <p className="mt-5 text-lg leading-8 text-olive">
            This area is prepared for official certificate images, Fair Trade
            logos, WFTO documentation, certificate numbers, and verification
            details once provided by the company.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {certificatePlaceholders.map((item) => (
            <article
              className="flex min-h-72 flex-col justify-between rounded-[1.35rem] border border-dashed border-gold/45 bg-[radial-gradient(circle_at_20%_12%,rgba(184,145,75,0.14),transparent_12rem),linear-gradient(145deg,rgba(255,252,245,0.82),rgba(217,213,204,0.34))] p-6 shadow-[0_20px_64px_rgba(58,42,32,0.08)]"
              key={item.title}
            >
              <div>
                <p className="small-caps text-gold">Future admin-editable asset</p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-walnut">
                  {item.title}
                </h3>
              </div>
              <p className="mt-8 rounded-full border border-walnut/10 bg-ivory/70 px-5 py-3 text-sm uppercase tracking-[0.14em] text-olive">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-walnut/10 bg-[linear-gradient(135deg,#3a2a20,#4b3526)] text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)]">
        <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="p-8 md:p-10">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-4 text-gold">
              Ten Fair Trade Standards We Align Around
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A practical framework for artisan welfare, accountability, and
              environmental care.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ivory/72">
              Haaratimata&apos;s official Fair Trade content references the ten
              WFTO standards. The new site presents them in polished language
              suited to buyers, trade partners, and responsible retail programs.
            </p>
          </div>
          <div className="grid gap-px bg-ivory/10 sm:grid-cols-2">
            {fairTradeStandards.map((standard) => (
              <article className="bg-ivory/7 p-5 backdrop-blur" key={standard.title}>
                <p className="font-serif text-2xl text-gold">{standard.number}</p>
                <h3 className="mt-3 font-serif text-xl leading-tight text-ivory">
                  {standard.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ivory/68">
                  {standard.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[1.04fr_0.96fr] md:items-center">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-4 text-gold">Women Artisan Network</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            A human-scale network of skilled makers.
          </h2>
          <p className="mt-6 text-lg leading-8 text-olive">
            Haaratimata supports 300+ women artisans, combining skilled handwork
            with repeatable production for boutiques, interior designers, trade
            buyers, and export partners.
          </p>
          <div className="mt-8 rounded-[1.25rem] border border-gold/30 bg-ivory/68 p-6">
            <p className="font-serif text-6xl leading-none text-walnut">300+</p>
            <p className="mt-3 small-caps text-gold">Women artisans supported</p>
          </div>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.trade.threadYarnDetail}
            alt="Thread and wool detail representing skilled handmade production"
            className="min-h-[420px]"
            label="Artisan Network"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className="luxury-band mt-16 grid gap-8 rounded-[2rem] border border-walnut/10 p-6 md:grid-cols-[0.92fr_1.08fr] md:p-8 md:items-center">
        <AssetImage
          src={premiumImages.sustainability.naturalWool}
          alt="Natural wool material connected to environmental responsibility"
          className="min-h-[360px]"
          label="Environmental Responsibility"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="p-2 md:p-4">
          <p className="eyebrow mb-4 text-gold">Respect for materials, process, and environment.</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Lower-impact choices, stated carefully.
          </h2>
          <p className="mt-6 text-lg leading-8 text-olive">
            The company&apos;s Fair Trade materials reference environmental
            care, recycled packaging, and solar energy usage. These points are
            presented as part of Haaratimata&apos;s responsibility story without
            overstating broad sustainability claims.
          </p>
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)]">
        <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-stretch">
          <div className="p-8 md:p-12">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-5 text-gold">Responsible Collections</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Build with materials and values buyers can stand behind.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/72">
              Explore handmade wool and felt collections developed for
              interiors, trade buyers, and responsible retail programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-light" href="/showroom">
                Explore Showroom
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-[0.8rem] border border-ivory/24 bg-ivory/10 px-6 text-xs uppercase tracking-[0.15em] text-ivory shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-ivory/18"
                href="/wholesale"
              >
                Start a Trade Inquiry
              </Link>
            </div>
          </div>
          <AssetImage
            src={premiumImages.lookbook.cozyHomeTextile}
            alt="Warm wool textile interior for responsible retail collections"
            className="min-h-[420px] rounded-none"
            imageClassName="opacity-[0.86] saturate-[0.95]"
            label="Wool Collections"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </section>
    </section>
  );
}
