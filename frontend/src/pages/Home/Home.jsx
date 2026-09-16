import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Stats from "../../components/Stats/Stats";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";

export default function Home() {
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
