import ThemeToggle from "../components/ThemeToggle"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import WorkSection from "../components/WorkSection"
import InterestsSection from "../components/InterestsSection"
import ContactSection from "../components/ContactSection"
import Navbar from "../components/NavBar"
import treeTrunk from "@/assets/tree-trunk.png"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <ThemeToggle />

      {/* Everything with the trunk */}
      <div className="relative">

        {/* Trunk image - spans from hero overlap down to interests */}
        <img
          src={treeTrunk}
          alt=""
          className="absolute top-[960px] left-0 h-[calc(100%-960px)] w-60 z-10
                     pointer-events-none"
        />

        {/* Hero - full width, trunk overlaps bottom */}
        <HeroSection />

        {/* About - no nav yet */}

        {/* Nav spans these sections only */}
        <div className="relative">

          {/* Nav wrapper - absolute so no space taken */}
          <div className="absolute top-0 left-0 h-full w-[80px] z-20">
            <Navbar />
          </div>

          {/* Sections the nav spans */}
            <AboutSection />
            <ProjectsSection />
            <WorkSection />
            <InterestsSection />

        </div>

      </div>

      {/* Contact / Roots - no trunk, no nav */}
      <ContactSection />

    </div>
  )
}

export default Home