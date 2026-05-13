import Link from "next/link";
import { SectionHeader } from "../components/SectionHeader";

const steps = ["Brief", "Sampling", "Wholesale Quote", "Production", "Export"];
const buyerNeeds = [
  "Custom color stories and seasonal assortments",
  "Interior and hospitality scale development",
  "Private-label friendly product planning",
  "Clear communication on minimums and lead times",
];

export default function WholesalePage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Wholesale"
        title="A refined B2B partner for wool felt collections."
        copy="Haaratimata supports international wholesale programs, custom assortments, and design-led product development across wool felt categories."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-5">
        {steps.map((step, index) => (
          <div className="panel min-h-48" key={step}>
            <p className="eyebrow mb-8 text-gold">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-serif text-2xl text-walnut">{step}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="editorial-frame p-4">
          <div className="image-well min-h-[390px]" />
        </div>
        <div className="rounded-[2rem] bg-walnut p-8 text-ivory shadow-[0_30px_80px_rgba(58,42,32,0.18)] md:p-12">
          <p className="eyebrow mb-5 text-gold">Export Partnership</p>
          <h2 className="font-serif text-4xl leading-tight">
            Request pricing, minimums, lead times, and custom development
            options.
          </h2>
          <div className="mt-7 grid gap-3 text-sm leading-6 text-ivory/72 sm:grid-cols-2">
            {buyerNeeds.map((need) => (
              <p className="rounded-2xl border border-ivory/10 bg-ivory/5 p-4" key={need}>
                {need}
              </p>
            ))}
          </div>
          <Link
            className="mt-8 inline-flex rounded-full border border-gold/70 px-6 py-4 text-xs uppercase tracking-[0.16em] hover:bg-gold hover:text-walnut"
            href="/contact"
          >
            Request Wholesale Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
