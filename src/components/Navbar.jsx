const Navbar = () => {
  return (
    <nav className="sticky top-0 h-screen w-full
                    flex flex-col items-center justify-between
                    py-16">
      <a
        href="#hero"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        Projects
      </a>
      <a
        href="#work"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        Work
      </a>
      <a
        href="#interests"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        Interests
      </a>
      <a
        href="#contact"
        className="text-white text-sm no-underline
                   hover:text-primary transition-colors"
      >
        Contact
      </a>
    </nav>
  )
}

export default Navbar