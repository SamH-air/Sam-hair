import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-graphite border-t border-golden-bronze/20 px-6 py-5 md:py-4 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Texte */}
        <p className="text-lavender-blush/80 text-sm leading-relaxed flex-1">
          Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.
          Aucune donnée n'est transmise à des tiers à des fins publicitaires.{" "}
          <a href="/mentions-legales#cookies" className="text-golden-bronze underline underline-offset-2 hover:text-lavender-blush transition-colors">
            En savoir plus
          </a>
        </p>

        {/* Boutons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-lavender-blush/50 text-xs hover:text-lavender-blush transition-colors underline underline-offset-2"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-golden-bronze text-coffee-bean text-sm font-semibold rounded-full hover:bg-lavender-blush transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Accepter
          </button>
          <button
            onClick={decline}
            aria-label="Fermer"
            className="text-lavender-blush/40 hover:text-lavender-blush transition-colors ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
