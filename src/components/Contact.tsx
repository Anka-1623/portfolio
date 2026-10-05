import { PiArrowUpRight } from "react-icons/pi";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

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
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="Let's build something.">
            Email is the fastest way to reach me.
          </SectionHeading>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ul className="mt-12 divide-y divide-border border-t border-border">
            {LINKS.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-muted">{link.label}</span>
                    <span className="flex items-center gap-2 text-lg text-foreground transition-colors group-hover:text-accent">
                      {link.value}
                      <PiArrowUpRight
                        aria-hidden
                        className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
