'use client'
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { 
  SiSharp, SiPython, SiJavascript, SiPhp,
  SiSpringboot, SiDotnet, SiNodedotjs, SiExpress,
  SiReact, SiThymeleaf, SiHtml5, SiCss3, SiBootstrap,
  SiMysql, SiSqlite
} from 'react-icons/si'

type Skill = {
  name: string
  icon: ReactNode
}

const skillCategories: { title: string, skills: Skill[] }[] = [
  {
    title: 'Lenguajes',
    skills: [

      { name: 'C#', icon: <SiSharp size={40} color="#239120" /> },
      { name: 'Python', icon: <SiPython size={40} color="#306998" /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: 'PHP', icon: <SiPhp size={40} color="#787CB5" /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot size={40} color="#6DB33F" /> },
      { name: 'Spring Security', icon: <SiSpringboot size={40} color="#6DB33F" /> },
      { name: 'ASP.NET Core', icon: <SiDotnet size={40} color="#512BD4" /> },
      { name: 'Entity Framework', icon: <SiDotnet size={40} color="#512BD4" /> },
      { name: 'Node.js', icon: <SiNodedotjs size={40} color="#3C873A" /> },
      { name: 'Express.js', icon: <SiExpress size={40} color="#000000" /> },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact size={40} color="#61DAFB" /> },
      { name: 'Thymeleaf', icon: <SiThymeleaf size={40} color="#005F0F" /> },
      { name: 'HTML', icon: <SiHtml5 size={40} color="#E34F26" /> },
      { name: 'CSS', icon: <SiCss3 size={40} color="#1572B6" /> },
      { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" /> },
    ]
  },
  {
    title: 'Bases de datos',
    skills: [
      { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
      { name: 'SQLite', icon: <SiSqlite size={40} color="#003B57" /> },
    ]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
          Habilidades y Tecnologías
        </h2>

        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-900 dark:text-white font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
