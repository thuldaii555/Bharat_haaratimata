import { AssetImage } from "../components/AssetImage";
import { InquiryForm } from "../components/InquiryForm";
import { premiumImages } from "@/lib/premiumImages";

const offices = [
  {
    label: "Nepal HQ",
    name: "Haaratimata Handicrafts",
    address: ["Nagarjun, Ward 09, Durganagar Colony", "Kathmandu, Nepal"],
    phone: "+977 9851084819",
    email: "haaratimata@mos.com.np",
    note: "Production, product details, export coordination, and company inquiries.",
  },
  {
    label: "United States Office",
    name: "GRLLC Group LLC",
    address: ["3615 Olive Street", "Saint Louis, Missouri 63108"],
    phone: "+1 562 716 5131",
    email: "info@grllcgroup.com",
    note: "Buyer communication, trade inquiries, U.S. coordination, and partnership discussions.",
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-center">
        <div>
          <p className="eyebrow mb-5 text-gold">Contact Us</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Start a conversation about handmade felt, trade collections, or custom development.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            Whether you are exploring showroom products, trade pricing, custom
            development, or general partnership questions, share your details
            and the Haaratimata team will review the inquiry.
          </p>
        </div>
        <div className="editorial-frame p-4">
          <AssetImage
            src={premiumImages.trade.weavingLoomDetail}
            alt="Handmade textile detail for contact and partnership inquiries"
            className="min-h-[460px]"
            imageClassName="saturate-[0.94] contrast-[1.04]"
            label="Business Inquiries"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Office Contacts</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Reach the right office for your inquiry.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {offices.map((office) => (
            <article className="showroom-panel p-8 md:p-10" key={office.label}>
              <p className="eyebrow mb-4 text-gold">{office.label}</p>
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {office.name}
              </h3>
              <div className="mt-6 space-y-2 text-lg leading-8 text-olive">
                {office.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  Phone:{" "}
                  <a className="text-walnut underline decoration-gold/50 underline-offset-4" href={`tel:${office.phone.replace(/\s+/g, "")}`}>
                    {office.phone}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="text-walnut underline decoration-gold/50 underline-offset-4" href={`mailto:${office.email}`}>
                    {office.email}
                  </a>
                </p>
              </div>
              <p className="mt-6 rounded-[1.1rem] border border-gold/25 bg-ivory/74 p-4 text-sm leading-7 text-walnut">
                {office.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-[0_32px_90px_rgba(58,42,32,0.2)]">
        <div className="grid gap-0 md:grid-cols-[0.84fr_1.16fr]">
          <div className="p-8 md:p-10">
            <div className="gold-rule mb-8" />
            <p className="eyebrow mb-4 text-gold">Inquiry Form</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Share your brief, and we will route it to the right team.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ivory/72">
              Use this form for showroom questions, trade pricing, custom
              development, sustainability questions, and partnership inquiries.
            </p>
            <p className="mt-6 rounded-[1.25rem] border border-ivory/12 bg-ivory/8 p-5 text-sm leading-7 text-ivory/78">
              For trade pricing, custom sampling, or export planning, include
              product category, approximate quantity, target market, and any
              size or color requirements in your message.
            </p>
          </div>
          <div className="bg-ivory/95 p-6 md:p-8">
            <InquiryForm source="contact" />
          </div>
        </div>
      </section>
    </section>
  );
}
