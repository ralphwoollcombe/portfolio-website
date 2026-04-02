import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const { isDarkMode } = useTheme()

  const linkClass = `text-sm no-underline transition-colors duration-300
                     ${isDarkMode
                       ? "text-white hover:text-l hover:ease-in-out hover:text-[#5D77AE]"
                       : "text-sky-1 hover:text-l hover:ease-in-out hover:text-sky-4"
                     }`

  return (
    <nav className="sticky top-0 h-screen w-full
                    flex flex-col items-center justify-between
                    py-18">
      <a href="#hero" className={linkClass}>
        Home
      </a>
      <a href="#about" className={linkClass}>
        About
      </a>
      <a href="#projects" className={linkClass}>
        Projects
      </a>
      <a href="#work" className={linkClass}>
        Work
      </a>
      <a href="#interests" className={linkClass}>
        Interests
      </a>
      <a href="#contact" className={linkClass}>
        Contact
      </a>
    </nav>
  )
}

export default Navbar