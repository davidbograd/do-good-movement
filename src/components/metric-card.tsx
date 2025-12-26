import Image from "next/image";
import type { ImpactMetric } from "@/data/content";

type MetricCardProps = {
  metric: ImpactMetric;
};

export const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/90 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-4 p-4">
        <div className="h-12 w-12 shrink-0">
          <Image
            src={metric.icon}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-slate-900">{metric.stat}</p>
          <p className="text-sm text-slate-600">{metric.detail}</p>
        </div>
      </div>
      <div className="mt-auto rounded-b-2xl border-t border-black/5 bg-[#fdf8f0] px-4 py-3">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
          <a
            href={metric.partner.href}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-700"
          >
            <span>with </span>
            <span className="underline">{metric.partner.name}</span>
          </a>
          <div className="shrink-0 rounded-md border border-black/10 bg-white px-2 py-1.5">
            <Image
              src={metric.partner.logo}
              alt={metric.partner.name}
              width={80}
              height={32}
              className="h-[30px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

