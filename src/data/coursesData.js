export const coursesData = {
  1: {
    id: 1,
    title: "Desarrollo Web Frontend",
    description: "Aprende HTML, CSS, JavaScript y React desde cero hasta nivel avanzado. Domina las tecnologías fundamentales del desarrollo web moderno.",
    icon: "📱",
    category: "Programación",
    level: "Principiante",
    duration: "40 horas",
    students: "15,420",
    lessons: "45",
    instructor: "Ana García",
    price: 99,
    originalPrice: 149,
    rating: 4.8,
    reviews: 1234,
    instructorBio: "Ana García es una desarrolladora frontend senior con más de 8 años de experiencia en empresas tecnológicas. Especializada en React, JavaScript moderno y diseño responsivo.",
    instructorExperience: "8+ años",
    curriculum: [
      {
        title: "Módulo 1: Fundamentos de HTML",
        duration: "8 horas",
        lessons: [
          { title: "Introducción al HTML", duration: "45 min" },
          { title: "Estructura básica de un documento", duration: "30 min" },
          { title: "Etiquetas y elementos", duration: "1 hora" },
          { title: "Formularios y validación", duration: "1.5 horas" },
          { title: "Semántica en HTML5", duration: "1 hora" },
          { title: "Proyecto práctico: Mi primera página", duration: "3 horas" }
        ]
      },
      {
        title: "Módulo 2: CSS y Diseño",
        duration: "12 horas",
        lessons: [
          { title: "Introducción a CSS", duration: "1 hora" },
          { title: "Selectores y propiedades", duration: "1.5 horas" },
          { title: "Box Model y Layout", duration: "2 horas" },
          { title: "Flexbox", duration: "2 horas" },
          { title: "CSS Grid", duration: "2 horas" },
          { title: "Responsive Design", duration: "2 horas" },
          { title: "Animaciones y transiciones", duration: "1.5 horas" }
        ]
      },
      {
        title: "Módulo 3: JavaScript Fundamentals",
        duration: "15 horas",
        lessons: [
          { title: "Variables y tipos de datos", duration: "1 hora" },
          { title: "Funciones y scope", duration: "2 horas" },
          { title: "DOM Manipulation", duration: "3 horas" },
          { title: "Eventos", duration: "2 horas" },
          { title: "Asincronía y Promises", duration: "3 horas" },
          { title: "Fetch API", duration: "2 horas" },
          { title: "Proyecto: App de tareas", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 4: React desde cero",
        duration: "5 horas",
        lessons: [
          { title: "Introducción a React", duration: "1 hora" },
          { title: "Componentes y JSX", duration: "1.5 horas" },
          { title: "Props y State", duration: "1.5 horas" },
          { title: "Hooks básicos", duration: "1 hora" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Carlos Mendoza",
        rating: 5,
        comment: "Excelente curso, muy bien explicado y con proyectos prácticos que realmente ayudan a entender los conceptos.",
        date: "15 Septiembre 2024"
      },
      {
        name: "María Rodriguez",
        rating: 5,
        comment: "Ana es una instructora increíble. Logró que entendiera conceptos que antes me parecían muy complicados.",
        date: "10 Septiembre 2024"
      },
      {
        name: "Juan López",
        rating: 4,
        comment: "Muy completo el curso, me sirvió mucho para conseguir mi primer trabajo como desarrollador.",
        date: "5 Septiembre 2024"
      }
    ]
  },
  2: {
    id: 2,
    title: "Python para Principiantes",
    description: "Domina Python y sus aplicaciones en ciencia de datos y desarrollo web. El lenguaje de programación más versátil y demandado.",
    icon: "🐍",
    category: "Programación",
    level: "Principiante",
    duration: "35 horas",
    students: "12,350",
    lessons: "38",
    instructor: "Carlos Ruiz",
    price: 79,
    originalPrice: 120,
    rating: 4.9,
    reviews: 987,
    instructorBio: "Carlos Ruiz es un ingeniero de datos con más de 10 años de experiencia en Python. Ha trabajado en Google y Microsoft, y ahora se dedica a la enseñanza.",
    instructorExperience: "10+ años",
    curriculum: [
      {
        title: "Módulo 1: Fundamentos de Python",
        duration: "10 horas",
        lessons: [
          { title: "Instalación y configuración", duration: "30 min" },
          { title: "Variables y tipos de datos", duration: "1 hora" },
          { title: "Operadores y expresiones", duration: "1 hora" },
          { title: "Estructuras de control", duration: "2 horas" },
          { title: "Funciones", duration: "2 horas" },
          { title: "Listas y diccionarios", duration: "2 horas" },
          { title: "Manejo de archivos", duration: "1.5 horas" }
        ]
      },
      {
        title: "Módulo 2: Programación Orientada a Objetos",
        duration: "8 horas",
        lessons: [
          { title: "Clases y objetos", duration: "2 horas" },
          { title: "Herencia", duration: "2 horas" },
          { title: "Polimorfismo", duration: "2 horas" },
          { title: "Encapsulamiento", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 3: Librerías y Frameworks",
        duration: "12 horas",
        lessons: [
          { title: "NumPy para cálculos", duration: "3 horas" },
          { title: "Pandas para datos", duration: "3 horas" },
          { title: "Matplotlib para gráficos", duration: "2 horas" },
          { title: "Introducción a Django", duration: "4 horas" }
        ]
      },
      {
        title: "Módulo 4: Proyecto Final",
        duration: "5 horas",
        lessons: [
          { title: "Análisis de datos con Pandas", duration: "3 horas" },
          { title: "Presentación de resultados", duration: "2 horas" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Ana Martínez",
        rating: 5,
        comment: "El mejor curso de Python que he tomado. Carlos explica todo de manera muy clara y práctica.",
        date: "20 Septiembre 2024"
      },
      {
        name: "Pedro Sánchez",
        rating: 5,
        comment: "Perfecto para principiantes. Ahora trabajo como analista de datos gracias a este curso.",
        date: "18 Septiembre 2024"
      },
      {
        name: "Laura García",
        rating: 4,
        comment: "Muy buen contenido, aunque me hubiera gustado más práctica con machine learning.",
        date: "12 Septiembre 2024"
      }
    ]
  },
  3: {
    id: 3,
    title: "Diseño UX/UI",
    description: "Crea experiencias digitales increíbles con herramientas profesionales. Aprende el proceso completo de diseño centrado en el usuario.",
    icon: "🎨",
    category: "Diseño",
    level: "Intermedio",
    duration: "50 horas",
    students: "8,750",
    lessons: "52",
    instructor: "María López",
    price: 120,
    originalPrice: 180,
    rating: 4.7,
    reviews: 756,
    instructorBio: "María López es una diseñadora UX/UI senior con más de 7 años creando experiencias digitales para startups y grandes empresas como Spotify y Airbnb.",
    instructorExperience: "7+ años",
    curriculum: [
      {
        title: "Módulo 1: Fundamentos de UX",
        duration: "15 horas",
        lessons: [
          { title: "Introducción al Design Thinking", duration: "2 horas" },
          { title: "Investigación de usuarios", duration: "3 horas" },
          { title: "Personas y User Journey", duration: "2 horas" },
          { title: "Arquitectura de información", duration: "3 horas" },
          { title: "Wireframes y prototipos", duration: "3 horas" },
          { title: "Testing de usabilidad", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 2: Diseño Visual",
        duration: "15 horas",
        lessons: [
          { title: "Principios de diseño", duration: "2 horas" },
          { title: "Teoría del color", duration: "2 horas" },
          { title: "Tipografía", duration: "2 horas" },
          { title: "Sistemas de diseño", duration: "4 horas" },
          { title: "Iconografía", duration: "2 horas" },
          { title: "Composición y layout", duration: "3 horas" }
        ]
      },
      {
        title: "Módulo 3: Herramientas Profesionales",
        duration: "15 horas",
        lessons: [
          { title: "Mastering Figma", duration: "6 horas" },
          { title: "Adobe XD avanzado", duration: "4 horas" },
          { title: "Prototipado interactivo", duration: "3 horas" },
          { title: "Colaboración en equipo", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 4: Proyecto Final",
        duration: "5 horas",
        lessons: [
          { title: "App móvil completa", duration: "3 horas" },
          { title: "Presentación profesional", duration: "2 horas" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Diego Fernández",
        rating: 5,
        comment: "María es una excelente maestra. El curso me ayudó a conseguir trabajo en una startup.",
        date: "22 Septiembre 2024"
      },
      {
        name: "Sofía Herrera",
        rating: 4,
        comment: "Muy completo, aunque me hubiera gustado más contenido sobre research methods.",
        date: "19 Septiembre 2024"
      },
      {
        name: "Alejandro Mora",
        rating: 5,
        comment: "Perfecto balance entre teoría y práctica. Los proyectos son muy realistas.",
        date: "14 Septiembre 2024"
      }
    ]
  },
  4: {
    id: 4,
    title: "Marketing Digital",
    description: "Estrategias modernas de marketing digital y redes sociales. Aprende a crear campañas efectivas que generen resultados reales.",
    icon: "📊",
    category: "Marketing",
    level: "Intermedio",
    duration: "30 horas",
    students: "9,200",
    lessons: "32",
    instructor: "José Martínez",
    price: 89,
    originalPrice: 130,
    rating: 4.6,
    reviews: 543,
    instructorBio: "José Martínez es un especialista en marketing digital con más de 9 años de experiencia. Ha manejado campañas para marcas reconocidas y startups exitosas.",
    instructorExperience: "9+ años",
    curriculum: [
      {
        title: "Módulo 1: Fundamentos del Marketing Digital",
        duration: "8 horas",
        lessons: [
          { title: "Ecosistema digital actual", duration: "1 hora" },
          { title: "Customer Journey", duration: "1.5 horas" },
          { title: "Buyer Personas", duration: "1.5 horas" },
          { title: "KPIs y métricas", duration: "2 horas" },
          { title: "Funnel de conversión", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 2: Redes Sociales",
        duration: "10 horas",
        lessons: [
          { title: "Estrategia de contenidos", duration: "2 horas" },
          { title: "Facebook e Instagram Ads", duration: "3 horas" },
          { title: "LinkedIn para B2B", duration: "2 horas" },
          { title: "TikTok y tendencias", duration: "1.5 horas" },
          { title: "Community Management", duration: "1.5 horas" }
        ]
      },
      {
        title: "Módulo 3: SEO y SEM",
        duration: "8 horas",
        lessons: [
          { title: "SEO técnico", duration: "2 horas" },
          { title: "Keyword research", duration: "2 horas" },
          { title: "Google Ads", duration: "3 horas" },
          { title: "Analytics y reporting", duration: "1 hora" }
        ]
      },
      {
        title: "Módulo 4: Email Marketing y Automatización",
        duration: "4 horas",
        lessons: [
          { title: "Estrategias de email", duration: "2 horas" },
          { title: "Marketing automation", duration: "2 horas" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Carmen Silva",
        rating: 5,
        comment: "Excelente curso, muy actualizado con las últimas tendencias. José sabe mucho del tema.",
        date: "25 Septiembre 2024"
      },
      {
        name: "Roberto Díaz",
        rating: 4,
        comment: "Buen contenido, me ayudó a mejorar las campañas de mi empresa. Recomendado.",
        date: "21 Septiembre 2024"
      },
      {
        name: "Valeria Torres",
        rating: 5,
        comment: "Perfecto para emprendedores. Aprendí a crear campañas que realmente funcionan.",
        date: "16 Septiembre 2024"
      }
    ]
  },
  5: {
    id: 5,
    title: "Fotografía Digital",
    description: "Técnicas profesionales de fotografía y edición digital. Desde conceptos básicos hasta técnicas avanzadas de composición y postproducción.",
    icon: "📷",
    category: "Arte",
    level: "Principiante",
    duration: "25 horas",
    students: "6,800",
    lessons: "28",
    instructor: "Laura Sánchez",
    price: 69,
    originalPrice: 100,
    rating: 4.8,
    reviews: 432,
    instructorBio: "Laura Sánchez es una fotógrafa profesional con más de 12 años de experiencia. Sus trabajos han sido publicados en National Geographic y Vogue.",
    instructorExperience: "12+ años",
    curriculum: [
      {
        title: "Módulo 1: Fundamentos de Fotografía",
        duration: "8 horas",
        lessons: [
          { title: "Historia de la fotografía", duration: "1 hora" },
          { title: "Tipos de cámaras", duration: "1 hora" },
          { title: "Exposición: ISO, apertura, velocidad", duration: "2 horas" },
          { title: "Composición básica", duration: "2 horas" },
          { title: "Luz natural y artificial", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 2: Técnicas Avanzadas",
        duration: "8 horas",
        lessons: [
          { title: "Regla de tercios y líneas guía", duration: "1.5 horas" },
          { title: "Fotografía de retrato", duration: "2 horas" },
          { title: "Fotografía de paisaje", duration: "2 horas" },
          { title: "Fotografía nocturna", duration: "1.5 horas" },
          { title: "Macro fotografía", duration: "1 hora" }
        ]
      },
      {
        title: "Módulo 3: Edición Digital",
        duration: "7 horas",
        lessons: [
          { title: "Introducción a Lightroom", duration: "2 horas" },
          { title: "Ajustes básicos", duration: "2 horas" },
          { title: "Photoshop para fotógrafos", duration: "3 horas" }
        ]
      },
      {
        title: "Módulo 4: Portafolio Profesional",
        duration: "2 horas",
        lessons: [
          { title: "Selección de imágenes", duration: "1 hora" },
          { title: "Presentación online", duration: "1 hora" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Miguel Ángel",
        rating: 5,
        comment: "Laura es increíble. Sus explicaciones son muy claras y los ejercicios súper útiles.",
        date: "24 Septiembre 2024"
      },
      {
        name: "Fernanda Cruz",
        rating: 5,
        comment: "El mejor curso de fotografía que he tomado. Ahora vendo mis fotos como freelance.",
        date: "20 Septiembre 2024"
      },
      {
        name: "Andrés Vega",
        rating: 4,
        comment: "Muy bueno para principiantes. Me hubiera gustado más contenido sobre fotografía de bodas.",
        date: "17 Septiembre 2024"
      }
    ]
  },
  6: {
    id: 6,
    title: "Data Science con R",
    description: "Análisis de datos y machine learning con R y RStudio. Conviértete en un científico de datos con uno de los lenguajes más poderosos para análisis estadístico.",
    icon: "📈",
    category: "Datos",
    level: "Avanzado",
    duration: "60 horas",
    students: "4,500",
    lessons: "48",
    instructor: "Dr. Roberto Silva",
    price: 149,
    originalPrice: 220,
    rating: 4.9,
    reviews: 324,
    instructorBio: "Dr. Roberto Silva es PhD en Estadística con más de 15 años de experiencia en investigación y consultoría. Ha trabajado en IBM y actualmente es profesor universitario.",
    instructorExperience: "15+ años",
    curriculum: [
      {
        title: "Módulo 1: Introducción a R",
        duration: "15 horas",
        lessons: [
          { title: "Instalación de R y RStudio", duration: "1 hora" },
          { title: "Sintaxis básica de R", duration: "2 horas" },
          { title: "Tipos de datos y estructuras", duration: "3 horas" },
          { title: "Funciones y control de flujo", duration: "3 horas" },
          { title: "Importación y exportación de datos", duration: "2 horas" },
          { title: "Introducción a tidyverse", duration: "4 horas" }
        ]
      },
      {
        title: "Módulo 2: Análisis Exploratorio",
        duration: "15 horas",
        lessons: [
          { title: "Estadística descriptiva", duration: "3 horas" },
          { title: "Visualización con ggplot2", duration: "4 horas" },
          { title: "Manipulación de datos con dplyr", duration: "4 horas" },
          { title: "Limpieza de datos", duration: "4 horas" }
        ]
      },
      {
        title: "Módulo 3: Estadística Inferencial",
        duration: "15 horas",
        lessons: [
          { title: "Pruebas de hipótesis", duration: "4 horas" },
          { title: "Regresión lineal", duration: "4 horas" },
          { title: "Regresión logística", duration: "3 horas" },
          { title: "ANOVA", duration: "2 horas" },
          { title: "Series de tiempo", duration: "2 horas" }
        ]
      },
      {
        title: "Módulo 4: Machine Learning",
        duration: "15 horas",
        lessons: [
          { title: "Introducción al ML", duration: "2 horas" },
          { title: "Algoritmos de clasificación", duration: "4 horas" },
          { title: "Clustering", duration: "3 horas" },
          { title: "Validación cruzada", duration: "2 horas" },
          { title: "Random Forest y SVM", duration: "4 horas" }
        ]
      }
    ],
    reviews_data: [
      {
        name: "Patricia Morales",
        rating: 5,
        comment: "Dr. Silva es excelente. El curso es intenso pero muy completo. Ahora trabajo en una consultora de datos.",
        date: "26 Septiembre 2024"
      },
      {
        name: "Gustavo Ramírez",
        rating: 5,
        comment: "El mejor curso de Data Science en español. Muy académico y riguroso.",
        date: "23 Septiembre 2024"
      },
      {
        name: "Isabella López",
        rating: 4,
        comment: "Excelente contenido, aunque requiere conocimientos previos de estadística.",
        date: "18 Septiembre 2024"
      }
    ]
  }
}
