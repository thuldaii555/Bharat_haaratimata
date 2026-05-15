import Link from "next/link";
import { SectionHeader } from "../components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="showroom-panel mx-auto max-w-4xl p-8 text-center md:p-12">
        <SectionHeader
          eyebrow="Who We Are"
          title="Who We Are"
          copy="Our story now lives on the homepage, alongside our craft process and material story."
        />
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button-dark min-w-44" href="/">
            Return Home
          </Link>
          <Link className="button-light min-w-44" href="/showroom">
            Visit Showroom
          </Link>
        </div>
      </div>
    </section>
  );
}
