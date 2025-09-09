'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "./ThemeContext"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Tecnologías" },
    { href: "#projects", label: "Proyectos" },
    { href: "#education", label: "Educación" },
    { href: "#courses", label: "Cursos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-sans tracking-wide"
      >
        {/* Logo / Nombre */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
          Luis Martinez
        </h1>

        {/* Icono menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navegación */}
        <ul className={`
          md:flex md:space-x-8 md:items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent transition-all duration-300 ease-in-out
          ${isOpen ? "block" : "hidden"}
        `}>
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="md:inline-block text-center py-4 md:py-0"
            >
              <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                {link.label}
              </Link>
            </motion.li>
          ))}

          {/* Botón Dark Mode */}
          <li className="md:inline-block text-center py-4 md:py-0">
            <button
              onClick={toggleDarkMode}
              className="ml-2 text-gray-900 dark:text-white hover:text-yellow-400 transition-colors"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>
      </motion.nav>
    </header>
  )
}
