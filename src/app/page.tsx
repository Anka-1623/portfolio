import About from "@/components/About";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import GithubActivity from "@/components/GithubActivity";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import SiteChrome from "@/components/SiteChrome";
import Skills from "@/components/Skills";
import Web3 from "@/components/Web3";
import { CONTAINER } from "@/lib/ui";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <main>
        <Section id="top" tone="ink">
          <Hero />
          <Marquee />
        </Section>

        <Section id="about" tone="paper" className="py-28 sm:py-44">
          <About />
        </Section>

        <Section id="web3" tone="ink">
          <Web3 />
        </Section>

        <Section id="skills" tone="paper" className="py-28 sm:py-40">
          <Skills />
        </Section>

        <Section id="projects" tone="ink" className="pt-28 sm:pt-40">
          <Projects />
        </Section>

        <Section id="activity" tone="paper" className="py-28 sm:py-40">
          <div className={`${CONTAINER} grid gap-24 lg:grid-cols-2 lg:gap-16`}>
            <GithubActivity />
            <Donate />
          </div>
        </Section>

        <Section id="contact" tone="ink" className="pt-28 sm:pt-40">
          <Contact />
          <Footer />
        </Section>
      </main>
    </>
  );
}
