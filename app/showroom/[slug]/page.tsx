import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProductsByCategory,
  products,
} from "@/lib/products";
import type { Availability } from "@/lib/products";

const availabilityClass: Record<Availability, string> = {
  "In Stock": "border-emerald-200/80 bg-emerald-50/92 text-emerald-900",
  "Made to Order": "border-gold/55 bg-gold/88 text-walnut",
  "Out of Stock": "border-walnut/12 bg-ivory/88 text-olive",
  Unavailable: "border-walnut/10 bg-stone-200/80 text-olive/78",
};

function getProductStatusMessage(product: {
  availability: Availability;
  quoteOnly?: boolean;
}) {
  if (product.quoteOnly) {
    return "Pricing is prepared after reviewing quantity, size, color, and trade requirements.";
  }

  if (product.availability === "Out of Stock") {
    return "This item is currently out of stock. Contact us for restock timing or custom alternatives.";
  }

  if (product.availability === "Unavailable") {
    return "This item is currently unavailable. Contact us to discuss alternatives.";
  }

  if (product.availability === "Made to Order") {
    return "Made to order. Lead time and final pricing may vary by size, color, and quantity.";
  }

  return "Available for catalog discussion, trade pricing, and wholesale planning.";
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const galleryImages =
    product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const priceLabel = product.quoteOnly ? "Ask for Quote" : product.retailPrice;
  const statusMessage = getProductStatusMessage(product);

  return (
    <>
      <section className="section pb-8">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="editorial-frame p-4">
            <div className="relative min-h-[540px] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_22%_18%,rgba(255,252,245,0.72),transparent_9rem),radial-gradient(circle_at_78%_22%,rgba(184,145,75,0.24),transparent_11rem),linear-gradient(135deg,#e8dfd1,#d9d5cc_42%,#c8b89d_74%,#a98263)]">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} product image`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center saturate-[0.96] contrast-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                  <span className="max-w-48 rounded-full border border-ivory/50 bg-ivory/72 px-5 py-3 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
                    Product image coming soon
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,42,32,0.02),rgba(58,42,32,0.22)),linear-gradient(90deg,rgba(255,252,245,0.1),transparent_48%)]" />
            </div>
          </div>

          <div className="showroom-panel p-8 md:mt-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow text-gold">{product.categoryName}</p>
              <span className={`rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] shadow-sm ${availabilityClass[product.availability]}`}>
                {product.availability}
              </span>
            </div>
            <h1 className="mt-5 font-serif text-5xl leading-tight text-walnut md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-olive">
              {product.shortDescription}
            </p>

            <div className="mt-8 grid gap-4 rounded-[1.25rem] border border-walnut/10 bg-ivory/64 p-5 sm:grid-cols-2">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                  Price
                </p>
                <p className={`mt-2 font-serif leading-tight text-walnut ${product.quoteOnly ? "text-2xl" : "text-3xl"}`}>
                  {priceLabel}
                </p>
              </div>
              {product.bulkPrice ? (
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                    Trade
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-tight text-walnut">
                    {product.bulkPrice}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-5 rounded-[1.15rem] border border-walnut/10 bg-ivory/70 p-5 text-sm leading-6 text-olive">
              {statusMessage}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-dark flex-1 text-center" href="/contact">
                Ask for Quote
              </Link>
              <Link
                className="button-light flex-1 text-center"
                href={`/showroom/category/${product.categorySlug}`}
              >
                Back to Category
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="showroom-panel p-8 md:p-10">
            <p className="eyebrow mb-5 text-gold">Product Specs</p>
            <dl className="grid gap-6 text-sm leading-7">
              {[
                ["Material", product.material],
                ["Sizes", product.sizes.join(", ")],
                ["Weight", product.weight],
                ["Colors", product.colors.join(", ")],
                ["MOQ", product.moq],
                ["Lead Time", product.leadTime],
                ["Availability", product.availability],
                ["Category", product.categoryName],
              ]
                .filter(([, value]) => Boolean(value))
                .map(([label, value]) => (
                  <div className="border-b border-walnut/10 pb-5 last:border-b-0 last:pb-0" key={label}>
                    <dt className="eyebrow mb-2">{label}</dt>
                    <dd className="text-olive">{value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          <div className="grid gap-8">
            <div className="panel p-8 md:p-10">
              <p className="eyebrow mb-5 text-gold">Description</p>
              <p className="text-2xl leading-10 text-walnut">
                {product.description}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.8rem] border border-walnut/10 bg-walnut p-8 text-ivory shadow-[0_30px_84px_rgba(58,42,32,0.16)] md:p-10">
              <div className="gold-rule mb-8" />
              <p className="eyebrow mb-5 text-gold">Wholesale Note</p>
              <p className="max-w-4xl text-xl leading-9 text-ivory/76">
                For trade buyers, this item can be discussed for colorways,
                sizing, sampling, MOQ, and repeatable production planning.
              </p>
              <Link className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 bg-gold px-6 text-sm uppercase tracking-[0.16em] text-walnut transition-colors hover:bg-ivory" href="/wholesale">
                Discuss Trade Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-gold">Product Gallery</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Material and form studies.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div className="editorial-frame p-3" key={`${image}-${index}`}>
              <div className="relative min-h-[280px] overflow-hidden rounded-[1rem]">
                <Image
                  src={image}
                  alt={`${product.name} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center saturate-[0.96] contrast-[1.03]"
                />
              </div>
            </div>
          ))}
          {product.gallery && product.gallery.length > 0 ? null : (
            <div className="showroom-panel flex min-h-[280px] items-center justify-center p-8 text-center">
              <p className="max-w-xs text-sm uppercase tracking-[0.16em] text-olive">
                Additional product images can be added later from admin.
              </p>
            </div>
          )}
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="section pt-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4 text-gold">Related Products</p>
              <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
                More from {product.categoryName}
              </h2>
            </div>
            <Link className="button-light" href={`/showroom/category/${product.categorySlug}`}>
              View Category
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((related) => (
              <Link
                className="image-led-card group flex min-h-full flex-col transition-transform hover:-translate-y-1"
                href={`/showroom/${related.slug}`}
                key={related.id}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={`${related.name} related product image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="premium-image-hover object-cover object-center saturate-[0.94] contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(58,42,32,0.5))]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="small-caps text-gold">{related.categoryName}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-walnut">
                    {related.name}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-olive">
                    {related.shortDescription}
                  </p>
                  <span className="catalog-cta mt-6">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
