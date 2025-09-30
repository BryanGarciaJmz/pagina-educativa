import { useState } from 'react'
import './App.css'
import LoginModal from './components/LoginModal'
import CourseCard from './components/CourseCard'
import CoursePage from './components/CoursePage'
import { coursesData } from './data/coursesData'
import ArticleCard from './components/ArticleCard'
import { articlesData } from './data/articlesData'

function App() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const [currentView, setCurrentView] = useState('home') // 'home' | 'course'
	const [selectedCourseId, setSelectedCourseId] = useState(null)

	const openLoginModal = () => setIsLoginModalOpen(true)
	const closeLoginModal = () => setIsLoginModalOpen(false)

	const handleEnroll = () => {
		setIsLoginModalOpen(true)
	}

	const handleViewCourse = (courseId) => {
		setSelectedCourseId(courseId)
		setCurrentView('course')
	}

	const handleBackToHome = () => {
		setCurrentView('home')
		setSelectedCourseId(null)
	}

	if (currentView === 'course' && selectedCourseId) {
		const course = coursesData[selectedCourseId]
		return (
			<>
				<CoursePage course={course} onBack={handleBackToHome} />
				<LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
			</>
		)
	}

	const coursesList = Object.values(coursesData)

	return (
		<div>
			<header className="header">
				<nav className="navbar">
					<div className="nav-brand">
						<h2>Pixel Academy</h2>
					</div>
					<ul className="nav-menu">
						<li><a href="#inicio">Inicio</a></li>
						<li><a href="#cursos">Cursos</a></li>
						<li><a href="#inspiracion">Inspiración</a></li>
					</ul>
					<div className="nav-actions">
						<button className="login-btn" onClick={openLoginModal}>Ingresar</button>
					</div>
				</nav>
			</header>

			<section id="inicio" className="hero">
				<div className="container hero-content">
					<h1>Aprende habilidades del futuro</h1>
					<p>Únete a miles de estudiantes que ya están construyendo su carrera con cursos prácticos y actualizados.</p>
					<div className="hero-buttons">
						<a href="#cursos" className="cta-button primary">Explorar cursos</a>
						<a href="#inspiracion" className="cta-button secondary">Ver inspiración</a>
					</div>
					<div className="hero-stats">
						<div className="stat-item">
							<span className="stat-number">+50</span>
							<span className="stat-label">Cursos</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">+20k</span>
							<span className="stat-label">Estudiantes</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">+120</span>
							<span className="stat-label">Instructores</span>
						</div>
					</div>
				</div>
			</section>

			<section id="cursos" className="courses">
				<div className="container">
					<div className="section-header">
						<h2>Nuestros cursos</h2>
						<p>Contenido curado para aprender haciendo. Elige tu camino y comienza hoy.</p>
					</div>
					<div className="courses-grid-enhanced">
						{coursesList.map((course) => (
							<CourseCard
								key={course.id}
								course={course}
								onEnroll={handleEnroll}
								onViewCourse={handleViewCourse}
							/>
						))}
					</div>
					<div className="courses-cta">
						<a href="#inspiracion" className="see-all-btn">Ver inspiración</a>
					</div>
				</div>
			</section>

					<section id="articulos" className="courses" style={{ paddingTop: 40 }}>
						<div className="container">
							<div className="section-header">
								<h2>Artículos recientes</h2>
								<p>Noticias y guías prácticas sobre programación y tecnología.</p>
							</div>
							<div className="courses-grid-enhanced">
								{articlesData.map((article) => (
									<ArticleCard key={article.id} article={article} />
								))}
							</div>
						</div>
					</section>

			<section id="inspiracion" className="newsletter">
				<div className="container newsletter-content">
					<h2>Inspiración</h2>
					<p>Mira este video para motivarte y descubrir cómo empezar tu camino de aprendizaje.</p>
					<div style={{ marginTop: '20px' }}>
						<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
							<iframe
								title="Inspiración"
								src="https://www.youtube.com/embed/dQw4w9WgXcQ"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
							/>
						</div>
					</div>
				</div>
			</section>

			<footer className="newsletter">
				<div className="container newsletter-content">
					<h2>Recibe novedades</h2>
					<p>Suscríbete para enterarte de nuevos cursos y descuentos.</p>
					<div className="newsletter-form">
						<input className="newsletter-input" placeholder="Tu correo" />
						<button className="newsletter-btn">Suscribirme</button>
					</div>
				</div>
			</footer>

			<LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
		</div>
	)
}

export default App

