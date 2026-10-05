import About from "@/components/About";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import GithubActivity from "@/components/GithubActivity";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Web3 from "@/components/Web3";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Web3 />
        <Skills />
        <Projects />
        <GithubActivity />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
