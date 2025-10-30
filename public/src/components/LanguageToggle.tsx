import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: 'es' | 'en';
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
      <span className="font-pixel text-xs text-cyan-400">{language.toUpperCase()}</span>
    </button>
  );
}
