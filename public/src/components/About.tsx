import React from "react";
import { motion } from "motion/react";
import { Code2, Palette, Rocket } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language];

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: t.about.skills.development.title,
      description: t.about.skills.development.description,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t.about.skills.design.title,
      description: t.about.skills.design.description,
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t.about.skills.innovation.title,
      description: t.about.skills.innovation.description,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-pixel">{t.about.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto" />
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-lg text-gray-400">
              {t.about.paragraph1}
            </p>
            <p className="mb-4 text-lg text-gray-400">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-gray-400">
              {t.about.paragraph3}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#131722] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/10 group"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="mb-2 text-cyan-400 font-pixel text-sm">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
