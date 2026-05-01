import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { TechStack } from "./components/TechStack";
import { GitHubHeatmap } from "./components/GitHubHeatmap";
import { PhotoGallery } from "./components/PhotoGallery";
import { VerificationMarquee } from "./components/VerificationMarquee";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials /> 
      <Projects />
      <Timeline />
      <TechStack />
      <GitHubHeatmap />
      <PhotoGallery />
      <VerificationMarquee />
      <Contact />
      <Footer />
    </div>
  );
}