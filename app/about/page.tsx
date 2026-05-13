import { SectionHeader } from "../components/SectionHeader";

const values = [
  ["Heritage", "Founded in 1999 with a focus on Nepalese wool felt craft."],
  ["Artisans", "Women makers remain central to the production story."],
  ["Export", "Built for buyers who need quality, continuity, and clear origin."],
];

export default function AboutPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="About"
        title="Heritage felt craft, edited for a global design audience."
        copy="Haaratimata Handicrafts has grown from local material knowledge into a premium export partner for buyers who value craft, consistency, and ethical sourcing."
      />
      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
        <div className="editorial-frame p-4">
          <div className="image-well flex min-h-[470px] items-end p-7">
            <p className="relative z-10 rounded-full bg-ivory/75 px-4 py-2 text-xs uppercase tracking-[0.18em] text-walnut">
              Kathmandu Workshop
            </p>
          </div>
        </div>
        <div>
          <div className="space-y-6 text-lg leading-8 text-olive">
            <p>
              Founded in 1999, Haaratimata works in wool felt, shaping rugs,
              homeware, toys, pet accessories, and custom export collections by
              hand.
            </p>
            <p>
              The brand connects Nepalese material knowledge with a restrained
              modern eye for wholesale buyers, interior designers, boutiques,
              and ethical import programs.
            </p>
            <p>
              Production is human-scale, respectful, and collaborative, with
              women artisans central to the making process.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map(([title, copy]) => (
              <div className="rounded-2xl border border-walnut/10 bg-ivory/62 p-5 shadow-sm" key={title}>
                <p className="font-serif text-2xl text-walnut">{title}</p>
                <p className="mt-3 text-sm leading-6 text-olive">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
