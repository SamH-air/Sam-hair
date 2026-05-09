import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Services", href: "#services" },
  { name: "Tarifs",   href: "#tarifs" },
  { name: "Galerie",  href: "#galerie" },
  { name: "Contact",  href: "#contact-form" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-coffee-bean/90 backdrop-blur-md py-4 border-b border-golden-bronze/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" aria-label="S-MH'air — Accueil">
          <img src="/assets/logo.png" alt="Logo S-MH'air" class="h-12 md:h-14 w-auto" />
        </a>

        <nav className="hidden md:flex gap-8" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-golden-bronze"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 bg-coffee-bean border-b border-golden-bronze/20 p-6 flex flex-col gap-4"
          aria-label="Navigation mobile"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
