import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { FolderOpen, ExternalLink, GitBranch, Ship, Bird, Shirt, ChevronLeft, ChevronRight } from "lucide-react"
import { DiJavascript1, DiPython, DiNodejs, DiMongodb, DiPostgresql, DiHtml5, DiCss3, DiDjango } from "react-icons/di"
import { SiExpress } from "react-icons/si"

import bg3Light from "@/assets/bg-3.png"
import bg3Dark from "@/assets/bg-3-dark.png"
import miniCanopyLight from "@/assets/mini-canopy.png"
import miniCanopyDark from "@/assets/mini-canopy-dark.png"
import miniBranchesLight from "@/assets/mini-branches.png"
import miniBranchesDark from "@/assets/mini-branches-dark.png"

import Section from "./Section"

const ProjectCard = ({ title, description, icon: Icon, tags, github, isDarkMode }) => {
  return (
    <div
      className={`relative rounded-2xl m-6 p-6 md:m-8 backdrop-blur-sm max-w-2xl max-h-[280px] overflow-y-auto w-full
                  transition-all duration-500
                  ${isDarkMode
                    ? "bg-[#323C4F]/50 border-4 border-[#5D77AE]/80"
                    : "bg-[#FFFEFD]/50 border-4 border-[#ffb888]/70"
                  }`}
    >
      {/* Icon */}
      <div
        className={`absolute w-14 h-14 opacity-0 md:opacity-100 rounded-full flex items-center justify-center mb-5
                    ${isDarkMode ? "bg-[#5D77AE]/30" : "bg-[#2A442E]/20"}`}
      >
        <Icon
          className={`w-7 h-7 ${isDarkMode ? "text-[#8395BA]" : "text-[#2A442E]"}`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-2xl md:text-3xl font-bold mt-2 mb-3
                    ${isDarkMode ? "text-[#d5ddeb]" : "text-[#2A442E]"}`}
      >
        {title}
      </h3>

      {/* Two column layout */}
      <div className="grid grid-cols-3 gap-6">

        {/* Column 1: Stack + Image */}
        <div className="col-span-1 flex flex-col items-start mt-6 mb-6">
          {/* <img/> */}
          <h4
            className={`text-sm font-bold mb-4
                        ${isDarkMode ? "text-[#c9d3e8]" : "text-[#2A442E]"}`}
          >
            Stack:
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-[24px]
                            ${isDarkMode
                              ? "bg-[#5D77AE]/15 text-[#a8b8d7]"
                              : "bg-[#2A442E]/8 text-[#2A442E]/70"
                            }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Description + Buttons */}
        <div className="col-span-2 flex flex-col items-start">
          <p
            className={`text-left md:text-sm leading-relaxed mb-6
                        ${isDarkMode ? "text-[#b3bfd7]" : "text-[#002E0E]/60"}`}
          >
            {description}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium
                          transition-colors duration-300
                          ${isDarkMode
                            ? "text-[#c3cfe7] hover:text-[#FFFEFD]"
                            : "text-[#2A442E]/70 hover:text-[#2A442E]"
                          }`}
            >
              <GitBranch className="w-5 h-5" />
              Code
            </a>
            <a
              href="#"
              className={`flex items-center gap-2 text-sm font-medium
                          transition-colors duration-300
                          ${isDarkMode
                            ? "text-[#c3cfe7] hover:text-[#FFFEFD]"
                            : "text-[#2A442E]/70 hover:text-[#2A442E]"
                          }`}
            >
              <ExternalLink className="w-5 h-5" />
              ReadMe
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const { isDarkMode } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)

  const bg3 = isDarkMode ? bg3Dark : bg3Light
  const miniCanopy = isDarkMode ? miniCanopyDark : miniCanopyLight
  const miniBranches = isDarkMode ? miniBranchesDark : miniBranchesLight

  const projects = [
    {
      title: "BeetleShips",
      icon: Ship,
      description:
        "A unique and creative browser-based version of Battleships. Implemented DOM manipulation, event-driven architecture, and modular JavaScript design for an engaging gameplay experience.",
      tags: [<DiHtml5/>, <DiCss3/>, <DiJavascript1/>],
      github: "https://github.com/ralphwoollcombe/beetleships",
    },
    {
      title: "Twitcher",
      icon: Bird,
      description:
        "A full-stack birdwatching application built with Node.js, Express, and MongoDB. Features RESTful routes, full CRUD operations with Mongoose, and secure authentication with password encryption.",
      tags: [<DiNodejs/>, <SiExpress/>, <DiMongodb/>],
      github: "https://github.com/ralphwoollcombe/twitcher",
    },
    {
      title: "Drobe",
      icon: Shirt,
      description:
        "A full-stack wardrobe management app built with Python and PostgreSQL after just two weeks of learning Python. Features relational database schemas, CRUD functionality, and one-to-many and many-to-many model relationships.",
      tags: [<DiPython/>, <DiPostgresql/>, <DiDjango/>],
      github: "https://github.com/ralphwoollcombe/drobe",
    },
  ]

  const goTo = (index) => setCurrentIndex(index)
  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  const goNext = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))

  return (
    <Section id="projects" background={bg3}>

      {/* Tree decoration */}
      <img
        src={miniCanopy}
        alt=""
        className="absolute top-45 left-40 w-20/24 h-127 z-0 min-w-180 max-w-1400 pointer-events-none"
      />
      <img
        src={miniBranches}
        alt=""
        className="absolute top-130 left-25 w-18/24 h-127 z-0
                   min-w-180 max-w-1400 pointer-events-none"
      />

      <div className="relative z-10 w-full h-full flex flex-col
                      items-center justify-start px-8 pt-0 mt-22">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen
            className={`w-8 h-8
                        ${isDarkMode ? "text-[#ffffff]/80" : "text-[#2A442E]"}`}
          />
          <h2
            className={`text-3xl md:text-5xl font-bold tracking-wide
                        ${isDarkMode ? "text-[#FFFEFD]" : "text-[#2A442E]"}`}
            style={{
              textShadow: isDarkMode
                ? "0 0 15px rgba(131, 149, 186, 0.3)"
                : "0 0 15px rgba(42, 68, 46, 0.15)",
            }}
          >
            Projects
          </h2>
          </div>

         <div className="relative w-full flex justify-center py-0">
            <div
            className={`w-full max-w-3xl h-2 mb-8 rounded-full
                        ${isDarkMode
                        ? "bg-gradient-to-r from-[#5D77AE]/0 via-white/60 to-transparent"
                        : "bg-gradient-to-r from-[#98B19C]/0 via-[#98B19C]/90 to-transparent"
                        }`}
            />
            </div>
        <p
          className={`text-base md:text-lg mb-10 text-center max-w-xxl
                      ${isDarkMode ? "text-[#ffffff]/80" : "text-[#002E0E]/60"}`}
        >
          Full-stack applications built during General Assembly's 450+ hour
          immersive bootcamp, working in Agile sprints with daily stand-ups
          and collaborative code reviews.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center gap-6 w-full max-w-3xl pt-10 pr-10">

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                        transition-all duration-300 hover:scale-110
                        ${isDarkMode
                          ? "bg-[#42547B]/40 text-[#c4ccdd] hover:bg-[#42547B]/60 border border-4 border-[#5D77AE]/80"
                          : "bg-[#BED1C1]/40 text-[#2A442E] hover:bg-[#BED1C1]/60 border border-4 border-[#ffb888]/70"
                        }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Card area */}
          <div className="flex-1 flex justify-center overflow-hidden">
            <div
              key={currentIndex}
              className="animate-fade-in w-full flex justify-center"
            >
              <ProjectCard
                title={projects[currentIndex].title}
                icon={projects[currentIndex].icon}
                description={projects[currentIndex].description}
                tags={projects[currentIndex].tags}
                github={projects[currentIndex].github}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                        transition-all duration-300 hover:scale-110
                        ${isDarkMode
                          ? "bg-[#42547B]/40 text-[#c4ccdd] hover:bg-[#42547B]/60 border border-4 border-[#5D77AE]/80"
                          : "bg-[#BED1C1]/40 text-[#2A442E] hover:bg-[#BED1C1]/60 border border-4 border-[#ffb888]/70"
                        }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dot indicators */}
        <div className="flex gap-3 mt-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                          ${currentIndex === index
                            ? isDarkMode
                              ? "bg-[#8395BA] scale-125"
                              : "bg-[#df9d62] scale-125"
                            : isDarkMode
                              ? "bg-[#5D77AE]/60 hover:bg-[#5D77AE]/50"
                              : "bg-[#98B19C]/60 hover:bg-[#98B19C]/60"
                          }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p
          className={`mt-2 text-sm font-medium
                      ${isDarkMode ? "text-[#8395BA]/60" : "text-[#98B19C]"}`}
        >
          {currentIndex + 1} / {projects.length}
        </p>

      </div>
    </Section>
  )
}

export default ProjectsSection