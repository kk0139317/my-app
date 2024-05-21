import Image from "next/image";
// import Header from "@/components/Header";
// import BodySection from "@/components/BodySection";
import Hero from "@/components/Hero";
import CTASection from '@/components/CTASection';
import Testemonials from "@/components/Testemonials";
import NewsLater from "@/components/NewsLater";
import Footer from "@/components/Footer";
import OurTeam from "@/components/OurTeam";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Stats from "@/components/Stats";
import FAQs from "@/components/FAQs";
export default function Home() {
  return (
    <main >
      <Hero/>
      <Feature/>
      <Stats/>
      <OurTeam/>
      <Testemonials/>
      <CTASection/>
      <FAQs/>
      {/* <Contact/> */}
      {/* <NewsLater/> */}
      <Footer/>
    </main>
  );
}
