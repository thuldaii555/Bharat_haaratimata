import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { products } from "@/lib/products";
import { getPlacedProductImage, premiumImages } from "@/lib/premiumImages";

const featuredCollections = [
  {
    label: "Interior Surfaces",
    title: "Rugs",
    description: "Soft architectural felt surfaces for homes, hospitality spaces, and curated retail programs.",
    image: premiumImages.categories.rugs,
  },
  {
    label: "Layered Textiles",
    title: "Blankets & Throws",
    description: "Layered wool textures for warm interiors, gifting assortments, and seasonal collections.",
    image: premiumImages.categories.blanketsThrows,
  },
  {
    label: "Textile Art",
    title: "Wall Hangings",
    description: "Textile-led wall pieces and felt panels designed for visual warmth and handmade character.",
    image: premiumImages.categories.wallHangings,
  },
  {
    label: "Decor Objects",
    title: "Home Decorations",
    description: "Baskets, garlands, table accents, and sculptural felt pieces for refined everyday spaces.",
    image: premiumImages.categories.homeDecorations,
  },
  {
    label: "Soft Play",
    title: "Toys",
    description: "Soft handmade felt toys and playful wool objects for boutique gifting and family spaces.",
    image: premiumImages.categories.toys,
  },
  {
    label: "Lifestyle Goods",
    title: "Personal Accessories",
    description: "Wearable wool goods, small accessories, and soft handmade pieces for lifestyle collections.",
    image: premiumImages.categories.personalAccessories,
  },
  {
    label: "Companion Comfort",
    title: "Pet Accessories",
    description: "Comfort-led felt pieces for pet-focused retail, including mats, caves, beds, and toy concepts.",
    image: premiumImages.categories.petAccessories,
  },
  {
    label: "Trade Development",
    title: "Custom Designs",
    description: "Buyer-led colors, forms, samples, and private-label product development for trade partners.",
    image: premiumImages.categories.customDesigns,
  },
];

export default function ShowroomPage() {
  return (
    <>
      <section className="section pb-8">
        <SectionHeader
          eyebrow="Showroom"
          title="Showroom"
          copy="Explore handmade felt and wool collections developed for interiors, boutiques, trade buyers, and custom wholesale programs."
        />
      </section>

      <section className="section pt-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-gold">Category Browsing</p>
            <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
              Featured Collections
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-olive">
            Browse core felt and wool categories before moving into product,
            sample, and custom development conversations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {featuredCollections.map((collection) => (
            <Link
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.35rem] border border-walnut/10 bg-ivory/76 shadow-[0_24px_70px_rgba(58,42,32,0.1)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_34px_90px_rgba(58,42,32,0.14)]"
              href="/showroom"
              key={collection.title}
            >
              <div className="relative h-[19rem] overflow-hidden bg-[radial-gradient(circle_at_22%_18%,rgba(255,252,245,0.72),transparent_9rem),radial-gradient(circle_at_78%_22%,rgba(184,145,75,0.24),transparent_11rem),linear-gradient(135deg,#e8dfd1,#d9d5cc_42%,#c8b89d_74%,#a98263)] md:h-[21rem]">
                {collection.image ? (
                  <Image
                    src={collection.image}
                    alt={`${collection.title} collection image`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="premium-image-hover object-cover object-center saturate-[0.95] contrast-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <span className="max-w-44 rounded-full border border-ivory/50 bg-ivory/72 px-5 py-3 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
                      Product image coming soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,42,32,0.02),rgba(58,42,32,0.32)),linear-gradient(90deg,rgba(255,252,245,0.12),transparent_48%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-ivory/35 bg-walnut/52 px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-ivory backdrop-blur">
                  {collection.label}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-3xl leading-tight text-walnut">
                  {collection.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-olive">
                  {collection.description}
                </p>
                <span className="catalog-cta mt-7">Explore Collection</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section pt-6">
        <SectionHeader
          eyebrow="Catalog Preview"
          title="Product families ready for wholesale planning."
          copy="Review core product directions, material positioning, availability, and quote-ready collection paths."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              className="image-led-card group flex min-h-full flex-col transition-transform hover:-translate-y-1"
              href={`/showroom/${product.slug}`}
              key={product.slug}
            >
              <div className="relative">
                <AssetImage
                  src={getPlacedProductImage(product.slug, product.imageSrc)}
                  alt={`${product.name} collection image`}
                  className="h-80 rounded-none shadow-none"
                  imageClassName="saturate-[0.94]"
                  label={product.category}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(58,42,32,0.58))]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="small-caps text-gold">{product.category}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-walnut">
                  {product.name}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-olive">
                  {product.summary}
                </p>
                <div className="mt-6 grid gap-3 border-t border-walnut/10 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                      Price
                    </p>
                    <p className="mt-1 font-serif text-xl text-walnut">
                      Ask for Quote
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-olive/70">
                      Availability
                    </p>
                    <p className="mt-1 font-serif text-xl text-walnut">
                      Made to Order
                    </p>
                  </div>
                </div>
                <span className="catalog-cta mt-6">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#3a2a20,#4b3526)] px-6 py-14 text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)] md:px-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-5 text-gold">Trade Support</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Need a custom collection or trade pricing?
            </h2>
            <p className="text-lg leading-8 text-ivory/72">
              Share your buyer brief, target assortment, palette direction, or
              volume plan and begin a focused wholesale conversation.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-gold/70 bg-gold px-6 text-sm uppercase tracking-[0.16em] text-walnut transition-colors hover:bg-ivory"
              href="/wholesale"
            >
              Request Trade Quote
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-ivory/35 px-6 text-sm uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:text-gold"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
