import { useTheme } from "../context/ThemeContext"
import { User, MapPin, Heart, Sparkles, Code, Film, Scissors } from "lucide-react"

import bg2Light from "@/assets/bg-2.png"
import bg2Dark from "@/assets/bg-2-dark.png"
import headshot from "@/assets/headshot.png"

import Section from "./Section"

const AboutSection = () => {
  const { isDarkMode } = useTheme()
  const bg2 = isDarkMode ? bg2Dark : bg2Light

  return (
    <Section id="about" background={bg2} >

      <div className="relative z-10 w-full h-full flex flex-col
                      items-center justify-center px-6 mt-25">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <User
            className={`w-8 h-8 ${isDarkMode ? "text-[#d6dbe5]" : "text-[#2A442E]"}`}
          />
          <h2
            className={`text-3xl md:text-5xl font-bold tracking-wide
                        ${isDarkMode ? "text-[#ffffff]/80" : "text-[#2A442E]"}`}
            style={{
              textShadow: isDarkMode
                ? "0 0 15px rgba(131, 149, 186, 0.3)"
                : "0 0 15px rgba(42, 68, 46, 0.15)"
            }}
          >
            About Me
          </h2>
        </div>

        <div className="relative w-full flex justify-center py-0">
        <div
            className={`w-full max-w-3xl h-2 mb-12 rounded-full
                        ${isDarkMode
                        ? "bg-gradient-to-r from-[#5D77AE]/0 via-white/60 to-transparent"
                        : "bg-gradient-to-r from-[#98B19C]/0 via-[#98B19C]/90 to-transparent"
                        }`}
        />
        </div>

        {/* Bio card */}
        <div className="grid grid-cols-3 gap-6 2xl:mr-40 2xl:ml-40">
            <div className="col-span-1 flex flex-col items-center ">
            <div>
                <img src={headshot} className="relative w-60 h-60 rounded-full border-4 object-cover z-40 border-[#2A442E]"/> 
            </div>    
            <div className="mt-10 max-w-2xl w-full">
          <h3
            className={`text-lg font-bold mb-4 text-center
                        ${isDarkMode ? "text-[#FFFEFD]" : "text-[#2A442E]"}`}
          >
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "JavaScript", "Python", "React", "Node.js", "Express", "Flask",
              "Postman", "TailwindCSS", "MongoDB", "PostgreSQL",
              "GitHub", "REST APIs", "HTML5", "CSS3", "JWT Auth"
            ].map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1.5 rounded-full text-xs font-medium
                            transition-all duration-300 hover:scale-105
                            ${isDarkMode
                              ? "bg-[#3f527b]/30 text-[#d7dadf] border border-[#394868]/50"
                              : "bg-[#2A442E]/10 text-[#2A442E] border border-[#2A442E]/10"
                            }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
            </div>
            <div
            className={`max-w-3xl rounded-2xl col-span-2
                        ${isDarkMode
                            ? "bg-[#323C4F]/0 border border-[#5D77AE]/0"
                            : "bg-[#2A442E]/0 border border-[#BED1C1]/0"
                        }`}
            >
            <p
                className={`text-base md:text-lg leading-relaxed mb-6
                            ${isDarkMode ? "text-white/80" : "text-[#002E0E]"}`}
            >
                I'm a Junior Software Engineer with a distinctive background in
                documentary filmmaking and fashion entrepreneurship, bringing
                together creativity, systems thinking, and technical
                problem-solving to build thoughtful digital products.
            </p>
            <p
                className={`text-base md:text-lg leading-relaxed mb-6
                            ${isDarkMode ? "text-white/80" : "text-[#002E0E]"}`}
            >
                I began my career in wildlife documentary production, developing
                a strong technical foundation, meticulous attention to detail,
                and a deep appreciation for clear, purposeful storytelling.
                Later, as the founder of a fashion brand centred on queer
                expression, I strengthened my skills in digital design, user
                experience, and creating products tailored to specific communities.
            </p>
            <p
                className={`text-base md:text-lg leading-relaxed
                            ${isDarkMode ? "text-white/80" : "text-[#002E0E]"}`}
            >
                Recognising that my strengths lie in logical reasoning and
                designing efficient systems, I transitioned into software
                engineering and completed an intensive full-stack bootcamp at
                General Assembly. I'm motivated by work that blends creativity
                with technical rigour, and I'm excited to contribute to teams
                building user-focused, impactful software.
            </p>
            </div>
        </div>        

      </div>
    </Section>
  )
}

export default AboutSection