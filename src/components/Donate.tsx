import QRCode from "qrcode";
import { PiArrowUpRight } from "react-icons/pi";
import CopyAddressButton from "./CopyAddressButton";
import MaskText from "./MaskText";
import RevealOnScroll from "./RevealOnScroll";

const AVAX_ADDRESS = "0x8234822482182A85E88909e070171b04D652aaB0";
const CHAIN_ID = 43114;
const PAYMENT_URI = `ethereum:${AVAX_ADDRESS}@${CHAIN_ID}`;

export default async function Donate() {
  const qrSvg = await QRCode.toString(PAYMENT_URI, {
    type: "svg",
    margin: 1,
    color: { dark: "#0a0a0b", light: "#ffffff" },
  });

  return (
    <div id="support">
      <MaskText
        text="Support"
        className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.035em]"
      />
      <p className="mt-4 font-serif text-lg text-muted">
        Send AVAX on Avalanche C-Chain to fuel the next build.
      </p>

      <RevealOnScroll delay={0.1}>
        <div className="mt-12 flex flex-col items-start gap-8 rounded-[28px] bg-bg-2 p-6 sm:flex-row sm:items-center sm:p-8">
          <div
            className="size-36 shrink-0 overflow-hidden rounded-lg bg-white p-2 [&>svg]:size-full"
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />

          <div className="min-w-0">
            <p className="font-mono text-sm text-muted">Avalanche C-Chain</p>
            <p className="mt-2 break-all font-mono text-sm sm:text-base">
              {AVAX_ADDRESS}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CopyAddressButton address={AVAX_ADDRESS} />
              <a
                href={PAYMENT_URI}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm transition-colors hover:border-fg active:scale-[0.98]"
              >
                Open in wallet
                <PiArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
