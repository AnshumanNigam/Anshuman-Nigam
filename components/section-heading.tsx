export function SectionHeading({
  index,
  title,
  description,
  invert = false,
}: {
  index: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <div className={`section-heading ${invert ? "section-heading-invert" : ""}`}>
      <span className="section-index">{index}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
