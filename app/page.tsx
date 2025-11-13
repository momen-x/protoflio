import AboutPage from "./(pages)/about/page";
import WorkPage from "./(pages)/work/page";
import Contact from "./_Components/Contact/Contact";
import Experience from "./_Components/Experience";
import Feedback from "./_Components/Feedback";
import HeroSection from "./_Components/Hero";
import StarsCanvas from "./_Components/Stars";
import Tech from "./_Components/Tech";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="about">
        <AboutPage />
      </div>
      <Experience />
      <Tech />
      <div id="work">
        <WorkPage />
      </div>
      <Feedback />
      <div id="contact">
        <Contact />
      </div>
      <StarsCanvas  />
    </div>
  );
}
