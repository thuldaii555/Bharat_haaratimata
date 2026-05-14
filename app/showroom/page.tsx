import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { products } from "@/lib/products";
import { premiumImages } from "@/lib/premiumImages";

const catalogNotes = [
  ["Material First", "100% New Zealand wool, felt density, finish, and hand-feel guide every category conversation."],
  ["Custom Palettes", "Color stories can be developed around boutique, hospitality, interior, and seasonal briefs."],
  ["Export Mindset", "Categories are structured for repeatable wholesale programs, sampling, and clear buyer planning."],
];

const showroomStories = [
  ["Rugs & Carpets", premiumImages.carpetStore, "Quiet architectural wool surfaces for residences, hotels, and interior studios."],
  ["Felt Ball Rugs", premiumImages.carpetClose, "Hand-rolled texture, graphic rhythm, and warm color planning for retail programs."],
  ["Home Decor", premiumImages.basketYarn, "Soft sculptural accents, seasonal objects, and display-friendly homeware collections."],
  ["Custom Development", premiumImages.blueYarnNeedles, "Buyer-led palettes, forms, samples, and repeatable export assortments."],
];

export default function ShowroomPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Showroom"
        title="A premium catalog of handmade Nepalese felt wool collections."
        copy="Browse image-led product families shaped for wholesale, hospitality, interiors, boutiques, bulk buy, and custom design-led programs."
      />
      <div className="showroom-panel mt-10 grid gap-7 p-5 md:grid-cols-[1.12fr_0.88fr] md:p-7">
        <AssetImage
          src={premiumImages.textileVariety}
          alt="Curated handmade felt and textile display"
          className="min-h-[460px]"
          label="Catalog Mood"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="flex flex-col justify-center p-2 md:p-4">
          <p className="eyebrow mb-4 text-gold">Buyer Notes</p>
          <p className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Felt collections shaped for calm interiors, thoughtful retail, and dependable wholesale buying.
          </p>
          <p className="mt-5 text-lg leading-8 text-olive">
            Custom palettes, dimensions, packaging direction, and repeatable
            export assortments can be discussed after buyer brief and sampling.
            Haaratimata works as a Nepal-based supplier, manufacturer, and
            exporter.
          </p>
          <div className="mt-8 grid gap-3">
            {catalogNotes.map(([title, copy]) => (
              <div className="rounded-[1rem] border border-walnut/10 bg-ivory/58 p-4" key={title}>
                <p className="small-caps text-gold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-olive">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="panel">
          <p className="small-caps text-gold">Rugs & Interiors</p>
          <p className="mt-4 text-lg leading-8 text-olive">
            Felt surfaces with quiet pattern, tactile warmth, and practical customization for homes, hotels, and design studios.
          </p>
        </div>
        <div className="panel">
          <p className="small-caps text-gold">Decor & Gifts</p>
          <p className="mt-4 text-lg leading-8 text-olive">
            Seasonal, sculptural, and everyday objects planned as cohesive retail stories instead of loose one-off items.
          </p>
        </div>
        <div className="panel">
          <p className="small-caps text-gold">Private Development</p>
          <p className="mt-4 text-lg leading-8 text-olive">
            Sampling conversations can explore proportion, color rhythm, labeling direction, and repeat order structure.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {showroomStories.map(([title, src, copy]) => (
          <div className="image-led-card group" key={title}>
            <AssetImage
              src={src}
              alt={`${title} showroom visual`}
              className="h-64 rounded-none shadow-none"
              imageClassName="saturate-[0.98] contrast-[1.02]"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="p-5">
              <h3 className="font-serif text-2xl text-walnut">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-olive">{copy}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-walnut/10 bg-walnut text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.18)]">
        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 md:p-12">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-5 text-gold">Curated Buying</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A showroom built around texture, color, and wholesale clarity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ivory/72">
              Buyers can move from finished product families into custom palette, sample, and export conversations without losing the calm material story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-0">
            <AssetImage
              src={premiumImages.carpetStore}
              alt="Premium rug display"
              className="min-h-[260px] rounded-none shadow-none"
              imageClassName="saturate-[1.02]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <AssetImage
              src={premiumImages.loomNeutral}
              alt="Felt material texture"
              className="min-h-[260px] rounded-none shadow-none"
              imageClassName="saturate-[0.98]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <AssetImage
              src={premiumImages.textileVariety}
              alt="Decor display and color direction"
              className="col-span-2 min-h-[240px] rounded-none shadow-none"
              imageClassName="saturate-[0.96]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
