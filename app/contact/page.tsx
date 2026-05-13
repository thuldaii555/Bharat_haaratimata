import { SectionHeader } from "../components/SectionHeader";

const offices = [
  {
    label: "Nepal HQ",
    lines: [
      "Nagarjun, Ward 09, Durganagar Colony",
      "Kathmandu, Nepal",
      "Phone: +977 9851084819",
      "Email: haaratimata@mos.com.np",
    ],
  },
  {
    label: "United States Office",
    lines: [
      "GRLLC Group LLC",
      "3615 Olive Street, Saint Louis, Missouri 63108",
      "Phone: +1 562 716 5131",
      "Email: info@grllcgroup.com",
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Start a wholesale conversation."
        copy="Share your category interest, target market, and expected volume. The team can respond with suitable ranges, sampling direction, and export next steps."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offices.map((office) => (
          <div className="panel p-8" key={office.label}>
            <p className="eyebrow mb-5 text-gold">{office.label}</p>
            <div className="space-y-2 text-lg leading-8 text-olive">
              {office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="luxury-band mt-6 rounded-[2rem] border border-walnut/10 p-8 shadow-sm">
        <p className="text-sm leading-7 text-olive">
          Contact form placeholder. A production form service or CRM connection
          can be added later without changing the showroom content structure.
        </p>
      </div>
    </section>
  );
}
