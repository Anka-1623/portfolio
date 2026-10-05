import { PiArrowUpRight } from "react-icons/pi";
import { CONTAINER } from "@/lib/ui";
import Magnetic from "./Magnetic";
import MaskText from "./MaskText";
import RevealOnScroll from "./RevealOnScroll";
import RollText from "./RollText";

const EMAIL = "emirhansolmaz2316@gmail.com";

const LINKS = [
  { label: "GitHub", href: "https://github.com/Anka-1623" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emirhansolmaz/" },
];

export default function Contact() {
  return (
    <div className={CONTAINER}>
      <MaskText
        text="Let's build something."
        className="text-[clamp(3rem,9.5vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em]"
      />

      <RevealOnScroll delay={0.15} className="mt-14">
        <Magnetic>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 font-serif text-[clamp(1.4rem,4.4vw,3.6rem)] italic"
          >
            <RollText>{EMAIL}</RollText>
            <PiArrowUpRight aria-hidden className="size-[0.8em] shrink-0" />
          </a>
        </Magnetic>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 font-mono text-sm">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1"
              >
                <RollText>{link.label}</RollText>
                <PiArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </div>
  );
}
