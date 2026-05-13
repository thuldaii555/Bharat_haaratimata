import Link from "next/link";
import type { Product } from "@/lib/products";
import { AssetImage } from "./AssetImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      className="image-led-card group block transition-transform hover:-translate-y-1"
      href={`/showroom/${product.slug}`}
    >
      <div className="relative">
        <AssetImage
          src={product.imageSrc}
          alt={`${product.name} collection image`}
          className="h-80 rounded-none shadow-none"
          imageClassName="saturate-[0.94]"
          label="Collection"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_32%,rgba(58,42,32,0.62))]" />
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">
            {product.category}
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="leading-7 text-olive">{product.summary}</p>
        <span className="catalog-cta mt-6">Explore collection</span>
      </div>
    </Link>
  );
}
