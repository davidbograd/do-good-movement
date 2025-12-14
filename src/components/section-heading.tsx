type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) => {
  const alignmentClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left";
  const eyebrowClass =
    tone === "light" ? "text-sm font-semibold uppercase tracking-[0.2em] text-slate-600" : "text-sm font-semibold uppercase tracking-[0.2em] text-color-accent";
  const titleClass =
    tone === "light"
      ? "text-3xl font-semibold text-slate-900 md:text-4xl"
      : "text-3xl font-semibold text-white md:text-4xl";
  const descriptionClass =
    tone === "light"
      ? "text-base text-slate-700"
      : "text-base text-color-foreground-muted";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignmentClass}`}>
      {eyebrow ? (
        <p className={eyebrowClass}>{eyebrow}</p>
      ) : null}
      <h2 className={titleClass}>{title}</h2>
      {description ? (
        <p className={descriptionClass}>{description}</p>
      ) : null}
    </div>
  );
};

