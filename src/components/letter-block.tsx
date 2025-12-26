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
          className="absolute inset-0 rounded-[2px] bg-white/70 shadow-[0_30px_90px_rgba(3,7,18,0.3)] sm:[transform:translate(0.75rem,_0.5rem)_rotate(-2deg)]"
        />
      </div>

      <article
        className="relative overflow-hidden rounded-[2px] border border-black/5 bg-[#fffdf8] px-7 py-10 text-left text-[#1d1930] shadow-[0_35px_120px_rgba(5,8,30,0.35)] sm:px-12 sm:py-14 sm:[transform:rotate(2deg)]"
      >
        <div className="text-lg leading-8 text-[#1f1636]">
          <p className="mb-4 text-sm text-slate-600">December 2025</p>
          <h2 className="mb-6 text-2xl font-bold text-[#1d1930]">{letter.intro}</h2>
          <div className="space-y-6">
            {letter.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-5 text-[#1a1333]">
          <p className="text-lg font-semibold">{letter.closing}</p>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center -space-x-2">
              {letter.signers.map((signer, index) => (
                <Image
                  key={signer.name}
                  src={signer.avatar}
                  alt={signer.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md ring-1 ring-black/5"
                  style={{
                    zIndex: letter.signers.length - index,
                  }}
                />
              ))}
            </div>
            <p className="font-[family-name:var(--font-caveat)] text-2xl tracking-wide">
              Jacob Steinitz, David Bograd and Lasse Rasmussen
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

