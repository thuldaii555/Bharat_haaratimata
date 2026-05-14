import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";
import { premiumImages } from "@/lib/premiumImages";

const values = [
  ["Heritage", "Established in 1999 under the Nepal Government."],
  ["Artisans", "300+ women artisans from rural Nepal remain central to production."],
  ["Export", "A supplier, manufacturer, and exporter for wholesale felt wool buyers."],
];

export default function AboutPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="About"
        title="Haaratimata Handicrafts, handmade in Nepal since 1999."
        copy="The company supplies, manufactures, and exports felt wool products for buyers who value craft, consistency, Fair Trade focus, and responsible sourcing."
      />
      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
        <div className="relative">
          <div className="editorial-frame p-4">
            <AssetImage
              src={premiumImages.loomWarm}
              alt="Colorful handmade rug and textile display connected to Nepalese craft"
              className="min-h-[520px]"
              label="Nepal Craft Heritage"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-8 left-6 max-w-xs rounded-[1.5rem] border border-walnut/10 bg-ivory/86 p-5 shadow-[0_24px_60px_rgba(58,42,32,0.16)]">
            <p className="small-caps text-gold">Founded 1999</p>
            <p className="mt-2 text-sm leading-6 text-olive">
              A registered Nepalese craft company shaped for modern wholesale
              and export partnerships.
            </p>
          </div>
        </div>
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Heritage Story</p>
          <div className="space-y-6 text-lg leading-8 text-olive">
            <p>
              Founded in 1999 under the Nepal Government, Haaratimata
              Handicrafts works in wool felt, shaping rugs, homeware, toys, pet
              accessories, and custom export collections by hand.
            </p>
            <p>
              The brand connects Nepalese material knowledge with 100% New
              Zealand wool, eco-friendly biodegradable products, and a
              restrained modern eye for wholesale buyers, interior designers,
              boutiques, and ethical import programs.
            </p>
            <p>
              Production is human-scale, respectful, and collaborative, with
              more than 300 women artisans from rural Nepal central to the
              making process.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {values.map(([title, copy]) => (
          <div className="panel min-h-48" key={title}>
            <div className="mb-8 h-px bg-gradient-to-r from-gold to-transparent" />
            <p className="font-serif text-3xl text-walnut">{title}</p>
            <p className="mt-4 text-sm leading-6 text-olive">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
