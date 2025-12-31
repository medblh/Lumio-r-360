import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png";
import { useForm } from "@/context/FormContext";

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] ${
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
        <nav className="mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Left Nav - Desktop */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#EDE6DE]" />
            ) : (
              <Menu size={24} className="text-[#EDE6DE]" />
            )}
          </button>

          {/* Logo - Center */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:text-center"
          >
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Lumio'r 360" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
          </a>

          {/* Right Nav */}
          <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">
            {/* Premium "skin issues?" button */}
            <button 
              onClick={handleSkinIssuesClick}
              className="group relative font-body text-xs md:text-sm tracking-[0.2em] uppercase text-[#EDE6DE] hover:text-[#EDE6DE]/90 transition-all duration-300"
              aria-label="Skin Issues Consultation"
            >
              <span className="relative z-10">skin issues?</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EDE6DE] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Account Icon 
            <button aria-label="Account" className="hidden md:block">
              <User
                size={20}
                className="text-[#EDE6DE]/80 hover:text-[#EDE6DE] transition-colors"
              />
            </button>*/}

            {/* Cart Icon 
            <button className="relative hidden md:block" aria-label="Cart">
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
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
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
              {/* Mobile-only account and cart */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-[#2D3655]/30">
                <button 
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-[#EDE6DE] hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span className="font-body text-sm">Account</span>
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-[#EDE6DE] hover:bg-white/5 rounded-lg transition-all relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag size={18} />
                  <span className="font-body text-sm">Cart</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-body font-medium rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;