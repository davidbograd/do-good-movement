import Image from "next/image";
import { LetterBlock } from "@/components/letter-block";
import { MetricCard } from "@/components/metric-card";
import { PartnerCard } from "@/components/partner-card";
import { SectionHeading } from "@/components/section-heading";
import {
  charityPartners,
  farewellLetter,
  impactMetrics,
} from "@/data/content";

export default function Home() {
  const hasMetrics = impactMetrics.length > 0;
  const hasPartners = charityPartners.length > 0;

  return (
    <main className="relative isolate overflow-hidden px-4 pt-12 pb-24 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo-dgm.svg"
            alt="Do Good Movement"
            width={200}
            height={63}
            className="h-auto w-[200px]"
            priority
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-color-accent">
          Do Good Movement
        </p>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-6xl">
          Closing Do Good Movement, honoring the impact.
        </h1>
        <p className="mt-6 text-lg text-slate-600 md:text-xl">
          After years of collective giving, we are carefully winding down our
          operations. Thank you for believing that transparent, people-first
          philanthropy matters.
        </p>
      </div>

      {hasMetrics ? (
        <section className="mx-auto mt-24 max-w-6xl rounded-[32px] bg-[#fdf1e3] px-6 py-12 text-slate-900 shadow-[0_45px_120px_rgba(5,8,30,0.2)] sm:px-10 md:py-16">
          <SectionHeading
            title="Lifetime impact"
            description="We track the impact of all charity donations that have gone through Do Good Movement."
            align="center"
            tone="light"
          />
          <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-slate-900 md:text-7xl">
                300,000
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-700">
                DKK donated
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-slate-900 md:text-7xl">
                20,000
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-700">
                people helped
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {impactMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </section>
      ) : null}

      {hasPartners ? (
        <section className="mx-auto mt-24 max-w-6xl">
          <SectionHeading
            eyebrow="Partners"
            title="Charities continuing the work"
            align="center"
            tone="light"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {charityPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-24 max-w-4xl">
        <SectionHeading
          eyebrow="A letter from the team"
          title="With gratitude and care"
          align="center"
          tone="light"
        />
        <div className="mt-10">
          <LetterBlock letter={farewellLetter} />
        </div>
      </section>

      <footer className="mx-auto mt-24 flex max-w-4xl flex-col gap-2 border-t border-slate-900/10 pt-8 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Do Good Movement. All rights reserved.</p>
      </footer>
    </main>
  );
}
