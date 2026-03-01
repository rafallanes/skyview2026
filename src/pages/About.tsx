import Navigation from "@/components/Navigation";
import AboutSection from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
