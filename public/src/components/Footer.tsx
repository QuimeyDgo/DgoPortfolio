import React from "react";
import { Heart } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-[#0a0e1a] border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            {t.footer.madeWith} <span className="font-pixel text-xs text-cyan-400">{t.footer.by}</span> © {currentYear}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
