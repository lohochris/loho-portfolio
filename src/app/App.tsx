import { BackgroundOrbs } from "./components/BackgroundOrbs";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { PhotoGallery } from "./components/PhotoGallery";
import { VerificationMarquee } from "./components/VerificationMarquee";
import { TechStack } from "./components/TechStack";
import { GitHubHeatmap } from "./components/GitHubHeatmap";
import 'katex/dist/katex.min.css';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundOrbs /> 
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />           {/* Blog section - matches navbar "Blog" */}
        <Research />       {/* Research section - matches navbar "Research" */}
        <TechStack />
        <GitHubHeatmap />
        <PhotoGallery />
        <VerificationMarquee />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}