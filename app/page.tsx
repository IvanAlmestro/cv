"use client"

import { useEffect, useRef, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Users,
  MessageCircle,
  ChevronDown,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Portfolio() {
  const [typedText, setTypedText] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const fullText =
    "Soy desarrollador Full Stack con experiencia en proyectos personales. Me gusta construir interfaces limpias y funcionales. =)"

  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Typing effect
    let i = 0
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 50)

    // Scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)

    // Particles animation
    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDuration = Math.random() * 3 + 2 + "s"
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString()
      particlesRef.current.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 5000)
    }

    const particleInterval = setInterval(createParticle, 300)

    return () => {
      clearInterval(typeTimer)
      clearInterval(particleInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const frontendSkills = ["JavaScript", "React", "Angular", "TypeScript", "SCSS", "CSS", "HTML"]
  const backendSkills = ["Java", "PHP", "PostgreSQL", "MySQL", "MongoDB"]
  const softSkills = ["Teamwork", "Responsibility", "Communication", "Integrity"]

  const projects = [
    {
      title: "Página de Juegos",
      description: "Página de juegos con cards funcionales y juego 4 en línea completamente funcional",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "#",
    },
    {
      title: "Tienda de Ropa",
      description: "Desarrollo en Angular de una tienda básica con carrito de compras y gestión de productos",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Angular", "TypeScript", "SCSS"],
      link: "#",
    },
    {
      title: "Proyecto Portfolio",
      description: "Portfolio personal desarrollado con las últimas tecnologías web",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Next.js", "Tailwind"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Particles Background */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Iván Almestro
            </Link>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("inicio")} className="hover:text-blue-400 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection("sobre-mi")} className="hover:text-blue-400 transition-colors">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection("proyectos")} className="hover:text-blue-400 transition-colors">
                Proyectos
              </button>
              <button onClick={() => scrollToSection("contacto")} className="hover:text-blue-400 transition-colors">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="text-center space-y-8 px-4">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Iván Almestro
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">Full Stack Developer</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-yellow-300 leading-relaxed min-h-[3rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/IvanAlmestro"
                target="_blank"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/IvanAlmestro"
                target="_blank"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("sobre-mi")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="sobre-mi" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Code Box */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl">
              <div className="bg-gray-800/80 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">developer.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400">
                  const <span className="text-red-400">developer</span> = &#123;
                </div>
                <div className="ml-4 mt-2">
                  <div className="text-blue-400">frontend: [</div>
                  <div className="ml-4 flex flex-wrap gap-1">
                    {frontendSkills.map((skill, index) => (
                      <span key={index} className="text-green-400">
                        "{skill}"{index < frontendSkills.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-400">],</div>
                </div>
                <div className="ml-4 mt-2">
                  <div className="text-blue-400">backend: [</div>
                  <div className="ml-4 flex flex-wrap gap-1">
                    {backendSkills.map((skill, index) => (
                      <span key={index} className="text-green-400">
                        "{skill}"{index < backendSkills.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-400">],</div>
                </div>
                <div className="ml-4 mt-2">
                  <div className="text-blue-400">softSkills: [</div>
                  <div className="ml-4 flex flex-wrap gap-1">
                    {softSkills.map((skill, index) => (
                      <span key={index} className="text-green-400">
                        "{skill}"{index < softSkills.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-400">],</div>
                </div>
                <div className="ml-4 mt-2">
                  <span className="text-blue-400">available: </span>
                  <span className="text-purple-400">true</span>
                </div>
                <div className="text-purple-400">&#125;</div>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-400">
                    <Code className="mr-2 h-5 w-5" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Experiencia en tecnologías modernas de frontend para crear interfaces atractivas y funcionales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Database className="mr-2 h-5 w-5" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Conocimientos sólidos en tecnologías backend y bases de datos.</p>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Users className="mr-2 h-5 w-5" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Habilidades interpersonales que complementan mis capacidades técnicas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Proyectos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Proyecto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contacto
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">¡Hablemos!</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme si tienes alguna
                  pregunta o propuesta.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">ivan.almestro@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Phone className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-gray-300">(+54) 2284512075</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-gray-300">Argentina</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com/IvanAlmestro"
                  target="_blank"
                  className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ivann-almestro"
                  target="_blank"
                  className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Envíame un mensaje</CardTitle>
                <CardDescription className="text-gray-300">
                  Completa el formulario y te responderé lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Nombre</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Asunto</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Mensaje</label>
                  <Textarea
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Iván Almestro
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer apasionado por crear soluciones tecnológicas innovadoras y experiencias de usuario
                excepcionales.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("sobre-mi")}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Sobre Mí
                </button>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/IvanAlmestro"
                  target="_blank"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ivann-almestro"
                  target="_blank"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 text-sm">
                  <Mail className="inline h-4 w-4 mr-1" />
                  ivan.almestro@hotmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Iván Almestro. Todos los derechos reservados.</p>
            <div className="flex justify-center items-center mt-2 space-x-4 text-sm text-gray-500">
              <span>Hecho con</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>y mucho café</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: float 5s infinite linear;
          pointer-events: none;
        }
        
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
