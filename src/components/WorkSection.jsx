import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

import bg4Light from "@/assets/bg-4.png"
import bg4Dark from "@/assets/bg-4-dark.png"

import Section from "./Section"

const TimelineNode = ({ exp, index, isActive, onClick, isDarkMode }) => {
  const isLeft = index % 2 === 0

  const cardClass = `cursor-pointer transition-all duration-300
                     max-w-[160px] md:max-w-[200px] lg:max-w-[220px]
                     rounded-xl px-2.5 py-2 md:px-3 md:py-2.5 backdrop-blur-sm
                     ${isActive ? "scale-[1.05] border-3" : "hover:scale-[1.01]"}
                     ${isDarkMode
                       ? `bg-[#323C4F]/50 border
                          ${isActive ? "border-[#e8e8e8]/70" : "border-[#5D77AE]/20"}`
                       : `bg-[#FFFEFD]/50 border
                          ${isActive ? "border-[#2A442E]/60" : "border-[#BED1C1]/30"}`
                     }`

  return (
    <div className="relative flex items-center w-full">

      {/* Left card or spacer */}
      <div className={`flex-1 ${isLeft ? "pr-4 md:pr-6" : ""}`}>
        {isLeft && (
          <div
            onClick={onClick}
            className={`ml-auto text-center ${cardClass}`}
          >
            <span
              className={`inline-block text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full mb-1
                          ${isDarkMode
                            ? "bg-[#5D77AE]/20 text-[#8395BA]"
                            : "bg-[#2A442E]/10 text-[#2A442E]"
                          }`}
            >
              {exp.date}
            </span>
            <h4
              className={`text-[10px] md:text-xs font-bold leading-tight
                          ${isDarkMode ? "text-[#FFFEFD]" : "text-[#2A442E]"}`}
            >
              {exp.title}
            </h4>
            <p
              className={`text-[9px] md:text-[10px] mt-0.5
                          ${isDarkMode ? "text-[#8395BA]" : "text-[#002E0E]/60"}`}
            >
              {exp.company}
            </p>
          </div>
        )}
      </div>

      {/* Dot */}
      <div
        onClick={onClick}
        className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer z-10 shrink-0
                    transition-all duration-300
                    ${isActive
                      ? isDarkMode
                        ? "bg-[#e8e8e8]/60 scale-150 shadow-[0_0_12px_rgba(131,149,186,0.5)]"
                        : "bg-[#2A442E]/60 scale-150 shadow-[0_0_12px_rgba(255,184,136,0.5)]"
                      : isDarkMode
                        ? "bg-[#5D77AE]/50 hover:bg-[#8395BA]/70"
                        : "bg-[#98B19C] hover:bg-[#2A442E]/70"
                    }`}
      />

      {/* Right card or spacer */}
      <div className={`flex-1 ${!isLeft ? "pl-4 md:pl-6" : ""}`}>
        {!isLeft && (
          <div
            onClick={onClick}
            className={`mr-auto text-center ${cardClass}`}
          >
            <span
              className={`inline-block text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full mb-1
                          ${isDarkMode
                            ? "bg-[#5D77AE]/20 text-[#8395BA]"
                            : "bg-[#2A442E]/10 text-[#2A442E]"
                          }`}
            >
              {exp.date}
            </span>
            <h4
              className={`text-[10px] md:text-xs font-bold leading-tight
                          ${isDarkMode ? "text-[#FFFEFD]" : "text-[#2A442E]"}`}
            >
              {exp.title}
            </h4>
            <p
              className={`text-[9px] md:text-[10px] mt-0.5
                          ${isDarkMode ? "text-[#8395BA]" : "text-[#002E0E]/60"}`}
            >
              {exp.company}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

const WorkSection = () => {
  const { isDarkMode } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const bg4 = isDarkMode ? bg4Dark : bg4Light

  const experiences = [
    {
      title: "Software Engineering Bootcamp",
      company: "General Assembly",
      date: "2025 — 2026",
      location: "Remote",
      description: `In late 2025, I took the leap into software engineering full-time, enrolling in General Assembly's intensive 450+ hour bootcamp. It was one of the most challenging and rewarding things I've done, going from writing my first lines of JavaScript to building and deploying full-stack applications in just a few months.

I worked in Agile sprints with daily stand-ups, pair programming and collaborative code reviews, which quickly taught me how real development teams operate. Every project started with proper planning using wireframes, ERDs, and user stories before writing a single line of code.

By the end, I'd delivered four projects: BeetleShips, a creative browser-based game; Twitcher, a full-stack birdwatching app using Express and MongoDB; WorldQuest, a group MERN-stack application where we collaborated through Git branching and pull requests; and finally Drobe, a Python and PostgreSQL community wardrobe app I built after just two weeks of learning Python. Each project pushed me further and cemented my confidence that this is the right path for me.`,
    },
    {
      title: "Founder & Fashion Designer",
      company: "Cheek",
      date: "2025 — Present",
      location: "London",
      description: `Cheek started as a passion project and grew into a fully operational independent fashion brand centred on queer expression. I've designed, produced and delivered over 100 original garments, handling everything from sourcing and prototyping to production workflows and customer delivery.

What surprised me most was how much of the work was about building systems. I created structured workflows to track commissions, materials, deadlines and fulfilment, which dramatically improved my turnaround consistency. I built the brand identity from scratch, grew an engaged niche audience through iterative content testing, and managed all pricing strategy, budgeting and supplier coordination to keep things sustainable.

Running Cheek taught me end-to-end product thinking in a way nothing else could have. Translating customer feedback into product iterations, refining designs based on real behaviour and demand - it's remarkably similar to building user-focused software. The entrepreneurial mindset, the systems design, and the independent execution I developed here have directly shaped how I approach engineering problems.`,
    },
     {
      title: "Learning Support Assistant",
      company: "Haberdashers' Academies Trust",
      date: "2024 — 2025",
      location: "London",
      description: `Between leaving television and starting my engineering bootcamp, I spent ten months as a Learning Support Assistant, working with KS3 students with additional learning needs. It was a role that stretched me in unexpected ways.

I designed and ran small-group reading interventions, broke down complex material into accessible formats, and adapted my approach constantly based on individual student needs. The core challenge was taking something complicated and making it understandable for someone with a completely different frame of reference, a skill I now use every day when writing clean code.`,
    },
    {
      title: "Documentary Researcher & On-Location Director",
      company: "Offspring Films (Apple TV+)",
      date: "2020 — 2023",
      location: "Bristol & International",
      description: `I spent over three years working on Earthsounds, a 12-part global natural history series for Apple TV+, working both from a desk in Bristol and on film shoots in the Amazon rainforest and the Himalayas.

As a Researcher, I synthesised vast amounts of scientific literature into clear narrative treatments that shaped multiple international episodes. I built relationships with scientists around the world, translating complex bio-acoustic research into accessible, compelling storytelling. I also produced detailed pre-production documents and directed early-stage edits in post-production, refining narrative structure through iterative review.

As an On-Location Director, I led multi-week shoots in some of the most remote and challenging environments on earth, managing crews of up to 10. Every day required rapid decision-making, adapting to unpredictable weather, wildlife behaviour and operational constraints while keeping complex shoots on schedule and within budget. This role demanded the kind of structured planning, real-time problem-solving and calm leadership under pressure that I now bring to technical challenges.`,
    },
    {
      title: "Documentary Researcher",
      company: "Plimsoll Productions",
      date: "2019 — 2020",
      location: "Bristol",
      description: `Plimsoll Productions was where I started my career in natural history TV. I contributed to some incredible series: Animal for Netflix, SuperNatural for NatGeo, and Night on Earth for Netflix.

I researched and synthesised scientific and narrative source material to support episode development, produced structured treatments, storyboards and pitch decks, and conducted detailed fact-checking to ensure both scientific accuracy and narrative integrity. Working across development, production and post-production teams taught me how to communicate clearly across disciplines and maintain consistency in complex, collaborative projects.

It was here that I developed the disciplined research practices, structured documentation habits, and meticulous attention to detail that have carried through everything I've done since, including my transition into software engineering.`,
    },
  ]

  return (
    <Section id="work" background={bg4}>

      <div className="relative z-10 w-full h-full flex flex-col
                      items-center justify-start px-4 md:px-8 pt-12">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <Briefcase
            className={`w-8 h-8 ${isDarkMode ? "text-[#e3e8f1]" : "text-[#2A442E]"}`}
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
            Experience
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
          className={`text-base md:text-lg mb-8 text-center max-w-xl
                      ${isDarkMode ? "text-[#c6cdda]" : "text-[#002E0E]/60"}`}
        >
          Click a role to find out more!
        </p>

        {/* Timeline + Detail */}
        <div className="flex gap-6 md:gap-8 max-w-5xl w-full items-start">

          {/* Left: Vertical zigzag timeline */}
          <div className="relative flex flex-col gap-3 flex-[2] min-w-0">

            {/* Vertical center line */}
            <div
              className={`absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2
                          ${isDarkMode
                            ? "bg-gradient-to-b from-[#5D77AE]/80 via-[#5D77AE] to-transparent"
                            : "bg-gradient-to-b from-[#98B19C]/50 via-[#98B19C]/30 to-transparent"
                          }`}
            />

            {/* Nodes */}
            {experiences.map((exp, index) => (
              <TimelineNode
                key={index}
                exp={exp}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="flex-[2] min-w-0 pt-2">
            <div
              key={activeIndex}
              className={`animate-fade-in w-full rounded-xl px-4 md:px-6 py-4 md:py-5
                          backdrop-blur-sm max-h-[500px] overflow-y-auto
                          ${isDarkMode
                            ? "bg-[#323C4F]/30 border-4 border-[#e8e8e8]/60"
                            : "bg-[#FFFEFD]/30 border-4 border-[#2A442E]/60"
                          }`}
            >
              <h3
                className={`text-base md:text-lg font-bold mb-1
                            ${isDarkMode ? "text-[#FFFEFD]" : "text-[#2A442E]"}`}
              >
                {experiences[activeIndex].title}
              </h3>
              <p
                className={`text-xs md:text-sm font-medium mb-1
                            ${isDarkMode ? "text-[#9ea9c0]" : "text-[#002E0E]/70"}`}
              >
                {experiences[activeIndex].company}
              </p>
              <div className="flex items-center gap-1 pt-2 mb-2 md:mb-2">
                <MapPin
                  className={`w-3 h-3 ${isDarkMode ? "text-[#4A6A7B]" : "text-[#98B19C]"}`}
                />
                <span
                  className={`text-[10px] md:text-xs
                              ${isDarkMode ? "text-[#4A6A7B]" : "text-[#98B19C]"}`}
                >
                  {experiences[activeIndex].location}
                </span>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3">
                {experiences[activeIndex].description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[12px] md:text-sm leading-relaxed
                                ${isDarkMode ? "text-[#dfe1e6]/80" : "text-[#002E0E]/60"}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default WorkSection