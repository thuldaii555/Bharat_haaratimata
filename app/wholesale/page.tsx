import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { InquiryForm } from "../components/InquiryForm";

const steps = ["Brief", "Sampling", "Wholesale Quote", "Production", "Export"];
const buyerNeeds = [
  "Custom design development",
  "Sampling discussion",
  "Bulk order support",
  "Export readiness",
  "Ethical artisan network",
  "Long-term buyer partnership",
];

const partnershipDetails = [
  ["Design Development", "Translate buyer references into felt-friendly shapes, dimensions, palettes, and product families."],
  ["Sampling", "Review texture, scale, construction, and finish before moving into larger order planning."],
  ["Bulk Orders", "Plan repeatable assortments for boutiques, interior projects, hospitality, and ethical retail."],
  ["Export Readiness", "Discuss packing direction, lead times, communication cadence, and shipment preparation early."],
];

const trustBlocks = [
  ["Ethical Artisan Network", "More than 300 women artisans from rural Nepal support handmade felt production at a human scale."],
  ["Long-Term Partnership", "The strongest programs are built through repeat assortments, clear feedback, and stable buyer communication."],
  ["Custom Wholesale", "Private palettes, dimensions, motifs, object families, and merchandising sets can be shaped around your market."],
];

const buyerProgram = [
  ["Custom Design Development", "Mood references, dimensions, color direction, motif logic, and use-case requirements are translated into felt-friendly samples."],
  ["Sampling & Review", "Sampling helps confirm texture, scale, construction, finish, and assortment balance before larger quantity planning."],
  ["Bulk Order Planning", "MOQ and bulk order discussions can be shaped around category, complexity, size mix, packing needs, and repeat program goals."],
  ["Export-Ready Production", "Production planning considers lead times, packing direction, communication cadence, and shipment preparation from the start."],
  ["Repeatable Quality", "Clear specifications and stable assortment planning help buyers reorder with confidence across seasons."],
  ["Partnership Support", "The best buyer relationships are built through transparent feedback, practical timelines, and long-term collection thinking."],
];

export default function WholesalePage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Wholesale"
        title="A premium B2B destination for handmade wool felt programs."
        copy="Haaratimata supports international wholesale, bulk buy, custom assortment, sampling, and design-led product development across handmade wool felt categories."
      />
      <div className="mt-12 grid overflow-hidden rounded-[2.2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.22)] md:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Built for buyers who need clarity before commitment.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/72">
            From first brief to export packing, the process is designed around
            sampling discipline, 100% New Zealand wool consistency, and a
            credible artisan supply story from rural Nepal.
          </p>
        </div>
        <AssetImage
          src="/showroom/custom-designs.jpg"
          alt="Custom felt design samples for wholesale planning"
          className="min-h-[360px] rounded-none"
          imageClassName="opacity-[0.86]"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {steps.map((step, index) => (
          <div className="panel min-h-48" key={step}>
            <p className="eyebrow mb-8 text-gold">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-serif text-2xl text-walnut">{step}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {partnershipDetails.map(([title, copy]) => (
          <div className="panel min-h-56" key={title}>
            <p className="eyebrow mb-5 text-gold">{title}</p>
            <p className="font-serif text-3xl leading-tight text-walnut">{copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src="/gallery/textile-display.jpg"
            alt="Wholesale product assortment and felt sample direction"
            className="min-h-[500px]"
            label="Buyer Program"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div className="grid gap-3">
          {buyerProgram.map(([title, copy]) => (
            <div className="rounded-[1.1rem] border border-walnut/10 bg-ivory/70 p-5 shadow-sm" key={title}>
              <p className="small-caps text-gold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-olive">{copy}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="luxury-band mt-12 grid gap-6 rounded-[1.65rem] border border-walnut/10 p-5 md:grid-cols-3 md:p-7">
        {trustBlocks.map(([title, copy], index) => (
          <div className="grid gap-5" key={title}>
            <AssetImage
              src={index === 0 ? "/showroom/home-decor.jpg" : index === 1 ? "/gallery/textile-display.jpg" : "/showroom/felt-rugs.jpg"}
              alt={`${title} visual`}
              className="h-56"
              label={title}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <h3 className="font-serif text-3xl text-walnut">{title}</h3>
              <p className="mt-3 leading-7 text-olive">{copy}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="editorial-frame p-4">
          <AssetImage
            src="/showroom/custom-designs.jpg"
            alt="Custom felt design samples supporting wholesale production"
            className="min-h-[520px]"
            label="Custom Production"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div className="showroom-panel p-8 md:p-12">
          <p className="eyebrow mb-5 text-gold">Export Partnership</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut">
            Request pricing, minimums, lead times, and custom development
            options.
          </h2>
          <p className="mt-5 text-lg leading-8 text-olive">
            Share the category, target quantity, market, timeline, and custom needs. The inquiry below is intentionally structured for wholesale conversation rather than consumer checkout.
          </p>
          <div className="mt-7 grid gap-3 text-sm leading-6 text-olive sm:grid-cols-2">
            {buyerNeeds.map((need) => (
              <p className="rounded-2xl border border-walnut/10 bg-ivory/56 p-4" key={need}>
                {need}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <InquiryForm source="wholesale" />
          </div>
        </div>
      </div>
    </section>
  );
}
