'use client'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import SkillsSection from '../components/SkillIcon'

export default function Page() {
  return (
    <div className="scroll-smooth">
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-gray-900 dark:text-white px-4"
        style={{ backgroundImage: 'url(/fondo.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        <div className="relative flex flex-col justify-center items-center z-10 text-center">
          <motion.img
            src="/foto.jpg"
            alt="Luis Martinez"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-40 h-40 rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg mb-6 object-cover"
          />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            Luis Arturo Leal Martinez
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl mb-6"
          >
            Full Stack Developer | Ingeniero en Sistemas
          </motion.p>
        </div>

          {/* Botón premium para descargar CV */}
        <motion.a
          href="/CV_LuisArturoLealMartinez.pdf"
          download
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
             boxShadow: "0px 0px 20px rgba(245, 246, 248, 0.8)" 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="relative px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden"
        >
          {/* Capa de brillo animado */}
          <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-lg"></span>

          <span className="relative z-10">Descargar CV</span>
        </motion.a>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="py-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sobre mí</h2>
        <p className="text-center">
        Ingeniero en Sistemas Computacionales con sólida experiencia en desarrollo de software FullStack, redes y seguridad informática.
        Dominio de C#, Java y JavaScript, así como tecnologías .NET, React.js, Node.js, MySQL, HTML5, CSS3 y Bootstrap. Hábil en el
        consumo de APIs RESTful, desarrollo de interfaces dinámicas y creación de soluciones enfocadas en eficiencia y automatización.</p>
      </motion.section>

      {/* Skills */}
      <SkillsSection />

      {/* Projects */}
      <motion.section
        id="projects"
        className="py-20 px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
  <ProjectCard 
    title="Sistema Web de venta de boletos y corridas de autobuses"
    description="Desarrollé un sistema web con C#, ASP.NET Core MVC, Entity Framework Core, MySQL, Razor, JavaScript, HTML5, CSS3 y Bootstrap. Implementé búsqueda de corridas, asientos interactivos, compras, autenticación y patrón MVC con diseño responsivo."
    
  />
  <ProjectCard 
    title="Aplicación Meteorológica Web con Flask y API REST"
    description="Desarrollé app meteorológica web con Flask (Python), consumo de API RESTful (OpenWeatherMap) y JavaScript. Incluye geolocalización, historial, interfaz dinámica y caché para optimización."
    
  />
  <ProjectCard 
    title="Aplicación de detección inteligente de cubrebocas"
    description="Desarrollé un sistema de detección de cubrebocas en tiempo real con Python, OpenCV, TensorFlow/Keras y pygame, usando visión computacional e IA para alertas visuales y sonoras."
    
  />
  <ProjectCard 
    title="Tienda en línea con React.js + Node.js"
    description="Implementé una tienda en línea con React.js + Redux, backend en Node.js con Express, MySQL, autenticación, carrito de compras y pasarela de pagos simulada."
    
  />
  <ProjectCard 
    title="App móvil de gestión de almacenes"
    description="Desarrollé una app móvil en Android Studio usando lenguaje Java y base de datos SQLite para gestión de almacenes e informes."
    
  />
  <ProjectCard 
    title="Sistema Punto de Venta"
    description="Desarrollé un sistema punto de venta con Java, Spring Boot, Spring Security (JWT/OAuth2), MySQL, Spring Data JPA, Thymeleaf, Bootstrap, JavaScript y Maven. Módulos de productos, ventas e inventario, autenticación por roles, transacciones y validación."
    
  />
</div>
      </motion.section>

      <Footer />
    </div>
  )
}
