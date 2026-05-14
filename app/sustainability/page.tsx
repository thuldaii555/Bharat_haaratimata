import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { premiumImages } from "@/lib/premiumImages";

const points = [
  ["100% New Zealand Wool", "Natural wool gives the felt its dense hand, soft surface, and durable material character for long-use home goods."],
  ["Handmade Process", "Water, soap, hand pressure, stitching, shaping, and finishing keep production human-scale and visibly crafted."],
  ["Biodegradable Felt", "Wool felt supports a more thoughtful material story than synthetic, disposable alternatives."],
  ["Fair Trade Focused Approach", "The business direction centers respectful work, transparent buyer conversations, and artisan value without overstating certification claims."],
  ["Women Artisan Network", "More than 300 women artisans from rural Nepal are central to the making process and production story."],
];

const materialStory = [
  ["Wool", premiumImages.whiteWoolFlowers, "Dense felt texture with natural warmth and a soft, tactile surface."],
  ["Biodegradable Felt", premiumImages.whiteCarpet, "Natural fiber surfaces support a calmer, longer-use material story than disposable synthetic alternatives."],
  ["Collection Planning", premiumImages.textileVariety, "Thoughtful product assortments help buyers plan with purpose, restraint, and clearer seasonal intent."],
];

const principles = [
  ["Natural Material", premiumImages.loomWarm, "Wool felt brings warmth, density, and biodegradability into product categories designed for longer use."],
  ["Human-Scale Making", premiumImages.loomTexture, "Handmade production preserves small variations, close finishing, and the evidence of skilled work."],
  ["Responsible Buying", premiumImages.pastelYarn, "Wholesale programs can support better planning, reduced waste, and clearer product intent."],
];

export default function SustainabilityPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Sustainability"
        title="A calm material story rooted in wool, handwork, and artisan value."
        copy="The brand's sustainability position begins with 100% New Zealand wool, hand production in Nepal, biodegradable felt, and respectful artisan relationships."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.whiteWoolFlowers}
            alt="Dense natural wool felt texture"
            className="min-h-[440px]"
            label="Natural Wool Felt"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-4 text-gold">Material Integrity</p>
          <p className="font-serif text-4xl leading-tight text-walnut">
            New Zealand wool, hand pressure, and production choices that keep
            craft value visible.
          </p>
          <p className="mt-6 text-lg leading-8 text-olive">
            This page avoids unverified certification claims. The focus is the
            practical sustainability story buyers can understand: natural wool,
            biodegradable felt, handmade production, and long-term artisan
            relationships.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {materialStory.map(([title, src, copy]) => (
          <div className="image-led-card" key={title}>
            <AssetImage
              src={src}
              alt={`${title} sustainability image`}
              className="h-72 rounded-none shadow-none"
              label={title}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p className="p-6 leading-7 text-olive">{copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 overflow-hidden rounded-[1.65rem] border border-walnut/10 bg-walnut text-ivory shadow-[0_30px_84px_rgba(58,42,32,0.16)]">
        <div className="grid gap-0 md:grid-cols-3">
          {principles.map(([title, src, copy]) => (
            <div className="border-b border-ivory/10 md:border-b-0 md:border-r md:last:border-r-0" key={title}>
              <AssetImage
                src={src}
                alt={`${title} sustainability principle`}
                className="h-64 rounded-none shadow-none"
                imageClassName="opacity-[0.86] saturate-[0.95]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/72">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map(([title, point]) => (
          <div className="panel min-h-56" key={title}>
            <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
            <h3 className="font-serif text-3xl text-walnut">{title}</h3>
            <p className="mt-4 text-lg leading-8 text-olive">{point}</p>
          </div>
        ))}
      </div>
      <div className="luxury-band mt-10 grid gap-8 rounded-[2rem] border border-walnut/10 p-6 md:grid-cols-[1fr_0.9fr] md:p-8">
        <div className="p-2 md:p-4">
          <p className="eyebrow mb-4">Impact</p>
          <p className="max-w-4xl text-2xl leading-10 text-walnut">
            Hand felt production in Nepal keeps the human rhythm of craft
            visible while giving buyers a biodegradable material story that
            feels credible, warm, and durable.
          </p>
        </div>
        <AssetImage
          src={premiumImages.carpetClose}
          alt="Premium rug display connected to handmade felt production"
          className="min-h-[320px]"
          label="Lower-Impact Material Story"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
