import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#0a0e1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a0e1a] to-[#0a0e1a]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff10_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20">
            <p className="text-cyan-400">{t.hero.greeting}</p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-7xl mb-2 text-gray-300">{t.hero.iam}</span>
          <span className="block text-6xl md:text-8xl font-pixel bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            {t.hero.role}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
          >
            {t.hero.contactMe}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-cyan-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
