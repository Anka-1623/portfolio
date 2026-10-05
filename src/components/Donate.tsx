import QRCode from "qrcode";
import { PiArrowUpRight } from "react-icons/pi";
import CopyAddressButton from "./CopyAddressButton";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

const AVAX_ADDRESS = "0x8234822482182A85E88909e070171b04D652aaB0";
const CHAIN_ID = 43114;
const PAYMENT_URI = `ethereum:${AVAX_ADDRESS}@${CHAIN_ID}`;

export default async function Donate() {
  const qrSvg = await QRCode.toString(PAYMENT_URI, {
    type: "svg",
    margin: 1,
    color: { dark: "#08090b", light: "#ffffff" },
  });

  return (
    <section id="support" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="Support">
            Send AVAX on Avalanche C-Chain to fuel the next build.
          </SectionHeading>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-8 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <div
              className="h-36 w-36 shrink-0 overflow-hidden rounded-lg bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />

            <div className="min-w-0">
              <p className="text-sm text-muted">Avalanche C-Chain</p>
              <p className="mt-2 break-all font-mono text-sm text-foreground sm:text-base">
                {AVAX_ADDRESS}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CopyAddressButton address={AVAX_ADDRESS} />
                <a
                  href={PAYMENT_URI}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
                >
                  Open in wallet
                  <PiArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
