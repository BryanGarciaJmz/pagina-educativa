import { useMemo, useState } from 'react'
import './CoursePage.css'
import LoginModal from './LoginModal'

function CoursePage({ course, onBack }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('contenido')
  const [reviews, setReviews] = useState(() => course?.reviews_data || [])
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' })

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const handleEnroll = () => {
    setIsLoginModalOpen(true)
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (!newReview.name.trim() || !newReview.comment.trim()) return
    const review = {
      name: newReview.name.trim(),
      rating: Number(newReview.rating) || 5,
      comment: newReview.comment.trim(),
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })
    }
    setReviews([review, ...reviews])
    setNewReview({ name: '', rating: 5, comment: '' })
  }

  if (!course) {
    return <div>Curso no encontrado</div>
  }

  return (
    <div className="course-page">
      <div className="course-header">
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            ← Volver a cursos
          </button>
          <div className="course-hero">
            <div className="course-hero-content">
              <div className="course-hero-text">
                <div className="course-meta">
                  <span className="course-category">{course.category}</span>
                  <span className="course-level">{course.level}</span>
                </div>
                <h1>{course.title}</h1>
                <p className="course-description">{course.description}</p>
                <div className="course-stats">
                  <div className="stat">
                    <span className="stat-icon">⭐</span>
                    <span className="stat-text">{course.rating} ({course.reviews} reseñas)</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">👥</span>
                    <span className="stat-text">{course.students} estudiantes</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">⏱️</span>
                    <span className="stat-text">{course.duration}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">📚</span>
                    <span className="stat-text">{course.lessons} lecciones</span>
                  </div>
                </div>
                <div className="instructor-info">
                  <div className="instructor-avatar">👨‍🏫</div>
                  <div>
                    <div className="instructor-name">Instructor: {course.instructor}</div>
                    <div className="instructor-title">Experto Certificado</div>
                  </div>
                </div>
              </div>
              <div className="course-hero-card">
                <div className="course-preview">
                  <div className="preview-image">
                    <span className="course-icon">{course.icon}</span>
                  </div>
                  <div className="course-pricing">
                    <div className="price-section">
                      {course.originalPrice && (
                        <span className="original-price">${course.originalPrice}</span>
                      )}
                      <span className="current-price">${course.price}</span>
                    </div>
                    <button className="enroll-btn-large" onClick={handleEnroll}>
                      Inscribirse Ahora
                    </button>
                  </div>
                  <div className="course-includes">
                    <h4>Este curso incluye:</h4>
                    <ul>
                      <li>📹 {course.lessons} lecciones en video</li>
                      <li>📝 Ejercicios prácticos</li>
                      <li>🏆 Certificado de finalización</li>
                      <li>📱 Acceso desde cualquier dispositivo</li>
                      <li>♾️ Acceso de por vida</li>
                      <li>🔄 Actualizaciones gratuitas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-content">
        <div className="container">
          <div className="course-tabs">
            <button 
              className={`tab ${activeTab === 'contenido' ? 'active' : ''}`}
              onClick={() => setActiveTab('contenido')}
            >
              Contenido del Curso
            </button>
            <button 
              className={`tab ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
            <button 
              className={`tab ${activeTab === 'reseñas' ? 'active' : ''}`}
              onClick={() => setActiveTab('reseñas')}
            >
              Reseñas
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'contenido' && (
              <div className="content-tab">
                <div className="course-curriculum">
                  <h3>Contenido del Curso</h3>
                  {course.curriculum && course.curriculum.map((module, index) => (
                    <div key={index} className="curriculum-module">
                      <div className="module-header">
                        <h4>{module.title}</h4>
                        <span className="module-duration">{module.duration}</span>
                      </div>
                      <ul className="module-lessons">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="lesson-item">
                            <span className="lesson-icon">▶️</span>
                            <span className="lesson-title">{lesson.title}</span>
                            <span className="lesson-duration">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="instructor-tab">
                <div className="instructor-profile">
                  <div className="instructor-avatar-large">👨‍🏫</div>
                  <div className="instructor-details">
                    <h3>{course.instructor}</h3>
                    <p className="instructor-bio">{course.instructorBio}</p>
                    <div className="instructor-stats">
                      <div className="instructor-stat">
                        <strong>Experiencia:</strong> {course.instructorExperience}
                      </div>
                      <div className="instructor-stat">
                        <strong>Estudiantes:</strong> {course.students}+
                      </div>
                      <div className="instructor-stat">
                        <strong>Calificación:</strong> ⭐ {course.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reseñas' && (
              <div className="reviews-tab">
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="rating-large">
                      <span className="rating-number">{course.rating}</span>
                      <div className="stars-large">⭐⭐⭐⭐⭐</div>
                      <span className="reviews-count">{reviews.length} reseñas</span>
                    </div>
                  </div>
                </div>

                <form className="review-form" onSubmit={handleSubmitReview}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="rv-name">Nombre</label>
                      <input
                        id="rv-name"
                        type="text"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rv-rating">Calificación</label>
                      <select
                        id="rv-rating"
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                      >
                        {[5,4,3,2,1].map((r) => (
                          <option key={r} value={r}>{r} ⭐</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rv-comment">Comentario</label>
                    <textarea
                      id="rv-comment"
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Comparte tu experiencia con este curso"
                      required
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="submit-review-btn">Publicar reseña</button>
                  </div>
                </form>

                <div className="reviews-list">
                  {reviews && reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="review-rating">
                          {'⭐'.repeat(review.rating)}
                        </div>
                      </div>
                      <p className="review-text">{review.comment}</p>
                      <span className="review-date">{review.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </div>
  )
}

export default CoursePage
