import ThemeToggle from "../components/ThemeToggle"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import WorkSection from "../components/WorkSection"
import InterestsSection from "../components/InterestsSection"
import ContactSection from "../components/ContactSection"
import Navbar from "../components/NavBar"
import treeTrunkLight from "@/assets/tree-trunk.png"
import treeTrunkDark from "@/assets/tree-trunk-dark.png"
import { useTheme } from "../context/ThemeContext"

const Home = () => {
  const { isDarkMode } = useTheme()
  const treeTrunk = isDarkMode ? treeTrunkDark : treeTrunkLight

  
  return (
    <div className="min-h-screen bg-background text-foreground">

      <ThemeToggle />

      <div className="relative">

        <img
          src={treeTrunk}
          alt=""
          className="absolute top-[960px] left-0 h-1130 w-60 z-10
                     pointer-events-none"
        />

        <HeroSection />

        <div className="relative">

          <div className="absolute top-0 left-0 h-full w-[80px] z-20">
            <Navbar />
          </div>

          <AboutSection />
          <ProjectsSection />
          <WorkSection />
          <InterestsSection />

        </div>

      </div>

      <ContactSection />

    </div>
  )
}

export default Home