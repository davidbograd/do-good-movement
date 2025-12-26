import Image from "next/image";
import { LetterBlock } from "@/components/letter-block";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import {
  farewellLetter,
  impactMetrics,
} from "@/data/content";

export default function Home() {
  const hasMetrics = impactMetrics.length > 0;

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
        <h1 className="mt-6 text-balance text-4xl font-semibold text-slate-900 md:text-6xl">
          Celebrating the impact we've made
        </h1>
        <p className="mt-6 text-lg text-slate-600 md:text-xl">
          After three years of collective giving, we've decided to close Do Good Movement. Thank you for supporting the mission - together, we created meaningful impact.
        </p>
      </div>

      {hasMetrics ? (
        <section className="mx-auto mt-12 max-w-[1400px] rounded-[32px] bg-[#fdf1e3] px-6 py-12 text-slate-900 shadow-[0_45px_120px_rgba(5,8,30,0.2)] sm:px-10 md:py-16">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-[80px] font-bold leading-none text-slate-900 sm:text-[140px] md:text-[180px]">
                14,702
              </div>
              <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xl font-medium text-slate-600 sm:flex-row md:text-2xl">
                <span>people helped through DGM</span>
                <svg
                  className="h-6 w-6 text-red-500 md:h-7 md:w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {impactMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
          <div className="mt-12 text-center text-xl font-medium text-slate-600 md:text-2xl">
            made possible by over <span className="font-semibold text-slate-900">300,000 DKK</span> in charity donations
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-24 max-w-4xl">
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
