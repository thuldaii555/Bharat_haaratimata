import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { products } from "@/lib/products";

export default function ShowroomPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Showroom"
        title="A premium catalog of Nepalese wool felt collections."
        copy="Browse core categories for wholesale, hospitality, interiors, boutiques, and custom design-led programs."
      />
      <div className="mt-8 rounded-[2rem] border border-walnut/10 bg-ivory/55 p-5 text-sm leading-7 text-olive shadow-sm md:p-7">
        Custom palettes, dimensions, packaging direction, and repeatable export
        assortments can be discussed after buyer brief and sampling.
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </section>
  );
}
