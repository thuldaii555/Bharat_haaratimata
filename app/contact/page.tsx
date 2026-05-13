import { SectionHeader } from "../components/SectionHeader";
import { InquiryForm } from "../components/InquiryForm";

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
        copy="Share your category interest, target market, expected volume, and custom design needs. The current form posts to the local inquiry API and is ready for later email or CRM delivery."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offices.map((office) => (
          <div className="showroom-panel p-8" key={office.label}>
            <p className="eyebrow mb-5 text-gold">{office.label}</p>
            <div className="space-y-2 text-lg leading-8 text-olive">
              {office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="showroom-panel mt-8 grid gap-6 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div>
          <p className="eyebrow mb-4 text-gold">Inquiry Form</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut">
            Tell us about your wholesale brief.
          </h2>
          <p className="mt-4 text-sm leading-7 text-olive">
            Use this form for wholesale, bulk buy, custom product development,
            export, and supplier questions.
          </p>
        </div>
        <InquiryForm source="contact" />
      </div>
    </section>
  );
}
