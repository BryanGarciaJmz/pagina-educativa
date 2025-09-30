import { useState } from 'react'
import './App.css'
import LoginModal from './components/LoginModal'
import CourseCard from './components/CourseCard'
import CoursePage from './components/CoursePage'
import { coursesData } from './data/coursesData'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [selectedCourseId, setSelectedCourseId] = useState(null)

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

  const handleViewCourse = (courseId) => {
    console.log('handleViewCourse llamado con courseId:', courseId)
    console.log('coursesData:', coursesData)
    console.log('Curso encontrado:', coursesData[courseId])
    setSelectedCourseId(courseId)
    setCurrentView('course')
    window.scrollTo(0, 0)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedCourseId(null)
    window.scrollTo(0, 0)
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
      lessons: "32",
      instructor: "Ana García",
      price: 79,
      originalPrice: 120,
      rating: 4.7,
      reviews: 892
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
      rating: 4.8,
      reviews: 1234
    },
    {
      id: 3,
      title: "Diseño UX/UI Avanzado",
      description: "Crea interfaces de usuario atractivas y experiencias memorables.",
      icon: "🎨",
      category: "Diseño",
      level: "Intermedio",
      duration: "50 horas",
      students: "8,900",
      lessons: "42",
      instructor: "María López",
      price: 99,
      originalPrice: 149,
      rating: 4.9,
      reviews: 756
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Estrategias modernas de marketing en redes sociales y SEO.",
      icon: "📈",
      category: "Marketing",
      level: "Intermedio",
      duration: "45 horas",
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
      {currentView === 'home' ? (
        <>
          <header className="header">
            <nav className="navbar">
              <div className="nav-brand">
                <h2>Pixel Academy</h2>
              </div>
              
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
                <li><a href="#cursos" onClick={() => setIsMenuOpen(false)}>Cursos</a></li>
                <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
                <li><a href="#inspiracion" onClick={() => setIsMenuOpen(false)}>Inspiración</a></li>
              </ul>

              <div className="nav-actions">
                <button className="login-btn" onClick={openLoginModal}>
                  Iniciar Sesión
                </button>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>
          </header>

          <section id="inicio" className="hero">
            <div className="container">
              <div className="hero-content">
                <h1>Transforma tu futuro con <span className="highlight">Pixel Academy</span></h1>
                <p>
                  Accede a más de 500 cursos online de alta calidad. 
                  Aprende nuevas habilidades con expertos de la industria.
                </p>
                
                <div className="hero-cta">
                  <button className="cta-button primary">Explorar Cursos</button>
                  <button className="cta-button secondary">Ver Demo</button>
                </div>

                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">50,000+</span>
                    <span className="stat-label">Estudiantes</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Cursos</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">4.8⭐</span>
                    <span className="stat-label">Calificación promedio</span>
                  </div>
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
                    onViewCourse={handleViewCourse}
                  />
                ))}
              </div>
              
              <div className="courses-cta">
                <button className="see-all-btn">Ver Todos los Cursos</button>
              </div>
            </div>
          </section>

          <section id="nosotros" className="about">
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
        </>
      ) : (
        <CoursePage 
          course={coursesData[selectedCourseId]} 
          onBack={handleBackToHome}
        />
      )}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </div>
  )
}

export default App
