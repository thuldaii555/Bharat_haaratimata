import Link from "next/link";
import type { Product } from "@/lib/products";
import { AssetImage } from "./AssetImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      className="showroom-panel group block p-4 transition-transform hover:-translate-y-1"
      href={`/showroom/${product.slug}`}
    >
      <AssetImage
        src={product.imageSrc}
        alt={`${product.name} representative showroom visual`}
        className="mb-7 h-72"
        label="Representative Visual"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <p className="text-xs uppercase tracking-[0.18em] text-gold">
        {product.category}
      </p>
      <h3 className="mt-3 font-serif text-3xl leading-tight text-walnut">
        {product.name}
      </h3>
      <p className="mt-4 leading-7 text-olive">{product.summary}</p>
      <span className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-walnut">
        Explore collection
        <span className="h-px w-10 bg-gold transition-all group-hover:w-14" />
      </span>
    </Link>
  );
}
