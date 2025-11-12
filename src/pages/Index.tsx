import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <FAQ />
      <BookACall />
      <Footer />
    </div>
  );
};

export default Index;
