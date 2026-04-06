import { useTheme } from "../context/ThemeContext"

import bg1Light from "@/assets/bg-1.png"
import bg1Dark from "@/assets/bg-1-dark.png"
import treeCanopyLight from "@/assets/tree-canopy.png"
import treeCanopyDark from "@/assets/tree-canopy-dark.png"
import treeBranchesLight from "@/assets/tree-branches.png"
import treeBranchesDark from "@/assets/tree-branches-dark.png"

import Section from "./Section"
import FallingLeaf from "./FallingLeaf"

const HeroSection = () => {
  const { isDarkMode } = useTheme()

  const bg1 = isDarkMode ? bg1Dark : bg1Light
  const treeCanopy = isDarkMode ? treeCanopyDark : treeCanopyLight
  const treeBranches = isDarkMode ? treeBranchesDark : treeBranchesLight

  return (
    <Section id="hero" background={bg1} fullWidth={true}>
      <div className="relative w-full h-full flex items-center justify-center">

        {/* === Canopy with rustle animation === */}
        <div className="absolute top-40 left-0 w-23/24 h-127
                        min-w-240 max-w-1400 z-0 animate-rustle
                        origin-bottom">
          <img
            src={treeCanopy}
            alt=""
            className="w-full h-full"
          />
        </div>

        <img
          src={treeBranches}
          alt=""
          className="absolute top-140 left-0 w-22/24 h-127 z-0
                     min-w-230 max-w-1400"
        />

        {/* === Falling leaves / fireflies === */}
        <FallingLeaf isDarkMode={isDarkMode} delay={0} left="15%" size={18} />
        <FallingLeaf isDarkMode={isDarkMode} delay={2.5} left="30%" size={14} />
        <FallingLeaf isDarkMode={isDarkMode} delay={4} left="55%" size={20} />
        <FallingLeaf isDarkMode={isDarkMode} delay={6.5} left="70%" size={12} />
        <FallingLeaf isDarkMode={isDarkMode} delay={8} left="85%" size={16} />
        <FallingLeaf isDarkMode={isDarkMode} delay={1.5} left="45%" size={15} />
        <FallingLeaf isDarkMode={isDarkMode} delay={3.5} left="25%" size={17} />
        <FallingLeaf isDarkMode={isDarkMode} delay={7} left="60%" size={13} />

        {/* === Main content === */}
        <div className="container max-w-5xl mx-auto text-center z-10
                        top-52 relative pt-32">

          {/* Title */}
          <div className="space-y-4">
            <h1
              className={`text-4xl md:text-6xl font-bold tracking-wide text-[#fffcf9]`}
              style={{
                textShadow: isDarkMode
                  ? "0 0 20px rgba(131, 149, 186, 0.3), 0 2px 4px rgba(0,0,0,0.5)"
                  : "0 2px 4px rgba(42, 68, 46, 0.3), 0 0 20px rgba(255, 216, 193, 0.2)"
              }}
            >
              Ralph Woollcombe
            </h1>
            <p
              className={`text-lg md:text-xl font-light tracking-widest uppercase
                          ${isDarkMode
                            ? "text-[#8395BA]"
                            : "text-[#FFE4D4]"
                          }`}
            >
              Software Engineer
            </p>
          </div>

          {/* Subtitle / tagline */}
          <p
            className={`mt-6 text-sm md:text-base max-w-lg mx-auto leading-relaxed
                        ${isDarkMode
                          ? "text-[#5D77AE]/80"
                          : "text-[#FFEEE4]/80"
                        }`}
          >
            Biologist · Wildlife Filmmaker · Fashion Designer · Set Designer
          </p>

          {/* Fruit buttons - placeholder for future drop animation */}
          <div className="flex gap-8 md:gap-24 lg:gap-35 mt-12 justify-center">
            <a
              href="#about"
              className={`w-16 h-16 rounded-full flex items-center justify-center
                          text-xs font-semibold transition-all duration-300
                          hover:scale-110 cursor-pointer
                          ${isDarkMode
                            ? "bg-[#5D77AE]/80 text-[#FFFEFD] hover:bg-[#8395BA] shadow-[0_0_15px_rgba(93,119,174,0.3)]"
                            : "bg-[#FFD8C1]/80 text-[#2A442E] hover:bg-[#FFEEE4] shadow-[0_0_15px_rgba(255,216,193,0.3)]"
                          }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`w-16 h-16 rounded-full flex items-center justify-center
                          text-xs font-semibold transition-all duration-300
                          hover:scale-110 cursor-pointer
                          ${isDarkMode
                            ? "bg-[#5D77AE]/80 text-[#FFFEFD] hover:bg-[#8395BA] shadow-[0_0_15px_rgba(93,119,174,0.3)]"
                            : "bg-[#FFD8C1]/80 text-[#2A442E] hover:bg-[#FFEEE4] shadow-[0_0_15px_rgba(255,216,193,0.3)]"
                          }`}
            >
              Projects
            </a>
            <a
              href="#work"
              className={`w-16 h-16 rounded-full flex items-center justify-center
                          text-xs font-semibold transition-all duration-300
                          hover:scale-110 cursor-pointer
                          ${isDarkMode
                            ? "bg-[#5D77AE]/80 text-[#FFFEFD] hover:bg-[#8395BA] shadow-[0_0_15px_rgba(93,119,174,0.3)]"
                            : "bg-[#FFD8C1]/80 text-[#2A442E] hover:bg-[#FFEEE4] shadow-[0_0_15px_rgba(255,216,193,0.3)]"
                          }`}
            >
              Work
            </a>
             <a
              href="#interests"
              className={`w-16 h-16 rounded-full flex items-center justify-center
                          text-xs font-semibold transition-all duration-300
                          hover:scale-110 cursor-pointer
                          ${isDarkMode
                            ? "bg-[#5D77AE]/80 text-[#FFFEFD] hover:bg-[#8395BA] shadow-[0_0_15px_rgba(93,119,174,0.3)]"
                            : "bg-[#FFD8C1]/80 text-[#2A442E] hover:bg-[#FFEEE4] shadow-[0_0_15px_rgba(255,216,193,0.3)]"
                          }`}
            >
              Interests
            </a>
            <a
              href="#contact"
              className={`w-16 h-16 rounded-full flex items-center justify-center
                          text-xs font-semibold transition-all duration-300
                          hover:scale-110 cursor-pointer
                          ${isDarkMode
                            ? "bg-[#5D77AE]/80 text-[#FFFEFD] hover:bg-[#8395BA] shadow-[0_0_15px_rgba(93,119,174,0.3)]"
                            : "bg-[#FFD8C1]/80 text-[#2A442E] hover:bg-[#FFEEE4] shadow-[0_0_15px_rgba(255,216,193,0.3)]"
                          }`}
            >
              Contact
            </a>
          </div>

          {/* Scroll indicator */}
          {/* <div className="mt-16 animate-float">
            <div
              className={`w-6 h-10 rounded-full border-2 mx-auto
                          flex items-start justify-center pt-2
                          ${isDarkMode
                            ? "border-[#8395BA]/50"
                            : "border-[#FFFEFD]/50"
                          }`}
            >
              <div
                className={`w-1.5 h-3 rounded-full animate-float
                            ${isDarkMode
                              ? "bg-[#8395BA]"
                              : "bg-[#FFFEFD]"
                            }`}
              />
            </div>
          </div> */}

        </div>
      </div>
    </Section>
  )
}

export default HeroSection