import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Audiences from "@/components/Audiences";
import Transformation from "@/components/Transformation";
import WhyClipsi from "@/components/WhyClipsi";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Problem />
      <Services />
      <Audiences />
      <Transformation />
      <WhyClipsi />
      <Portfolio />
      <FAQ />
      <BookACall />
      <Footer />
    </div>
  );
};

export default Index;
