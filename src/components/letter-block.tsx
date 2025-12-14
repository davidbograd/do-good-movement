import Image from "next/image";
import type { FarewellLetter } from "@/data/content";

type LetterBlockProps = {
  letter: FarewellLetter;
};

export const LetterBlock = ({ letter }: LetterBlockProps) => {
  return (
    <div className="relative mx-auto max-w-[700px]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 rounded-[2px] bg-white/70 shadow-[0_30px_90px_rgba(3,7,18,0.3)]"
          style={{ transform: "translate(0.75rem, 0.5rem) rotate(-2deg)" }}
        />
      </div>

      <article
        className="relative overflow-hidden rounded-[2px] border border-black/5 bg-[#fffdf8] px-7 py-10 text-left text-[#1d1930] shadow-[0_35px_120px_rgba(5,8,30,0.35)] sm:px-12 sm:py-14"
        style={{ transform: "rotate(2deg)" }}
      >
        <div className="space-y-6 text-lg leading-8 text-[#1f1636]">
          <p className="font-semibold">{letter.intro}</p>
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 space-y-5 text-[#1a1333]">
          <p className="text-lg font-semibold">{letter.closing}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {letter.signers.map((signer) => (
              <div key={signer.name} className="flex items-center gap-3">
                <Image
                  src={signer.avatar}
                  alt={signer.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full border border-black/5 object-cover shadow-sm"
                  style={
                    signer.name === "David"
                      ? { objectPosition: "center bottom" }
                      : undefined
                  }
                />
                <p className="text-base font-semibold tracking-tight">
                  {signer.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

