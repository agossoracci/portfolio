/* ==========================================================================
   Traducción ES / EN. Diccionario plano por clave, aplicado a cualquier
   elemento con data-i18n="clave". Si el elemento tiene data-i18n-attr,
   la traducción se aplica a ese atributo en vez de al contenido.
   ========================================================================== */

(function () {
  "use strict";

  var DICT = {
    es: {
      "meta.title": "Agostina Soracci, Comunicadora Social",
      "meta.description": "Portfolio de Agostina Soracci, Comunicadora Social. Producción de contenidos, estrategia digital y comunicación corporativa entre Santiago de Chile y Buenos Aires.",
      "a11y.skip": "Saltar al contenido",
      "a11y.mainNav": "Navegación principal",
      "a11y.openMenu": "Abrir menú",

      "nav.perfil": "Perfil",
      "nav.experiencia": "Experiencia",
      "nav.proyectos": "Proyectos",
      "nav.formacion": "Formación",
      "nav.contacto": "Contacto",
      "header.downloadCV": "Descargar CV",

      "hero.tag": "Disponible para nuevos proyectos",
      "hero.title": "Encuentro la historia<br> detrás de cada idea.<br> <span class=\"text-accent\">Y la cuento.</span>",
      "hero.lede": "Soy Agostina Soracci, Comunicadora Social. Construyo contenidos y estrategias que conectan marcas, medios y audiencias, desde un piso de televisión en vivo hasta una estrategia de contenidos digital.",
      "hero.ctaProjects": "Ver proyectos",
      "hero.ctaContact": "Escríbeme",

      "signal.kicker": "Base",
      "signal.route": "Santiago de Chile <span class=\"arrow\">⇄</span> Buenos Aires, Argentina",
      "signal.note": "Con experiencia laboral en ambos países.",

      "perfil.heading": "Perfil",
      "perfil.photoAlt": "Retrato de Agostina Soracci",
      "perfil.lead": "Entiendo la comunicación como el puente entre una idea y la comunidad que la recibe.",
      "perfil.p1": "Soy Comunicadora Social, graduada de la <strong>Universidad Austral</strong> (Buenos Aires). Tengo experiencia trabajando en medios de comunicación, producción de contenido, comunicación corporativa (interna y externa), marketing digital y periodismo, tanto en Argentina como en Chile.",
      "perfil.p2": "Combino la agilidad de los medios con la visión estratégica que exigen tanto las marcas como las organizaciones. Ya sea para conectar con un equipo interno o activar una campaña digital, mi foco es el mismo: transformar conceptos complejos en relatos claros, auténticos y con impacto real.",
      "perfil.fact1label": "Idiomas",
      "perfil.fact1value": "Español nativo, inglés avanzado (C1, certificación CAE)",
      "perfil.fact2label": "Formación",
      "perfil.fact2value": "Lic. en Comunicación Social, Universidad Austral",
      "perfil.fact3label": "Base",
      "perfil.fact3value": "Santiago de Chile ⇄ Buenos Aires",

      "experiencia.heading": "Experiencia laboral",

      "exp.logscl.date": "Noviembre 2025 a la actualidad",
      "exp.logscl.place": "Santiago, Chile",
      "exp.logscl.logoAlt": "Logo de LogScl",
      "exp.logscl.role": "Asistente de Comunicaciones",
      "exp.logscl.b1": "Colaboración en la creación y en las estrategias de contenidos para la empresa.",
      "exp.logscl.b2": "Seguimiento y atención a clientes.",

      "exp.lnmas.date": "Febrero 2025 a diciembre 2025",
      "exp.lnmas.place": "Buenos Aires, Argentina",
      "exp.lnmas.logoAlt": "Logo de LN+, señal de LA NACION",
      "exp.lnmas.role": "Productora y Asistente de Gráfica",
      "exp.lnmas.b1": "Búsqueda y creación de contenido para programas de televisión en vivo, entre ellos <em>+Info a la Tarde</em>, <em>Caso Abierto</em>, <em>+Noticias Sábado</em>, <em>Especial Domingo</em> y <em>Comunidad de Negocios</em>.",
      "exp.lnmas.b2": "Elaboración de títulos y gráficos para programas en vivo.",
      "exp.lnmas.b3": "Trabajo directo con conductores como José del Río, Débora Plager y Paulino Rodrígues.",

      "exp.tastemade.date": "Mayo 2023 a octubre 2023",
      "exp.tastemade.place": "Remoto, para EE. UU. y Australia",
      "exp.tastemade.logoAlt": "Logo de Tastemade",
      "exp.tastemade.role": "Content Strategist",
      "exp.tastemade.b1": "Detección y análisis de tendencias en gastronomía, moda y belleza.",
      "exp.tastemade.b2": "Contacto y coordinación con creadores de contenido.",
      "exp.tastemade.b3": "Organización y planificación de la agenda editorial para programas de Snapchat en Estados Unidos y Australia.",
      "exp.tastemade.b4": "Gestión de planillas en Google Sheets y coordinación de contenido generado por usuarios (UGC) para seis programas.",

      "exp.austral.date": "2023 a la actualidad",
      "exp.austral.place": "Buenos Aires, Argentina",
      "exp.austral.logoAlt": "Logo del Austral Worldbuilding Lab (AWBL)",
      "exp.austral.role": "Ayudante de Cátedra y Colaboradora, Austral Worldbuilding Lab (AWBL)",
      "exp.austral.b1": "Asistencia en la materia Worldbuilding para la Innovación Social, basada en la metodología de Alex McDowell (World Building Institute), dictada en inglés (2023) y en español (2024 y 2025).",
      "exp.austral.b2": "Creación de material académico para la cátedra y asesoramiento a estudiantes.",
      "exp.austral.b3": "Colaboradora del Austral Worldbuilding Lab (AWBL) hasta la actualidad.",

      "proyectos.heading": "Proyectos y reconocimientos",
      "proyectos.intro": "Proyectos que hice por iniciativa propia, entre la escritura, la actuación y la creación de contenido.",

      "proj.sano.imgAlt": "Logo del proyecto SANO",
      "proj.sano.tag": "Reconocimiento y emprendimiento",
      "proj.sano.meta": "Finalista, Molinos Innova 2023. Programa para Emprendedores, NAVES-IAE",
      "proj.sano.desc": "Asistente virtual en WhatsApp que arma planes de alimentación saludable combinando dos APIs de OpenAI. Diseñé la arquitectura de la conversación, el UX writing y la propuesta de valor del producto.",

      "proj.epic.imgAlt": "Perfil de TikTok @agossoracci",
      "proj.epic.tag": "Proyecto personal",
      "proj.epic.meta": "Creación de contenido educativo en TikTok. +3.600 seguidores y +330.000 likes",
      "proj.epic.desc": "Proyecto personal de creación de contenido en redes sociales: una serie para acercar mitología y literatura clásica a audiencias jóvenes, comparando el musical <em>Epic: The Musical</em> con la <em>Odisea</em> de Homero. Trabajo de punta a punta: guion, edición, planificación de contenidos y gestión de comunidad.",
      "proj.epic.link1": "Ver primer video de la serie ↗",
      "proj.epic.link2": "Ver adaptación de tendencia ↗",
      "proj.epic.link3": "Ver reel de presentación ↗",
      "proj.epic.link4": "Ver más contenido en TikTok ↗",

      "proj.pluma.imgAlt": "Captura del blog Pluma y Píxeles",
      "proj.pluma.tag": "Proyecto personal",
      "proj.pluma.meta": "Escritura y experimentación narrativa",
      "proj.pluma.desc": "Espacio propio de experimentación narrativa y escritura creativa: exploración de nuevos formatos digitales, reflexiones y estructuras de storytelling.",
      "proj.pluma.link": "Visitar el blog ↗",

      "proj.teatro.imgAlt": "Elenco sobre el escenario, producción teatral",
      "proj.teatro.tag": "Producción en vivo",
      "proj.teatro.title": "Talleres de montaje",
      "proj.teatro.meta": "The Greatest Showman (2024), Hairspray (2025)",
      "proj.teatro.desc": "Producción general en los talleres de montaje de estas dos obras: coordinación de ensayos y de los aspectos técnicos y logísticos detrás de escena. Mi experiencia en producción no se limita a lo audiovisual: incluye también la puesta en vivo.",

      "proj.ultima.imgAlt": "Fotograma del cortometraje La Última Función",
      "proj.ultima.tag": "Reconocimiento, proyecto académico",
      "proj.ultima.meta": "Ganador de \"La Noche de las Estrellas\" 2022, Universidad Austral",
      "proj.ultima.desc": "Cortometraje ganador de la ceremonia anual de cine estudiantil de la Universidad Austral.",
      "proj.ultima.link": "Ver cortometraje ↗",

      "proj.tresmarias.imgAlt": "Fotograma en blanco y negro del cortometraje Las Tres Marías",
      "proj.tresmarias.tag": "Proyecto académico",
      "proj.tresmarias.meta": "Cortometraje, adaptación literaria",
      "proj.tresmarias.desc": "Adaptación audiovisual de un capítulo de <em>La casa de los espíritus</em>, de Isabel Allende.",
      "proj.tresmarias.link": "Ver cortometraje ↗",

      "formacion.heading": "Formación &amp; certificaciones",
      "formacion.eduHeading": "Educación",
      "formacion.certHeading": "Certificaciones &amp; cursos",

      "edu1.date": "2020 a 2024",
      "edu1.title": "Licenciatura en Comunicación Social",
      "edu1.sub": "Universidad Austral, Buenos Aires",
      "edu2.title": "Programa para Emprendedores, Proyecto SANO",
      "edu2.sub": "NAVES-IAE, Buenos Aires",
      "edu3.date": "2015 a 2018",
      "edu3.title": "Bachillerato bilingüe",
      "edu3.sub": "Wenlock School, Santiago de Chile",

      "cert1": "Cómo diseñar un plan para la comunicación política local, PUCV",
      "cert2": "Crea contenido irresistible, Canva Design School",
      "cert3": "LVMH Certificate, LVMH",
      "cert4": "Marketing Digital, Santander Academy / University of Chicago",
      "cert5": "Marketing de Experiencias, Universidad Austral",
      "cert6": "Fundamentos de Marketing Digital, Google",
      "cert7": "Worldbuilding, Narrative Design for Social Innovation. Universidad Austral",
      "cert8": "Seminario de Herramientas de Diseño, Universidad Austral",
      "cert9": "Cameras, Exposure and Photography. Michigan State University (Coursera)",
      "cert10": "Cómo Persuadir, Jugando con Palabras, Imágenes y Números. UAB (Coursera)",

      "habilidades.heading": "Habilidades &amp; herramientas",
      "skills.group1": "Redacción &amp; contenido",
      "skills.g1i1": "Redacción de guiones y notas periodísticas",
      "skills.g1i2": "Content Specialist",
      "skills.g1i3": "Contenido para redes sociales",
      "skills.g1i4": "UX Writing",
      "skills.g1i5": "Diseño de experiencias conversacionales (IA)",
      "skills.g1i6": "Redacción de títulos y gráficos en vivo para TV",
      "skills.group2": "Producción &amp; edición",
      "skills.g2i1": "Producción general (TV y teatro)",
      "skills.g2i2": "Edición de video (CapCut)",
      "skills.g2i3": "Photoshop (nivel básico)",
      "skills.group3": "Estrategia &amp; gestión",
      "skills.g3i1": "Gestión de equipos",
      "skills.g3i2": "Estrategias de marketing",
      "skills.g3i3": "Estrategias políticas",
      "skills.g3i4": "Marketing de experiencias",
      "skills.g3i5": "Community &amp; Influencer Manager",
      "skills.g3i6": "Oratoria y habilidad para hablar en público",
      "skills.group4": "Herramientas",
      "skills.g4i2": "Microsoft Office avanzado (Word, PowerPoint, Excel)",
      "skills.g4i3": "Desarrollo y uso de IA (OpenAI, ChatGPT, Gemini)",
      "skills.g4i4": "Google Workspace (Sheets, Docs y más)",

      "contacto.heading": "Hablemos",
      "contacto.intro": "La comunicación efectiva empieza con la escucha. Escríbeme y seguimos la conversación.",
      "contacto.email": "Email",
      "contacto.cv": "Currículum",
      "contacto.cvValue": "Descargar PDF",

      "footer.name": "Agostina Soracci, Comunicadora Social",
      "footer.signal": "Santiago de Chile ⇄ Buenos Aires"
    },

    en: {
      "meta.title": "Agostina Soracci, Communications Professional",
      "meta.description": "Portfolio of Agostina Soracci, Communications Professional. Content production, digital strategy and corporate communications between Santiago, Chile and Buenos Aires.",
      "a11y.skip": "Skip to content",
      "a11y.mainNav": "Main navigation",
      "a11y.openMenu": "Open menu",

      "nav.perfil": "Profile",
      "nav.experiencia": "Experience",
      "nav.proyectos": "Projects",
      "nav.formacion": "Education",
      "nav.contacto": "Contact",
      "header.downloadCV": "Download CV",

      "hero.tag": "Available for new projects",
      "hero.title": "I find the story<br> behind every idea.<br> <span class=\"text-accent\">And I tell it.</span>",
      "hero.lede": "I'm Agostina Soracci, a Communications professional. I build content and strategies that connect brands, media and audiences, from a live TV control room to a digital content strategy.",
      "hero.ctaProjects": "See projects",
      "hero.ctaContact": "Get in touch",

      "signal.kicker": "Based in",
      "signal.route": "Santiago, Chile <span class=\"arrow\">⇄</span> Buenos Aires, Argentina",
      "signal.note": "With work experience in both countries.",

      "perfil.heading": "Profile",
      "perfil.photoAlt": "Portrait of Agostina Soracci",
      "perfil.lead": "I see communication as the bridge between an idea and the community that receives it.",
      "perfil.p1": "I'm a Communications professional, graduated from <strong>Universidad Austral</strong> (Buenos Aires). I have experience working in media, content production, corporate communications (internal and external), digital marketing and journalism, both in Argentina and in Chile.",
      "perfil.p2": "I combine the agility of media with the strategic vision that both brands and organizations demand. Whether it's connecting with an internal team or launching a digital campaign, my focus stays the same: turning complex concepts into stories that are clear, authentic and genuinely impactful.",
      "perfil.fact1label": "Languages",
      "perfil.fact1value": "Native Spanish, advanced English (C1, CAE certified)",
      "perfil.fact2label": "Education",
      "perfil.fact2value": "BA in Social Communication, Universidad Austral",
      "perfil.fact3label": "Based in",
      "perfil.fact3value": "Santiago, Chile ⇄ Buenos Aires",

      "experiencia.heading": "Work experience",

      "exp.logscl.date": "November 2025 to present",
      "exp.logscl.place": "Santiago, Chile",
      "exp.logscl.logoAlt": "LogScl logo",
      "exp.logscl.role": "Communications Assistant",
      "exp.logscl.b1": "Collaboration on content creation and content strategy for the company.",
      "exp.logscl.b2": "Client follow-up and support.",

      "exp.lnmas.date": "February 2025 to December 2025",
      "exp.lnmas.place": "Buenos Aires, Argentina",
      "exp.lnmas.logoAlt": "LN+ logo, LA NACION's news channel",
      "exp.lnmas.role": "Producer and Graphics Assistant",
      "exp.lnmas.b1": "Research and content creation for live TV programs, including <em>+Info a la Tarde</em>, <em>Caso Abierto</em>, <em>+Noticias Sábado</em>, <em>Especial Domingo</em> and <em>Comunidad de Negocios</em>.",
      "exp.lnmas.b2": "Production of titles and graphics for live programs.",
      "exp.lnmas.b3": "Direct work with anchors such as José del Río, Débora Plager and Paulino Rodrígues.",

      "exp.tastemade.date": "May 2023 to October 2023",
      "exp.tastemade.place": "Remote, for the U.S. and Australia",
      "exp.tastemade.logoAlt": "Tastemade logo",
      "exp.tastemade.role": "Content Strategist",
      "exp.tastemade.b1": "Trend spotting and analysis in food, fashion and beauty.",
      "exp.tastemade.b2": "Outreach and coordination with content creators.",
      "exp.tastemade.b3": "Planning and organizing the editorial calendar for Snapchat shows in the United States and Australia.",
      "exp.tastemade.b4": "Managing Google Sheets and coordinating user-generated content (UGC) for six shows.",

      "exp.austral.date": "2023 to present",
      "exp.austral.place": "Buenos Aires, Argentina",
      "exp.austral.logoAlt": "Austral Worldbuilding Lab (AWBL) logo",
      "exp.austral.role": "Teaching Assistant and Collaborator, Austral Worldbuilding Lab (AWBL)",
      "exp.austral.b1": "Teaching assistant for Worldbuilding for Social Innovation, based on Alex McDowell's methodology (World Building Institute), taught in English (2023) and in Spanish (2024 and 2025).",
      "exp.austral.b2": "Creation of course material and guidance for students.",
      "exp.austral.b3": "Ongoing collaborator at the Austral Worldbuilding Lab (AWBL) to the present.",

      "proyectos.heading": "Projects & recognition",
      "proyectos.intro": "Projects I took on by my own initiative, spanning writing, acting and content creation.",

      "proj.sano.imgAlt": "SANO project logo",
      "proj.sano.tag": "Recognition and entrepreneurship",
      "proj.sano.meta": "Finalist, Molinos Innova 2023. Entrepreneurship Program, NAVES-IAE",
      "proj.sano.desc": "A WhatsApp virtual assistant that builds healthy meal plans by combining two OpenAI APIs. I designed the conversation architecture, the UX writing and the product's value proposition.",

      "proj.epic.imgAlt": "TikTok profile @agossoracci",
      "proj.epic.tag": "Personal project",
      "proj.epic.meta": "Educational content creation on TikTok. +3,600 followers and +330,000 likes",
      "proj.epic.desc": "A personal social media content project: a series bringing classical mythology and literature to younger audiences, comparing the musical <em>Epic: The Musical</em> with Homer's <em>Odyssey</em>. End-to-end work: scriptwriting, editing, content planning and community management.",
      "proj.epic.link1": "Watch the first video of the series ↗",
      "proj.epic.link2": "Watch the trend adaptation ↗",
      "proj.epic.link3": "Watch the presentation reel ↗",
      "proj.epic.link4": "See more on TikTok ↗",

      "proj.pluma.imgAlt": "Screenshot of the Pluma y Píxeles blog",
      "proj.pluma.tag": "Personal project",
      "proj.pluma.meta": "Writing and narrative experimentation",
      "proj.pluma.desc": "My own space for narrative experimentation and creative writing: exploring new digital formats, reflections and storytelling structures.",
      "proj.pluma.link": "Visit the blog ↗",

      "proj.teatro.imgAlt": "Cast on stage, theatre production",
      "proj.teatro.tag": "Live production",
      "proj.teatro.title": "Staging workshops",
      "proj.teatro.meta": "The Greatest Showman (2024), Hairspray (2025)",
      "proj.teatro.desc": "General production work on the staging workshops for these two shows: coordinating rehearsals and the technical and logistical side behind the scenes. My production experience isn't limited to audiovisual work: it also spans live stage production.",

      "proj.ultima.imgAlt": "Still from the short film La Última Función",
      "proj.ultima.tag": "Recognition, academic project",
      "proj.ultima.meta": "Winner of \"La Noche de las Estrellas\" 2022, Universidad Austral",
      "proj.ultima.desc": "Short film that won Universidad Austral's annual student film ceremony.",
      "proj.ultima.link": "Watch the short film ↗",

      "proj.tresmarias.imgAlt": "Black and white still from the short film Las Tres Marías",
      "proj.tresmarias.tag": "Academic project",
      "proj.tresmarias.meta": "Short film, literary adaptation",
      "proj.tresmarias.desc": "Audiovisual adaptation of a chapter from Isabel Allende's <em>The House of the Spirits</em>.",
      "proj.tresmarias.link": "Watch the short film ↗",

      "formacion.heading": "Education &amp; certifications",
      "formacion.eduHeading": "Education",
      "formacion.certHeading": "Certifications &amp; courses",

      "edu1.date": "2020 to 2024",
      "edu1.title": "BA in Social Communication",
      "edu1.sub": "Universidad Austral, Buenos Aires",
      "edu2.title": "Entrepreneurship Program, SANO Project",
      "edu2.sub": "NAVES-IAE, Buenos Aires",
      "edu3.date": "2015 to 2018",
      "edu3.title": "Bilingual high school diploma",
      "edu3.sub": "Wenlock School, Santiago, Chile",

      "cert1": "Designing a local political communication plan, PUCV",
      "cert2": "Creating irresistible content, Canva Design School",
      "cert3": "LVMH Certificate, LVMH",
      "cert4": "Digital Marketing, Santander Academy / University of Chicago",
      "cert5": "Experience Marketing, Universidad Austral",
      "cert6": "Fundamentals of Digital Marketing, Google",
      "cert7": "Worldbuilding, Narrative Design for Social Innovation. Universidad Austral",
      "cert8": "Design Tools Seminar, Universidad Austral",
      "cert9": "Cameras, Exposure and Photography. Michigan State University (Coursera)",
      "cert10": "How to Persuade, Playing with Words, Images and Numbers. UAB (Coursera)",

      "habilidades.heading": "Skills &amp; tools",
      "skills.group1": "Writing &amp; content",
      "skills.g1i1": "Scriptwriting and journalistic writing",
      "skills.g1i2": "Content Specialist",
      "skills.g1i3": "Social media content",
      "skills.g1i4": "UX Writing",
      "skills.g1i5": "Conversational AI experience design",
      "skills.g1i6": "Writing live titles and graphics for TV",
      "skills.group2": "Production &amp; editing",
      "skills.g2i1": "General production (TV and theatre)",
      "skills.g2i2": "Video editing (CapCut)",
      "skills.g2i3": "Photoshop (basic level)",
      "skills.group3": "Strategy &amp; management",
      "skills.g3i1": "Team management",
      "skills.g3i2": "Marketing strategy",
      "skills.g3i3": "Political strategy",
      "skills.g3i4": "Experience marketing",
      "skills.g3i5": "Community &amp; Influencer Manager",
      "skills.g3i6": "Public speaking",
      "skills.group4": "Tools",
      "skills.g4i2": "Advanced Microsoft Office (Word, PowerPoint, Excel)",
      "skills.g4i3": "AI development and use (OpenAI, ChatGPT, Gemini)",
      "skills.g4i4": "Google Workspace (Sheets, Docs and more)",

      "contacto.heading": "Let's talk",
      "contacto.intro": "Effective communication starts with listening. Write to me and let's continue the conversation.",
      "contacto.email": "Email",
      "contacto.cv": "Resume",
      "contacto.cvValue": "Download PDF",

      "footer.name": "Agostina Soracci, Communications Professional",
      "footer.signal": "Santiago, Chile ⇄ Buenos Aires"
    }
  };

  var STORAGE_KEY = "site-lang";

  function detectDefaultLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* localStorage unavailable, ignore */ }
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "es";
  }

  function applyLang(lang) {
    var dict = DICT[lang] || DICT.es;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (value === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.innerHTML = value;
      }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function init() {
    var lang = detectDefaultLang();
    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
