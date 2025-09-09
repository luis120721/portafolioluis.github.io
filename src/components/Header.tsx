'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

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

        {/* Navegación */}
        <ul className="flex space-x-8 items-center text-gray-700 dark:text-gray-200 font-medium uppercase">
          {[
            { href: "#about", label: "Sobre mí" },
            { href: "#skills", label: "Tecnologías" },
            { href: "#projects", label: "Proyectos" },
            { href: "#education", label: "Educación" },
            { href: "#courses", label: "Cursos" },
            { href: "#contact", label: "Contacto" },
          ].map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                {link.label}
              </Link>
            </motion.li>
          ))}

          
        </ul>
      </motion.nav>
    </header>
  )
}
