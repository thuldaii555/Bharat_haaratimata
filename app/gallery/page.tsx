import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";

const frames = [
  ["Felt ball surface", "/showroom/felt-ball-rugs.jpg"],
  ["Custom design materials", "/showroom/custom-designs.jpg"],
  ["Felt texture", "/gallery/felt-texture.jpg"],
  ["Rug texture", "/gallery/rug-texture.jpg"],
  ["Textile display", "/gallery/textile-display.jpg"],
  ["Home decor mood", "/showroom/home-decor.jpg"],
  ["Custom design palette", "/showroom/custom-designs.jpg"],
  ["Natural material mood", "/gallery/rug-texture.jpg"],
  ["Felt rugs", "/showroom/felt-rugs.jpg"],
  ["Toys and accessories", "/showroom/toys-accessories.jpg"],
];

const visualNotes = [
  ["Material Detail", "Close wool surfaces, dense felt, and hand-finished texture."],
  ["Making Process", "Tools, samples, color direction, and material decisions behind a finished collection."],
  ["Collection Mood", "Finished pieces, retail display, home decor, and color direction."],
];

export default function GalleryPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Gallery"
        title="An editorial mood board for wool texture, making, and calm interiors."
        copy="A warmer visual direction for workshop process, felt detail, product mood, artisan context, and finished export collections."
      />
      <div className="showroom-panel mt-10 grid gap-7 p-5 md:grid-cols-[0.86fr_1.14fr] md:p-7">
        <AssetImage
          src="/gallery/rug-texture.jpg"
          alt="Layered wool rug texture detail"
          className="min-h-[420px]"
          label="Material Study"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="flex flex-col justify-center p-2 md:p-5">
          <p className="eyebrow mb-4 text-gold">Mood Direction</p>
          <p className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Texture, process, and calm color stories for a premium felt
            collection.
          </p>
          <p className="mt-6 text-lg leading-8 text-olive">
            The gallery is arranged like an editorial board rather than a file
            dump, mixing close material studies, workshop process, artisan
            context, and product moods.
          </p>
        </div>
      </div>
      <div className="mt-12 grid auto-rows-[14rem] gap-5 md:grid-cols-4">
        {frames.map(([frame, src], index) => (
          <AssetImage
            src={src}
            alt={`${frame} mood board image`}
            imageClassName="saturate-[0.92] contrast-[1.02]"
            className={`shadow-[0_24px_60px_rgba(58,42,32,0.1)] ${
              index === 0 || index === 4 || index === 8
                ? "md:col-span-2 md:row-span-2"
                : index === 2 || index === 7
                  ? "md:row-span-2"
                  : ""
            }`}
            key={frame}
            label={`${String(index + 1).padStart(2, "0")} / ${frame}`}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ))}
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {visualNotes.map(([title, copy]) => (
          <div className="panel" key={title}>
            <p className="small-caps text-gold">{title}</p>
            <p className="mt-4 text-lg leading-8 text-olive">{copy}</p>
          </div>
        ))}
      </div>
      <div className="luxury-band mt-12 rounded-[1.65rem] border border-walnut/10 p-7 md:p-10">
        <div className="gold-rule mb-8" />
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            The visual language should feel tactile, quiet, and ready for a premium buyer conversation.
          </p>
          <p className="text-lg leading-8 text-olive">
            This gallery mixes wool textures, felt detail, hands at work, interior mood, and product studies so buyers can understand both the material and the production atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}
