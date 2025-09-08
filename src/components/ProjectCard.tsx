import { motion } from "framer-motion"

type ProjectCardProps = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  const Wrapper = link ? motion.a : motion.div

  return (
    <Wrapper
      {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="border p-6 rounded-lg shadow hover:shadow-xl transition bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </Wrapper>
  )
}
