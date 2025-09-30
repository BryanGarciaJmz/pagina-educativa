import { useState } from 'react'
import './CourseCard.css'

function CourseCard({ course, onEnroll, onViewCourse }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleEnroll = () => {
    onEnroll(course)
  }

  const handleViewCourse = () => {
    console.log('Botón Ver Curso clickeado para curso:', course.id)
    onViewCourse(course.id)
  }

  return (
    <div 
      className="course-card-enhanced"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="course-image-enhanced">
        <div className="placeholder-img-enhanced">{course.icon}</div>
        {isHovered && (
          <div className="course-overlay">
            <button className="preview-btn">👁️ Vista previa</button>
          </div>
        )}
      </div>
      
      <div className="course-content">
        <div className="course-meta">
          <span className="course-category">{course.category}</span>
          <span className="course-level">{course.level}</span>
        </div>
        
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        
        <div className="course-features">
          <div className="feature">
            <span className="feature-icon">⏱️</span>
            <span>{course.duration}</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👥</span>
            <span>{course.students} estudiantes</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📚</span>
            <span>{course.lessons} lecciones</span>
          </div>
        </div>
        
        <div className="course-instructor">
          <div className="instructor-avatar">👨‍🏫</div>
          <div className="instructor-info">
            <span className="instructor-name">{course.instructor}</span>
            <span className="instructor-title">Instructor Certificado</span>
          </div>
        </div>
        
        <div className="course-footer">
          <div className="course-pricing">
            {course.originalPrice && (
              <span className="original-price">${course.originalPrice}</span>
            )}
            <span className="current-price">${course.price}</span>
          </div>
          <div className="course-actions">
            <div className="rating">
              <span className="stars">⭐</span>
              <span className="rating-number">{course.rating}</span>
              <span className="rating-count">({course.reviews})</span>
            </div>
            <div className="action-buttons">
              <button className="view-btn" onClick={handleViewCourse}>
                Ver Curso
              </button>
              <button className="enroll-btn" onClick={handleEnroll}>
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
