import { useState } from 'react'
import './App.css'
import LoginModal from './components/LoginModal'
import CourseCard from './components/CourseCard'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const handleEnroll = (course) => {
    setIsLoginModalOpen(true)
    console.log('Inscribirse en curso:', course.title)
  }

  const courses = [
    {
      id: 1,
      title: "Desarrollo Web Frontend",
      description: "Aprende HTML, CSS, JavaScript y React desde cero hasta nivel avanzado.",
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
      reviews: 1234
    },
    {
      id: 2,
      title: "Python para Principiantes",
      description: "Domina Python y sus aplicaciones en ciencia de datos y desarrollo web.",
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
      reviews: 987
    },
    {
      id: 3,
      title: "Diseño UX/UI",
      description: "Crea experiencias digitales increíbles con herramientas profesionales.",
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
      reviews: 756
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Estrategias modernas de marketing digital y redes sociales.",
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
      reviews: 543
    },
    {
      id: 5,
      title: "Fotografía Digital",
      description: "Técnicas profesionales de fotografía y edición digital.",
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
      reviews: 432
    },
    {
      id: 6,
      title: "Data Science con R",
      description: "Análisis de datos y machine learning con R y RStudio.",
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
      reviews: 324
    }
  ]

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>Pixel Academy</h2>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#about">¿Por qué Pixel Academy?</a></li>
            <li><a href="#inspiracion">Inspiración</a></li>
          </ul>
          <div className="nav-actions">
            <button className="login-btn" onClick={openLoginModal}>
              Acceder
            </button>
            <button className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Aprende sin límites</h1>
          <p>Descubre miles de cursos online de alta calidad impartidos por expertos en cada área.</p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={openLoginModal}>
              Comienza Ahora
            </button>
            <button className="cta-button secondary">
              Ver Cursos Gratis
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Estudiantes activos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1K+</span>
              <span className="stat-label">Cursos disponibles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8⭐</span>
              <span className="stat-label">Calificación promedio</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="courses">
        <div className="container">
          <div className="section-header">
            <h2>Cursos Populares</h2>
            <p>Descubre los cursos más demandados por nuestra comunidad</p>
          </div>
          
          <div className="courses-grid-enhanced">
            {courses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onEnroll={handleEnroll}
              />
            ))}
          </div>
          
          <div className="courses-cta">
            <button className="see-all-btn">Ver Todos los Cursos</button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>¿Por qué elegir Pixel Academy?</h2>
              <p>
                Somos una plataforma educativa comprometida con tu crecimiento profesional. 
                Ofrecemos cursos de alta calidad impartidos por expertos de la industria.
              </p>
              <ul>
                <li>✓ Contenido actualizado constantemente</li>
                <li>✓ Certificados reconocidos</li>
                <li>✓ Soporte 24/7</li>
                <li>✓ Comunidad activa de estudiantes</li>
              </ul>
              <button className="about-cta">Únete ahora</button>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50,000+</h3>
                <p>Estudiantes activos</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Cursos disponibles</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Satisfacción estudiantil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inspiracion" className="inspiration">
        <div className="container">
          <div className="section-header">
            <h2>Música para Inspirarte</h2>
            <p>Encuentra tu ritmo de estudio con nuestra selección musical para mantener la concentración y motivación</p>
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/f02mOEt11OQ?start=342"
              title="Música de Inspiración para Estudiar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="inspiration-text">
            <p>
              🎵 La música puede ser una herramienta poderosa para mejorar tu concentración y productividad. 
              Esta selección te ayudará a mantener el enfoque mientras estudias.
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Mantente actualizado</h2>
            <p>Recibe las últimas noticias sobre nuevos cursos y ofertas especiales</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Suscribirse</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 2024 Pixel Academy. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#">Términos de Servicio</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </div>
  )
}

export default App
