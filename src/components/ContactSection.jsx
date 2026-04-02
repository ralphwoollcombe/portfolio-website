import { useTheme } from "../context/ThemeContext"
import {
  Mail, MapPin, Globe,
  Send, ArrowUp
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import bg6Light from "@/assets/bg-6.png"
import bg6Dark from "@/assets/bg-6-dark.png"
import treeRootsLight from "@/assets/roots-system.png"
import treeRootsDark from "@/assets/roots-system-dark.png"

import Section from "./Section"

const SocialLink = ({ icon: Icon, label, href, isDarkMode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-5 py-3 rounded-full
                  transition-all duration-300 hover:scale-105
                  ${isDarkMode
                    ? "bg-[#323C4F]/40 text-[#8395BA] hover:bg-[#42547B]/50 border border-[#5D77AE]/20 hover:text-[#FFFEFD]"
                    : "bg-[#2A442E]/20 text-[#BED1C1] hover:bg-[#2A442E]/30 border border-[#98B19C]/20 hover:text-[#FFFEFD]"
                  }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}

const ContactItem = ({ icon: Icon, label, value, href, isDarkMode }) => {
  const Wrapper = href ? "a" : "div"
  const linkProps = href
    ? {
        href,
        target: href.startsWith("mailto") ? undefined : "_blank",
        rel: href.startsWith("mailto") ? undefined : "noopener noreferrer",
      }
    : {}

  return (
    <Wrapper
      {...linkProps}
      className={`flex items-center gap-4 transition-colors duration-300
                  ${href ? "cursor-pointer" : ""}
                  ${isDarkMode
                    ? "text-[#8395BA] hover:text-[#FFFEFD]"
                    : "text-[#BED1C1] hover:text-[#FFFEFD]"
                  }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${isDarkMode
                      ? "bg-[#42547B]/30"
                      : "bg-[#2A442E]/30"
                    }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p
          className={`text-xs
                      ${isDarkMode ? "text-[#5D77AE]/60" : "text-[#98B19C]/60"}`}
        >
          {label}
        </p>
        <p className="text-sm md:text-base font-medium">{value}</p>
      </div>
    </Wrapper>
  )
}

const ContactSection = () => {
  const { isDarkMode } = useTheme()
  const bg6 = isDarkMode ? bg6Dark : bg6Light
  const treeRoots = isDarkMode ? treeRootsDark : treeRootsLight

  return (
    <Section id="contact" background={bg6} fullWidth={true}>
      <div className="relative w-full h-full">

        {/* Roots */}
        <img
          src={treeRoots}
          alt=""
          className="absolute top-0 left-0 w-21/24 h-200 z-0
                     min-w-300 max-w-1400 pointer-events-none"
        />

        <div className="relative z-10 w-full h-full flex flex-col
                        items-center justify-center px-8">

        {/* Back to top */}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`absolute top-30 left-5 flex items-center gap-2 px-5 py-3 rounded-full
                        transition-all  duration-300 hover:scale-105
                        ${isDarkMode
                          ? "bg-[#42547B]/50 text-[#8395BA] hover:bg-[#42547B]/60"
                          : "bg-[#BED1C1]/20 text-[#BED1C1] hover:bg-[#98B19C]/30"
                        }`}
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to the canopy</span>
          </button>
          {/* Heading */}
          <div className="flex items-center gap-3 mb-0">
            <Send
              className={`w-8 h-8
                          ${isDarkMode ? "text-[#b2bcd2]" : "text-[#BED1C1]"}`}
            />
            <h2
              className={`text-3xl md:text-5xl font-bold tracking-wide
                          ${isDarkMode ? "text-[#cfd8e3]" : "text-[#FFFEFD]"}`}
              style={{
                textShadow: isDarkMode
                  ? "0 0 15px rgba(131, 149, 186, 0.3)"
                  : "0 0 15px rgba(190, 209, 193, 0.3)",
              }}
            >
              Get In Touch
            </h2>
          </div>

          {/* Separator line */}
          <div className="relative w-full flex mt-4 justify-center py-0">
            <div
              className={`w-full max-w-3xl h-2 mb-6 rounded-full
                          ${isDarkMode
                            ? "bg-gradient-to-r from-[#5D77AE]/0 via-[#5D77AE]/40 to-transparent"
                            : "bg-gradient-to-r from-[#98B19C]/0 via-[#98B19C]/40 to-transparent"
                          }`}
            />
          </div>

          {/* Contact card */}
          <div
            className={`max-w-xl w-full rounded-2xl p-8 md:p-10
                        backdrop-blur-sm mb-8
                        ${isDarkMode
                          ? "bg-[#323C4F]/30 border border-[#5D77AE]/15"
                          : "bg-[#2A442E]/20 border border-[#98B19C]/15"
                        }`}
          >
            <div className="flex flex-col gap-6">
              <ContactItem
                icon={Mail}
                label="Email"
                value="ralph@ralphwoollcombe.com"
                href="mailto:ralph@ralphwoollcombe.com"
                isDarkMode={isDarkMode}
              />
              <ContactItem
                icon={Globe}
                label="Website"
                value="ralphwoollcombe.com"
                href="https://ralphwoollcombe.com"
                isDarkMode={isDarkMode}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value="Bristol, London, Berlin & Remote"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <SocialLink
              icon={SiGithub}
              label="GitHub"
              href="https://github.com/ralphwoollcombe"
              isDarkMode={isDarkMode}
            />
            <SocialLink
              icon={FaLinkedin}
              label="LinkedIn"
              href="https://linkedin.com/in/ralphwoollcombe"
              isDarkMode={isDarkMode}
            />
          </div>      

        </div>
      </div>
    </Section>
  )
}

export default ContactSection