import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { translations, Language } from "../utils/translations";


interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language];

 
// dentro de projects, reemplaza image: "...":
const projects = [
  {
    title: t.projects.items[0].title,
    description: t.projects.items[0].description,
     image: new URL("../assets/OrganizerSyncLogo.png", import.meta.url).href,
    tags: ["Java, JavaFX, json-server, MediaPlayer"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: t.projects.items[1].title,
    description: t.projects.items[1].description,
    image: new URL("../assets/logopage.png", import.meta.url).href,
    tags: ["Angular, TS, json-server, Bootstrap, html, CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: t.projects.items[2].title,
    description: t.projects.items[2].description,
    image: new URL("../assets/logo.ico", import.meta.url).href,
    tags: ["Angular, TS, json-server, Bootstrap, html, CSS, Electron"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

  return (
    <section id="projects" className="py-20 px-6 bg-[#131722]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-pixel">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#0a0e1a] rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
                           <div className="relative overflow-hidden aspect-video bg-[#0a0e1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                    aria-label="View live"
                  >
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                    aria-label="View source"
                  >
                    <Github className="w-5 h-5 text-cyan-400" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
