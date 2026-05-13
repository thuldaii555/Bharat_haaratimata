import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";

const points = [
  ["Natural Material", "100% New Zealand wool felt shaped with water, soap, hand pressure, and time."],
  ["Fair Trade Focus", "300+ rural women artisans are central to production and income generation."],
  ["Biodegradable", "Eco-friendly wool products support thoughtful buying and cleaner planning."],
  ["Longevity", "Tactile handmade objects are designed beyond seasonal disposability."],
];

export default function SustainabilityPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Sustainability"
        title="Ethics are part of the material, not an afterthought."
        copy="The brand's sustainability position begins with 100% New Zealand wool, hand production in Nepal, biodegradable materials, and respectful artisan relationships."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src="/gallery/felt-texture.jpg"
            alt="Representative felt texture used as temporary showroom imagery"
            className="min-h-[440px]"
            label="Natural Wool Felt"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-4 text-gold">Material Integrity</p>
          <p className="font-serif text-4xl leading-tight text-walnut">
            New Zealand wool, hand pressure, and production choices that keep
            craft value visible.
          </p>
        </div>
      </div>
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
          Hand felt production in Nepal keeps the human rhythm of craft visible
          while giving buyers a biodegradable material story that feels
          credible, warm, and durable.
        </p>
      </div>
    </section>
  );
}
