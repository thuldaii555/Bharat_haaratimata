import { SectionHeader } from "../components/SectionHeader";

const points = [
  ["Natural Material", "Wool felt shaped with water, soap, hand pressure, and time."],
  ["Fair Work", "Women artisans are central to production and income generation."],
  ["Low Waste", "Small-batch development supports thoughtful buying and cleaner planning."],
  ["Longevity", "Tactile objects are designed beyond seasonal disposability."],
];

export default function SustainabilityPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Sustainability"
        title="Ethics are part of the material, not an afterthought."
        copy="The brand's sustainability position begins with natural wool, hand production, and respectful artisan relationships."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {points.map(([title, point]) => (
          <div className="panel min-h-56" key={title}>
            <div className="mb-8 h-12 w-12 rounded-full border border-gold/30 bg-gold/10 shadow-inner" />
            <h3 className="font-serif text-3xl text-walnut">{title}</h3>
            <p className="mt-4 text-lg leading-8 text-olive">{point}</p>
          </div>
        ))}
      </div>
      <div className="luxury-band mt-10 rounded-[2rem] border border-walnut/10 p-8 md:p-12">
        <p className="eyebrow mb-4">Impact</p>
        <p className="max-w-4xl text-2xl leading-10 text-walnut">
          Hand felt production keeps the human rhythm of craft visible while
          giving buyers a material story that feels credible, warm, and durable.
        </p>
      </div>
    </section>
  );
}
