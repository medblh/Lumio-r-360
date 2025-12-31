import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Brand Column */}
          <div className="max-w-md">
            {/*<h2 className="font-display text-3xl md:text-4xl mb-4">
              lumio'r <span className="text-primary">360</span>
            </h2>*/}
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Lumio'r 360" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
            <br />
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-xs mx-auto leading-relaxed">
              A New Standard in Skincare Is Almost Here.
              loved worldwide.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center">
              <a 
                href="#" 
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-full" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-full" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-full" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border w-full">
            <p className="font-body text-xs text-muted-foreground">
              © 2026 Lumio'r 360. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;