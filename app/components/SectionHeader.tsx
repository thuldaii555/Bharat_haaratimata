type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-olive">{copy}</p> : null}
    </div>
  );
}
