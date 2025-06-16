// Títulos dinámicos para cada sección
const dynamicTitles = {
  inicio: "Iván Almestro - Full Stack Developer",
  "sobre-mi": "Sobre Mí - Iván Almestro",
  proyectos: "Mis Proyectos - Iván Almestro",
  contacto: "Contacto - Iván Almestro",
}

// Función para actualizar título dinámico
function updateDynamicTitle(section) {
  const title = document.getElementById("dynamic-title")
  if (title && dynamicTitles[section]) {
    title.textContent = dynamicTitles[section]
  }
}

// Función para actualizar navegación activa
function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = "inicio"

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id
    }
  })

  // Actualizar clases activas
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active")
    }
  })

  // Actualizar título
  updateDynamicTitle(currentSection)
}

// Función para navbar con scroll
function updateNavbarOnScroll() {
  const navbar = document.querySelector(".navbar")
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}

// Efecto de escritura con múltiples textos
const texts = [
  "Soy desarrollador Full Stack con experiencia en proyectos personales.",
  "Me gusta construir interfaces limpias y funcionales. =)",
  "Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.",
  "¡Listo para nuevos desafíos y proyectos emocionantes!",
]

let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false
const target = document.getElementById("typed-text")

function typeWriter() {
  const currentText = texts[currentTextIndex]

  if (isDeleting) {
    target.textContent = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
  } else {
    target.textContent = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
  }

  let typeSpeed = isDeleting ? 30 : 50

  if (!isDeleting && currentCharIndex === currentText.length) {
    typeSpeed = 2000 // Pausa al final
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % texts.length
    typeSpeed = 500 // Pausa antes del siguiente texto
  }

  setTimeout(typeWriter, typeSpeed)
}

// Crear partículas
function createParticle() {
  const particle = document.createElement("div")
  particle.className = "particle"
  particle.style.left = Math.random() * 100 + "%"
  particle.style.animationDuration = Math.random() * 3 + 2 + "s"
  particle.style.opacity = Math.random() * 0.5 + 0.1

  document.getElementById("particles").appendChild(particle)

  // Remover partícula después de la animación
  setTimeout(() => {
    particle.remove()
  }, 5000)
}

// Scroll suave para navegación
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  })
}

// Botón scroll to top
const scrollTopBtn = document.getElementById("scrollTop")

function toggleScrollTopBtn() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible")
  } else {
    scrollTopBtn.classList.remove("visible")
  }

  // Llamar a las nuevas funciones
  updateActiveNavigation()
  updateNavbarOnScroll()
}

// Formulario de contacto
function handleFormSubmit(e) {
  e.preventDefault()

  // Aquí puedes agregar la lógica para enviar el formulario
  // Por ahora solo mostramos un mensaje
  alert("¡Gracias por tu mensaje! Te responderé pronto.")

  // Limpiar formulario
  document.getElementById("contactForm").reset()
}

// Navegación móvil
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  const hamburger = document.querySelector(".hamburger")

  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Iniciar efecto de escritura mejorado
  typeWriter()

  // Llamar una vez para establecer estado inicial
  updateActiveNavigation()

  // Crear partículas cada 300ms
  setInterval(createParticle, 300)

  // Scroll events
  window.addEventListener("scroll", toggleScrollTopBtn)

  // Scroll to top button
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = this.getAttribute("href")
      if (target !== "#") {
        smoothScroll(target)
      }
    })
  })

  // Formulario de contacto
  document.getElementById("contactForm").addEventListener("submit", handleFormSubmit)

  // Scroll indicator en hero
  document.querySelector(".scroll-indicator").addEventListener("click", () => {
    smoothScroll("#sobre-mi")
  })

  // Hamburger menu
  document.querySelector(".hamburger").addEventListener("click", toggleMobileMenu)

  // Cerrar menú móvil al hacer click en un enlace
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.remove("active")
      document.querySelector(".hamburger").classList.remove("active")
    })
  })
})

// CSS adicional para menú móvil
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-link {
            font-size: 1.2rem;
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`

// Agregar CSS para menú móvil
const style = document.createElement("style")
style.textContent = mobileMenuCSS
document.head.appendChild(style)
