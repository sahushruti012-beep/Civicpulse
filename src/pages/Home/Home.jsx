import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Stats from "../../components/Stats/Stats";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <WhyChoose />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;