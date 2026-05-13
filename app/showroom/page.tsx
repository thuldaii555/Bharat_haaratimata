import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { products } from "@/lib/products";

export default function ShowroomPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Showroom"
        title="A polished catalog for handmade Nepalese felt wool products."
        copy="Browse representative showroom visuals for wholesale, hospitality, interiors, boutiques, bulk buy, and custom design-led programs. Official Haaratimata catalog photography can be added as the collection library grows."
      />
      <div className="showroom-panel mt-10 grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <AssetImage
          src="/gallery/textile-display.jpg"
          alt="Representative textile display used as temporary showroom imagery"
          className="min-h-[320px]"
          label="Temporary Showroom Mood"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4 text-gold">Buyer Notes</p>
          <p className="text-lg leading-8 text-olive">
            Custom palettes, dimensions, packaging direction, and repeatable
            export assortments can be discussed after buyer brief and sampling.
            Haaratimata works as a Nepal-based supplier, manufacturer, and
            exporter.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </section>
  );
}
