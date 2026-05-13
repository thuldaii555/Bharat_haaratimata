import { products } from "@/lib/products";

export default function AdminProductsPage() {
  return (
    <section className="section">
      <p className="eyebrow mb-5 text-gold">Admin Architecture Placeholder</p>
      <h1 className="font-serif text-5xl text-walnut">Product Management</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-olive">
        A future protected workspace for product content, imagery, and wholesale
        fields. This page is static and does not perform CRUD operations.
      </p>
      <div className="mt-12 overflow-hidden rounded-[2rem] border border-walnut/10 bg-ivory/55 shadow-sm">
        {products.map((product) => (
          <div
            className="grid gap-4 border-b border-walnut/10 p-5 last:border-b-0 md:grid-cols-[1fr_1fr_auto]"
            key={product.slug}
          >
            <p className="font-serif text-2xl text-walnut">{product.name}</p>
            <p className="text-sm leading-6 text-olive">{product.category}</p>
            <span className="text-xs uppercase tracking-[0.18em] text-gold">
              Future Edit
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
