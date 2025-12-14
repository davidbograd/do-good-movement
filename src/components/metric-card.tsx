import Image from "next/image";
import type { ImpactMetric } from "@/data/content";

type MetricCardProps = {
  metric: ImpactMetric;
};

export const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/90 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
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
    </article>
  );
};

