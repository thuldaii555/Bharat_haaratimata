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

export default function WholesalePage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Wholesale"
        title="A serious B2B buyer portal for felt wool programs."
        copy="Haaratimata supports international wholesale, bulk buy, custom assortment, and design-led product development across handmade wool felt categories."
      />
      <div className="mt-12 rounded-[2.2rem] bg-walnut p-8 text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.22)] md:p-12">
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
      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {steps.map((step, index) => (
          <div className="panel min-h-48" key={step}>
            <p className="eyebrow mb-8 text-gold">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-serif text-2xl text-walnut">{step}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="editorial-frame p-4">
          <AssetImage
            src="/gallery/textile-display.jpg"
            alt="Representative textile display used as temporary showroom imagery"
            className="min-h-[390px]"
            label="Wholesale Mood"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div className="showroom-panel p-8 md:p-12">
          <p className="eyebrow mb-5 text-gold">Export Partnership</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut">
            Request pricing, minimums, lead times, and custom development
            options.
          </h2>
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
