import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png";
import { useForm } from "@/context/FormContext";
import { FaTiktok } from "react-icons/fa";
import { Instagram, Facebook } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openForm } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Ingredients", href: "#ingredients" },
  ];

  const handleSkinIssuesClick = () => {
    openForm();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-6xl ${
        isScrolled
          ? "shadow-2xl scale-105"
          : "shadow-lg"
      }`}
    >
      <div
        className={`
          rounded-2xl backdrop-blur-lg border border-[#2D3655]/30 
          ${isScrolled ? "bg-[#1F253C]/95" : "bg-[#1F253C]/90"}
          transition-all duration-300
        `}
      >
        <nav className="mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Mobile: Logo à gauche */}
          <a
            href="/"
            className="md:hidden flex items-center"
          >
            <img 
              src={logo} 
              alt="Lumio'r 360" 
              className="h-8 w-auto object-contain max-w-[140px]" 
            />
          </a>

          {/* Desktop: Navigation gauche - maintenant alignée à gauche */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm tracking-wide uppercase underline-anim text-[#EDE6DE]/80 hover:text-[#EDE6DE] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop: Logo au centre - sans flex-1 pour qu'il ne prenne pas d'espace flexible */}
          <a
            href="/"
            className="hidden md:flex items-center justify-center mx-8"
          >
            <img 
              src={logo} 
              alt="Lumio'r 360" 
              className="h-12 w-auto object-contain" 
            />
          </a>

          {/* Mobile: Bouton menu à droite */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#EDE6DE]" />
            ) : (
              <Menu size={24} className="text-[#EDE6DE]" />
            )}
          </button>

          {/* Desktop: Navigation droite */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {/* Premium "skin issues?" button */}
            <button 
              onClick={handleSkinIssuesClick}
              className="group relative font-body text-sm tracking-[0.2em] uppercase text-[#EDE6DE] hover:text-[#EDE6DE]/90 transition-all duration-300 whitespace-nowrap"
              aria-label="Skin Issues Consultation"
            >
              <span className="relative z-10">skin issues?</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EDE6DE] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Account Icon 
            <button aria-label="Account">
              <User
                size={20}
                className="text-[#EDE6DE]/80 hover:text-[#EDE6DE] transition-colors"
              />
            </button>*/}

            {/* Cart Icon 
            <button className="relative" aria-label="Cart">
              <ShoppingBag
                size={20}
                className="text-[#EDE6DE]/80 hover:text-[#EDE6DE] transition-colors"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-body font-medium rounded-full flex items-center justify-center">
                0
              </span>
            </button>*/}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden rounded-b-2xl bg-[#1F253C] border-t border-[#2D3655]/30 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-base tracking-wide py-3 px-4 text-[#EDE6DE] hover:text-[#EDE6DE]/80 hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Skin Issues Button */}
              <button 
                onClick={handleSkinIssuesClick}
                className="font-body text-base tracking-wide py-3 px-4 text-[#EDE6DE] hover:text-[#EDE6DE]/80 hover:bg-white/5 rounded-lg transition-all text-left"
              >
                skin issues?
              </button>
              
              {/* Social Media Icons - Mobile */}
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-[#2D3655]/30 text-[hsl(34.29,38.89%,92.94%)]">
                <a 
                  href="#" 
                  className="p-3 border border-[#2D3655] hover:border-[#EDE6DE] hover:bg-[#EDE6DE] hover:text-[#1F253C] transition-all duration-300 rounded-full" 
                  aria-label="Instagram"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 border border-[#2D3655] hover:border-[#EDE6DE] hover:bg-[#EDE6DE] hover:text-[#1F253C] transition-all duration-300 rounded-full" 
                  aria-label="Facebook"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 border border-[#2D3655] hover:border-[#EDE6DE] hover:bg-[#EDE6DE] hover:text-[#1F253C] transition-all duration-300 rounded-full" 
                  aria-label="TikTok"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;