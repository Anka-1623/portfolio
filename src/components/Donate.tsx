import QRCode from "qrcode";
import CopyAddressButton from "./CopyAddressButton";
import RevealOnScroll from "./RevealOnScroll";

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
    <section className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        06
      </span>
      <div
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 -translate-x-1/3 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              06 — SUPPORT
            </span>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
                If something here was useful, or you just want to fuel the
                next build — AVAX on Avalanche C-Chain is the fastest way
                through.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="mt-10 flex flex-col items-start gap-8 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
                <div
                  className="h-36 w-36 shrink-0 overflow-hidden rounded-xl bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />

                <div className="min-w-0">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted-2">
                    AVALANCHE C-CHAIN
                  </p>
                  <p className="mt-2 break-all font-mono text-sm text-foreground sm:text-base">
                    {AVAX_ADDRESS}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <CopyAddressButton address={AVAX_ADDRESS} />
                    <a
                      href={PAYMENT_URI}
                      className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Open in wallet
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
