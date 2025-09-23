# 📚 Pixel Academy - Plataforma Educativa

Una plataforma educativa moderna desarrollada con **React** y **Vite** que ofrece cursos online de alta calidad.

## 🚀 Características

- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Diseño limpio y atractivo con animaciones suaves
- **Componentes Reutilizables**: Arquitectura modular con componentes de React
- **Modal de Login/Registro**: Sistema de autenticación con formularios interactivos
- **Tarjetas de Cursos Avanzadas**: Información detallada de cada curso con efectos hover
- **Navegación Fluida**: Scroll suave entre secciones
- **Newsletter**: Suscripción a boletín de noticias

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 7.1.6** - Herramienta de desarrollo rápida
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Funcionalidades modernas de JavaScript

## 📁 Estructura del Proyecto

```
pagina-educativa/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CourseCard.jsx      # Componente de tarjeta de curso
│   │   ├── CourseCard.css      # Estilos de la tarjeta de curso
│   │   ├── LoginModal.jsx      # Modal de login/registro
│   │   └── LoginModal.css      # Estilos del modal
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos principales
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Secciones de la Página

### 1. **Header**
- Navegación responsive con menú hamburguesa
- Botón de login/registro
- Logo de la plataforma

### 2. **Hero Section**
- Mensaje principal atractivo
- Botones de llamada a la acción
- Estadísticas de la plataforma

### 3. **Cursos Populares**
- Grid responsive de cursos
- Tarjetas interactivas con información detallada
- Botones de inscripción

### 4. **Sobre Nosotros**
- Beneficios de la plataforma
- Estadísticas de usuarios
- Botón de registro

### 5. **Newsletter**
- Formulario de suscripción
- Diseño atractivo con gradiente

### 6. **Footer**
- Enlaces útiles
- Información de contacto
- Redes sociales

## 🚦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd pagina-educativa
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre el navegador**
   Ve a `http://localhost:5173` (o el puerto que indique Vite)

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎯 Funcionalidades Implementadas

### Componentes Principales

#### LoginModal
- Formulario de login y registro
- Validación de campos
- Animaciones de entrada y salida
- Diseño responsive

#### CourseCard
- Información detallada del curso
- Efectos hover interactivos
- Datos del instructor
- Precios y calificaciones

### Características de UX/UI

- **Animaciones**: Transiciones suaves en hover y click
- **Responsive Design**: Adaptable a todos los tamaños de pantalla
- **Accesibilidad**: Contraste adecuado y navegación por teclado
- **Performance**: Carga rápida con Vite

## 🎨 Paleta de Colores

- **Primario**: `#4f46e5` (Índigo)
- **Secundario**: `#ff6b6b` (Coral)
- **Gradientes**: 
  - Hero: `#667eea` → `#764ba2`
  - Newsletter: `#667eea` → `#764ba2`
- **Grises**: `#333`, `#666`, `#f8fafc`

## 📱 Responsive Design

- **Desktop**: Grid de 3 columnas para cursos
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna con menú hamburguesa

## 🔮 Próximas Mejoras

- [ ] Integración con backend para autenticación real
- [ ] Sistema de búsqueda y filtros
- [ ] Carrito de compras
- [ ] Reproductor de video para vista previa
- [ ] Dashboard de usuario
- [ ] Sistema de reviews y comentarios
- [ ] Certificados descargables

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la plataforma:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuGitHub](https://github.com/tuusuario)

## 🙏 Agradecimientos

- Inspiración de plataformas como Udemy y Coursera
- Iconos de emojis para placeholder de imágenes
- Comunidad de React por los recursos y documentación

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
