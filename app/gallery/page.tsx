import { SectionHeader } from "../components/SectionHeader";

const frames = [
  "Rug texture",
  "Women artisans",
  "Color sampling",
  "Home decor",
  "Felt toys",
  "Export packing",
];

export default function GalleryPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Gallery"
        title="An editorial mood board for material, making, and collection."
        copy="These visual placeholders reserve space for workshop, material, lifestyle, and finished product photography."
      />
      <div className="mt-12 grid auto-rows-[15rem] gap-5 md:grid-cols-4">
        {frames.map((frame, index) => (
          <div
            className={`image-well flex items-end p-5 shadow-[0_24px_60px_rgba(58,42,32,0.1)] ${
              index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            key={frame}
          >
            <p className="relative z-10 rounded-full bg-ivory/75 px-4 py-2 text-xs uppercase tracking-[0.18em] text-walnut">
              {String(index + 1).padStart(2, "0")} / {frame}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
