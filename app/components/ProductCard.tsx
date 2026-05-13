import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      className="panel group block p-4 transition-transform hover:-translate-y-1"
      href={`/showroom/${product.slug}`}
    >
      <div className="image-well mb-8 flex h-64 items-end p-5">
        <p className="relative z-10 rounded-full bg-ivory/75 px-4 py-2 text-xs uppercase tracking-[0.18em] text-walnut shadow-sm">
          Felt Collection
        </p>
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-gold">
        {product.category}
      </p>
      <h3 className="mt-3 font-serif text-3xl leading-tight text-walnut">
        {product.name}
      </h3>
      <p className="mt-4 leading-7 text-olive">{product.summary}</p>
    </Link>
  );
}
