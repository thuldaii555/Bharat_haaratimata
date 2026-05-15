import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ categorySlug: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);
  const productCount = categoryProducts.length;

  return (
    <>
      <section className="section pb-8">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="eyebrow mb-4 text-gold">Showroom Category</p>
            <h1 className="font-serif text-5xl leading-tight text-walnut md:text-7xl">
              {category.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-olive">
              {category.description}
            </p>
            <div className="mt-8 inline-flex rounded-full border border-walnut/10 bg-ivory/74 px-5 py-3 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm">
              {productCount} active {productCount === 1 ? "product" : "products"}
            </div>
          </div>
          <div className="editorial-frame p-4">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_22%_18%,rgba(255,252,245,0.72),transparent_9rem),radial-gradient(circle_at_78%_22%,rgba(184,145,75,0.24),transparent_11rem),linear-gradient(135deg,#e8dfd1,#d9d5cc_42%,#c8b89d_74%,#a98263)]">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={`${category.name} category image`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center saturate-[0.96] contrast-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                  <span className="max-w-52 rounded-full border border-ivory/50 bg-ivory/72 px-5 py-3 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
                    Category image coming soon
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,42,32,0.02),rgba(58,42,32,0.24)),linear-gradient(90deg,rgba(255,252,245,0.1),transparent_48%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-6">
        {categoryProducts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product) => {
              const sizesSummary =
                product.sizes.length > 2
                  ? `${product.sizes.slice(0, 2).join(", ")} +${product.sizes.length - 2}`
                  : product.sizes.join(", ");
              const limitedAvailability =
                product.availability === "Out of Stock" || product.availability === "Unavailable";

              return (
                <article
                  className="image-led-card group flex min-h-full flex-col transition-transform hover:-translate-y-1"
                  key={product.id}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} product image`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="premium-image-hover object-cover object-center saturate-[0.94] contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(58,42,32,0.58))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-ivory/35 bg-walnut/56 px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-ivory backdrop-blur">
                      {product.availability}
                    </div>
                    {limitedAvailability ? (
                      <div className="absolute bottom-5 left-5 rounded-full border border-gold/55 bg-ivory/86 px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
                        Check availability
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="small-caps text-gold">{product.categoryName}</p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-walnut">
                      {product.name}
                    </h2>
                    <p className="mt-4 flex-1 leading-7 text-olive">
                      {product.shortDescription}
                    </p>
                    <dl className="mt-6 grid gap-4 border-y border-walnut/10 py-5 text-sm leading-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                          Material
                        </dt>
                        <dd className="mt-1 text-olive">{product.material}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                          Sizes
                        </dt>
                        <dd className="mt-1 text-olive">{sizesSummary}</dd>
                      </div>
                      {product.weight ? (
                        <div>
                          <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                            Weight
                          </dt>
                          <dd className="mt-1 text-olive">{product.weight}</dd>
                        </div>
                      ) : null}
                      <div>
                        <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                          Retail
                        </dt>
                        <dd className="mt-1 text-olive">{product.retailPrice}</dd>
                      </div>
                      {product.bulkPrice ? (
                        <div>
                          <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                            Trade
                          </dt>
                          <dd className="mt-1 text-olive">{product.bulkPrice}</dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link className="button-dark flex-1 text-center" href={`/showroom/${product.slug}`}>
                        View Details
                      </Link>
                      <Link className="button-light flex-1 text-center" href="/contact">
                        Ask for Quote
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="showroom-panel mx-auto max-w-3xl p-8 text-center md:p-10">
            <p className="eyebrow mb-4 text-gold">Coming Soon</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut">
              Products for this category are being prepared.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link className="button-dark min-w-44" href="/showroom">
                Return to Showroom
              </Link>
              <Link className="button-light min-w-44" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
