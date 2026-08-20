import RevealOnScroll from "./RevealOnScroll";

const LINKS = [
  {
    label: "Email",
    value: "emirhansolmaz2316@gmail.com",
    href: "mailto:emirhansolmaz2316@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Anka-1623",
    href: "https://github.com/Anka-1623",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emirhansolmaz",
    href: "https://www.linkedin.com/in/emirhansolmaz/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        06
      </span>
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              06 — CONTACT
            </span>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                Building something?
                <br />
                Let&apos;s talk.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Open to new projects, collaborations, and ventures. The
                fastest way to reach me is email — I read everything.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18}>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between py-5 transition-colors"
                    >
                      <span className="font-mono text-xs tracking-[0.2em] text-muted-2">
                        {link.label.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-2 text-lg text-foreground transition-colors group-hover:text-accent">
                        {link.value}
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
