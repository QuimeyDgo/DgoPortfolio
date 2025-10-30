import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { translations, Language } from "../utils/translations";


interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language];

  // -- NUEVO: estado para controlar muestra del panel de detalle --
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // -- Manejo cierre modal por click fondo --
  function handleModalBackdrop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) setExpandedIndex(null);
  }

 
// dentro de projects, reemplaza image: "...":
const projects = [
  {
    title: t.projects.items[0].title,
    description: t.projects.items[0].description,
    details: `OrganizerSync es un sistema de gestión desarrollado como proyecto final de la materia orientada a Java, cuyo propósito principal es la administración integral de un concierto. El objetivo del proyecto fue diseñar una herramienta capaz de centralizar y simplificar la organización de distintos aspectos operativos de un evento musical, haciendo uso de conceptos fundamentales de programación orientada a objetos, manejo de archivos JSON y diseño modular.

Como parte complementaria —y a modo de exploración académica— se incorporó un reproductor de música que funciona como vista previa de los artistas participantes. Aunque no constituye un componente esencial del flujo principal, su inclusión permitió experimentar con la integración de recursos multimedia y la manipulación de archivos de audio dentro de una aplicación Java, aportando un valor agregado al proyecto en términos de aprendizaje y funcionalidad.

Finalmente, OrganizerSync incluye un sistema de inicio de sesión y validación de usuarios, garantizando un acceso controlado a las diferentes secciones del gestor. Toda la información se almacena y administra mediante estructuras JSON, lo que permite una gestión flexible, ligera y fácilmente exportable de los datos. En conjunto, el proyecto representa una aplicación práctica de los conocimientos adquiridos en el curso, integrando múltiples aspectos del desarrollo en Java en un entorno funcional y coherente.`,
    image: new URL("../assets/OrganizerSyncLogo.png", import.meta.url).href,
    tags: ["Java, JavaFX, json-server, MediaPlayer"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: t.projects.items[1].title,
    description: t.projects.items[1].description,
    details: `SportHouse GymClub es un proyecto web desarrollado como trabajo de tesis, diseñado para un cliente que deseaba mantener el vínculo con sus alumnos tras mudarse al exterior. La plataforma ofrece un sistema de entrenamiento virtual que permite a los usuarios continuar con sus rutinas desde casa, adaptándose a la modalidad online sin perder el contacto con su entrenador.

El sistema implementa un modelo de suscripción mensual mediante la integración con APIs de Mercado Pago, brindando acceso a un plan de entrenamiento personalizado. Cada usuario puede visualizar su rutina diaria a través de un calendario interactivo construido con Bootstrap, donde se detalla el tipo de ejercicio correspondiente a cada día. Los datos se gestionan a través de un JSON Server, lo que permite mantener la información de usuarios, rutinas y pagos de forma ligera y dinámica.

Además, SportHouse GymClub ofrece una versión gratuita con acceso limitado, que no incluye planes personalizados pero sí herramientas básicas para entrenar de manera virtual. El proyecto fue desarrollado con Angular como framework principal, priorizando la experiencia del usuario, la modularidad del código y la integración de servicios externos. En conjunto, la aplicación representa una solución práctica e innovadora para extender la actividad de un gimnasio a un entorno digital.`,
    image: new URL("../assets/logopage.png", import.meta.url).href,
    tags: ["Angular, TS, json-server, Bootstrap, html, CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: t.projects.items[2].title,
    description: t.projects.items[2].description,
    details: `CotizadorCM fue mi primera experiencia en el ámbito profesional del desarrollo freelance. Se trata de una aplicación de escritorio creada a partir de una web desarrollada en Angular, empaquetada con Electron para su ejecución local. Su objetivo principal es simplificar el proceso de cálculo de presupuestos para cortinas roller, automatizando la estimación de costos según los diferentes tipos de telas, mecanismos y medidas solicitadas por el cliente.

El sistema está diseñado para ofrecer una herramienta práctica y precisa, orientada a un uso cotidiano dentro del rubro. A través de una interfaz intuitiva, el usuario puede seleccionar las variables correspondientes al producto y obtener un presupuesto detallado de forma inmediata. Este enfoque permitió optimizar tareas manuales y reducir errores comunes en el cálculo, brindando una solución tecnológica adaptada a las necesidades reales del cliente.

Al ser una aplicación de uso personal y sin conexión a servidores externos, CotizadorCM gestiona su información mediante un archivo JSON local, garantizando un manejo rápido y autónomo de los datos. Este proyecto representó una valiosa instancia de aprendizaje, no solo por el desafío técnico de integrar Angular con Electron, sino también por el acercamiento al entorno profesional y la experiencia directa con los requerimientos de un cliente real.`,
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
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(index)}
                    className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                    aria-label="Mostrar más detalle"
                  >
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </button>
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

        {/* MODAL GLOBAL: fuera de la grilla para que cubra todo */}
        {expandedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex justify-center items-center transition-all"
            onClick={handleModalBackdrop}
            style={{animation: 'fadeinmodal .2s'}}
          >
            <div className="relative max-w-xl w-[92vw] sm:w-[70vw] md:w-[540px] mx-4 p-7 sm:p-10 rounded-3xl border-2 border-cyan-400/30 bg-[#232834] shadow-2xl flex flex-col items-center"
              role="dialog"
              aria-modal="true"
              onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-3 right-4 text-gray-300 hover:text-cyan-400 text-3xl font-bold focus:outline-none"
                aria-label="Cerrar"
                style={{lineHeight: 1}}
              >
                ×
              </button>
              <h4 className="text-2xl text-cyan-400 mb-4 font-bold w-full text-center">{projects[expandedIndex].title}</h4>
              {projects[expandedIndex].details.split('\n\n').map((parrafo, idx) => (
                <p key={idx} className="text-gray-100 mb-4 text-lg w-full text-center leading-relaxed">{parrafo}</p>
              ))}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {projects[expandedIndex].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">{tag}</span>
                ))}
              </div>
              <a href={projects[expandedIndex].githubUrl} target="_blank" rel="noopener noreferrer" className="mt-2 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors">
                Ver código fuente
              </a>
            </div>
            <style>{`
              @keyframes fadeinmodal {from { opacity: 0 } to { opacity: 1 }}
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
