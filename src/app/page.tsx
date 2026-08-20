import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubActivity from "@/components/GithubActivity";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Process />
        <Skills />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
