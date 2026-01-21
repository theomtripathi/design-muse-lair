import clipsiLogo from "@/assets/clipsi-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-primary/20 relative">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Footer Content */}
        <div className="pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={clipsiLogo} alt="Clipsi" className="h-8 w-8" />
                <span className="text-xl font-bold">Clipsi</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                End to End podcast production. Turn conversations into dealflow and brand equity.
              </p>
              <a 
                href="mailto:om@clipsi.co" 
                className="text-primary hover:underline"
              >
                om@clipsi.co
              </a>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                    Works
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("audiences")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                    About
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Clipsi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
