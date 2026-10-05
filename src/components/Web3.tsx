import type { IconType } from "react-icons";
import { SiSolidity, SiStellar } from "react-icons/si";
import AvalancheIcon from "./AvalancheIcon";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

type Tile = {
  title: string;
  body: string;
  Icon?: IconType;
  mark?: string;
  note?: string;
  className: string;
  watermark: string;
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    title: "Stellar Ambassador",
    body: "Now an ambassador for the Stellar network.",
    Icon: SiStellar,
    note: "New",
    className: "sm:col-span-2 lg:row-span-2",
    watermark: "-bottom-16 -right-16 h-80 w-80",
    featured: true,
  },
  {
    title: "Avalanche",
    body: "Building on the C-Chain.",
    Icon: AvalancheIcon,
    className: "sm:col-span-2",
    watermark: "-bottom-12 -right-8 h-52 w-52",
  },
  {
    title: "Solidity",
    body: "Smart contracts.",
    Icon: SiSolidity,
    className: "",
    watermark: "-bottom-8 -right-8 h-36 w-36",
  },
  {
    title: "Team1 Türkiye",
    body: "Collaborator.",
    mark: "1",
    className: "",
    watermark: "",
  },
];

export default function Web3() {
  return (
    <section id="web3" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="Web3" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(11rem,auto)] lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <RevealOnScroll
              key={tile.title}
              delay={i * 0.07}
              className={tile.className}
            >
              <article
                className={`relative flex h-full min-h-[11rem] flex-col justify-between gap-10 overflow-hidden rounded-2xl border p-6 sm:p-8 ${
                  tile.featured
                    ? "border-accent/30 bg-gradient-to-br from-accent/20 via-surface to-surface"
                    : "border-border bg-surface"
                }`}
              >
                {tile.Icon && (
                  <tile.Icon
                    aria-hidden
                    className={`pointer-events-none absolute text-foreground/[0.05] ${tile.watermark}`}
                  />
                )}

                <div className="relative flex items-center justify-between">
                  {tile.Icon ? (
                    <tile.Icon aria-hidden className="h-7 w-7 text-foreground" />
                  ) : (
                    <span
                      aria-hidden
                      className="text-3xl font-semibold leading-none text-foreground"
                    >
                      {tile.mark}
                    </span>
                  )}
                  {tile.note && (
                    <span className="text-sm text-accent">{tile.note}</span>
                  )}
                </div>

                <div className="relative">
                  <h3
                    className={`font-semibold tracking-tight text-foreground ${
                      tile.featured ? "text-3xl sm:text-4xl" : "text-xl"
                    }`}
                  >
                    {tile.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{tile.body}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
