import Image from "next/image";
import type { CharityPartner } from "@/data/content";

type PartnerCardProps = {
  partner: CharityPartner;
};

export const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(5,8,30,0.08)]">
      <div className="flex h-16 items-center">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={200}
          height={64}
          className="h-auto max-h-16 w-auto object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{partner.name}</h3>
        <p className="mt-2 text-base text-slate-600">{partner.summary}</p>
      </div>
      <a
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-color-accent transition hover:text-color-accent-strong"
      >
        Learn more
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
};

