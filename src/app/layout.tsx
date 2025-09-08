import './globals.css'
import { ThemeProvider } from '../components/ThemeContext'

export const metadata = {
  title: 'Luis Martinez - Portafolio',
  description: 'Portafolio profesional de Luis Martinez',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}