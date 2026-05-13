import { SectionHeader } from "../components/SectionHeader";
import { AssetImage } from "../components/AssetImage";

const frames = [
  ["Rug texture", "/gallery/rug-texture.jpg"],
  ["Artisan workshop", "/gallery/artisan-workshop.jpg"],
  ["Felt texture", "/gallery/felt-texture.jpg"],
  ["Artisan community", "/gallery/artisan-community.jpg"],
  ["Textile display", "/gallery/textile-display.jpg"],
  ["Color and material mood", "/showroom/custom-designs.jpg"],
];

export default function GalleryPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Gallery"
        title="An editorial mood board for material, making, and collection."
        copy="A visual direction for workshop process, wool texture, lifestyle settings, and finished export collections."
      />
      <div className="mt-12 grid auto-rows-[16rem] gap-5 md:grid-cols-4">
        {frames.map(([frame, src], index) => (
          <AssetImage
            src={src}
            alt={`${frame} representative temporary showroom visual`}
            className={`shadow-[0_24px_60px_rgba(58,42,32,0.1)] ${
              index === 0 || index === 3
                ? "md:col-span-2 md:row-span-2"
                : index === 2
                  ? "md:row-span-2"
                  : ""
            }`}
            key={frame}
            label={`${String(index + 1).padStart(2, "0")} / ${frame}`}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ))}
      </div>
    </section>
  );
}
