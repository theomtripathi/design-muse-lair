import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clipsiLogo from "@/assets/clipsi-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={clipsiLogo} alt="Clipsi" className="h-8 w-8 lg:h-10 lg:w-10" />
            <span className="text-xl lg:text-2xl font-bold text-foreground">Clipsi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </button>
            <Button
              variant="default"
              className="bg-primary text-foreground hover:bg-primary/90 glow-hover font-semibold px-6"
              onClick={() => scrollToSection("book-a-call")}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20 animate-fade-in">
            <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              How It Works
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              Pricing
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              Portfolio
            </button>
            <Button
              variant="default"
              className="w-full bg-primary text-foreground hover:bg-primary/90 font-semibold"
              onClick={() => scrollToSection("book-a-call")}
            >
              Book a Call
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
