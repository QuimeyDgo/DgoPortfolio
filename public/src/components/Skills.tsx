import React from "react";
import { motion } from "motion/react";
import { Code2, Database, Wrench, BookOpen } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const t = translations[language];

  const skillCategories = [
    {
      category: t.skills.categories.languages,
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C", "Java", "JavaScript", "TypeScript"],
    },
    {
      category: t.skills.categories.frontend,
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Angular", "HTML", "CSS"],
    },
    {
      category: t.skills.categories.backend,
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "MySQL", "JSON Server"],
    },
    {
      category: t.skills.categories.tools,
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ","Docker", "Cursor", "N8N", "Mysql Workbench"],
    },
   
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-pixel">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-[#131722] border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-cyan-400 font-pixel text-sm">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-cyan-500/10 text-gray-300 rounded-lg text-sm border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
