import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { AssetImage } from "@/app/components/AssetImage";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div className="editorial-frame p-4">
          <AssetImage
            src={product.imageSrc}
            alt={`${product.name} collection image`}
            className="min-h-[540px]"
            label="Product Study"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="showroom-panel p-8 md:mt-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">{product.category}</p>
          <h1 className="font-serif text-5xl leading-tight text-walnut md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-olive">{product.summary}</p>
          <dl className="mt-10 space-y-6 border-y border-walnut/10 py-8 text-sm leading-7">
            <div>
              <dt className="eyebrow mb-2">Material</dt>
              <dd className="text-olive">{product.material}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Handmade Note</dt>
              <dd className="text-olive">{product.handmadeNote}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Suggested Use</dt>
              <dd className="text-olive">{product.suggestedUse}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Customization Options</dt>
              <dd className="text-olive">{product.customizationOptions}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Custom Wholesale</dt>
              <dd className="text-olive">{product.customNote}</dd>
            </div>
          </dl>
          <Link className="button-dark mt-8" href="/contact">
            Request Wholesale Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
