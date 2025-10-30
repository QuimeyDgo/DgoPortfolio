import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const t = translations[language];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.contact.items.email,
      value: "dagostino.quimey@gmail.com",
      href: "mailto:dagostino.quimey@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.contact.items.location,
      value: t.contact.items.locationValue,
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/QuimeyDgo" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "www.linkedin.com/in/quimey-dagos" },
  
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#131722]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-pixel">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#0a0e1a] p-8 rounded-2xl border border-cyan-500/10">
              <h3 className="mb-6 text-cyan-400 font-pixel text-sm">{t.contact.info}</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-cyan-500/5 transition-colors group border border-transparent hover:border-cyan-500/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0e1a] p-8 rounded-2xl border border-cyan-500/10">
              <h3 className="mb-6 text-cyan-400 font-pixel text-sm">{t.contact.social}</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center text-black hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-[#0a0e1a] p-8 rounded-2xl border border-cyan-500/10 space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-cyan-400">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#131722] border border-cyan-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-300 placeholder-gray-500"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-cyan-400">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#131722] border border-cyan-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-300 placeholder-gray-500"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-cyan-400">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#131722] border border-cyan-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-gray-300 placeholder-gray-500"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                {t.contact.form.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
