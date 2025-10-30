export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! 👋",
      iam: "Soy",
      name: "Quimey Dgo",
      role: "Desarrollador de software",
      viewProjects: "Ver Proyectos",
      contactMe: "Contactar",
    },
    about: {
      title: "Sobre Mí",
      paragraph1:
      "Hola, me llamo Quimey Dagostino y soy un desarrollador de software  graduado en diciembre de 2024 (UTN Mar del Plata), con una gran motivación por seguir aprendiendo y creciendo dentro del mundo de la tecnología. Aunque mi experiencia profesional es reciente, ya comencé mi camino como freelance, lo que me permitió enfrentar desafíos reales, trabajar con clientes y aplicar mis conocimientos en proyectos concretos.",
      paragraph2:

        " Actualmente, me desempeño como ayudante de cátedra en la UTN, lo que me brinda la oportunidad de profundizar mis saberes técnicos y, al mismo tiempo, compartirlos con otros. Esta experiencia me ha insentivado a parcticar la comunicación clara y la mejora continua.",
      paragraph3:
        "Soy una persona curiosa, proactiva y con un fuerte deseo de aprender. Me entusiasma la posibilidad de formar parte de proyectos donde pueda aportar mis habilidades, adquirir nuevas experiencias y seguir desarrollándome como profesional en un entorno que valore la innovación y el aprendizaje constante.",
      skills: {
        development: {
          title: "Desarrollo",
          description: "Creo aplicaciones web modernas usando Angular, TypeScript, Node.js y más.",
        },
        design: {
          title: "Diseño",
          description: "Diseño interfaces intuitivas y creativas con enfoque en la experiencia del usuario.",
        },
        innovation: {
          title: "Innovación",
          description: "Siempre buscando nuevas tecnologías y soluciones creativas para cada proyecto.",
        },
      },
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis trabajos personales",
      items: [
        {
          title: "OrganizerSync ",
          description: "Sistema de gestion especializado en conciertos con enfoque a la parte administrativa del mismo . ",
        },
        {
          title: "SportHouseGymClub",
          description: "Plataforma enfocada al entrenamiento personalizado en linea, con subscripiciones y pagos online.",
        },
        {
        title: "CotizadorCM",
          description: "Aplicacion local que cotiza distintos tipos de cortinas Rollers , con generacion de presupuestos y calculo de materiales",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo día a día",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas"
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      info: "Información de Contacto",
      social: "Redes Sociales",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar Mensaje",
      },
      items: {
        email: "Email",
        location: "Ubicación",
        locationValue: "Mar del Plata , Argentina",
      },
    },
    footer: {
      madeWith: "Hecho por",
      by: "Quimey Dgo",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello! 👋",
      iam: "I'm",
      name: "Quimey Dgo",
      role: "Software Developer",
      viewProjects: "View Projects",
      contactMe: "Contact",
    },
    about: {
      title: "About Me",
      paragraph1:
        "Hi, my name is Quimey Dagostino and I am a recently graduated software developer (December 2024), highly motivated to keep learning and growing in the tech world. Although my professional experience is recent, I’ve already started working as a freelancer, which allowed me to face real challenges, work with clients, and apply my knowledge to concrete projects.",
      paragraph2:
        "I’m currently working as a teaching assistant at UTN, which gives me the chance to deepen my technical knowledge while sharing it with others. This experience has encouraged me to practice clear communication and continuous improvement.",
      paragraph3:
        "I’m a curious and proactive person with a strong desire to learn. I’m excited about the possibility of joining projects where I can contribute my skills, gain new experiences, and continue growing as a professional in an environment that values innovation and constant learning.",
      skills: {
        development: {
          title: "Development",
          description: "I build modern web applications using Angular, TypeScript, Node.js and more.",
        },
        design: {
          title: "Design",
          description: "I design intuitive and creative interfaces with a focus on user experience.",
        },
        innovation: {
          title: "Innovation",
          description: "Always looking for new technologies and creative solutions for each project.",
        },
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my personal work",
      items: [
        {
          title: "OrganizerSync",
          description: "Management system specialized in concerts, focused on the administrative side.",
        },
        {
          title: "SportHouseGymClub",
          description: "Platform focused on online personal training, with subscriptions and online payments.",
        },
        {
          title: "CotizadorCM",
          description: "Local application that quotes different types of roller blinds, generating estimates and calculating materials.",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with every day",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      info: "Contact Information",
      social: "Social Media",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
      },
      items: {
        email: "Email",
        location: "Location",
        locationValue: "Mar del Plata, Argentina",
      },
    },
    footer: {
      madeWith: "Made by",
      by: "Quimey Dgo",
      rights: "All rights reserved",
    },
  },
};

export type Language = keyof typeof translations;
