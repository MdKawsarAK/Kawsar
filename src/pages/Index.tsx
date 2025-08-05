import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaterBubbles from "@/components/WaterBubbles";
import CursorWaves from "@/components/CursorWaves";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <WaterBubbles />
      <CursorWaves />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Technologies />
      <Resume />
      <Portfolio />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;