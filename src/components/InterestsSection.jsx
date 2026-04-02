import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import {
  Scissors, Music, Film, Gamepad2,
  PartyPopper, Theater,
  TreePine, Paintbrush, Flame
} from "lucide-react"
import { FaChessPawn } from "react-icons/fa"

import bg5Light from "@/assets/bg-5.png"
import bg5Dark from "@/assets/bg-5-dark.png"
import cardBackLight from "@/assets/card-1.png"
import cardBackDark from "@/assets/card-2.png"

import Section from "./Section"

const FlipCard = ({ icon: Icon, title, description, isFlipped, onClick, isDarkMode, cardBack }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          aspectRatio: "3.5 / 2.5",
        }}
      >

        {/* Back of card (visible by default) */}
        <div
          className={`absolute inset-0 rounded-xl overflow-hidden
                      flex items-center justify-center
                      ${isDarkMode
                        ? "border-2 border-[#5D77AE]/30"
                        : "border-2 border-[#BED1C1]/40"
                      }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={cardBack}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ transform: "rotate(90deg) scale(1.4)" }}
          />

          <div
            className={`relative z-10 w-12 h-12 rounded-full flex items-center
                        justify-center backdrop-blur-sm
                        ${isDarkMode
                          ? "bg-[#323C4F]/70"
                          : "bg-[#FFFEFD]/70"
                        }`}
          >
            <Icon
              className={`w-6 h-6 ${isDarkMode ? "text-[#8395BA]" : "text-[#2A442E]"}`}
            />
          </div>
        </div>

        {/* Front of card (visible when flipped) */}
        <div
          className={`absolute inset-0 rounded-xl px-3 py-2 flex flex-col
                      ${isDarkMode
                        ? "bg-[#323C4F]/60 border-2 border-[#8395BA]/40"
                        : "bg-[#FFFEFD]/60 border-2 border-[#ffb888]/40"
                      }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Top-left icon */}
          <div
            className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center
                        justify-center z-20
                        ${isDarkMode ? "bg-[#5D77AE]/40" : "bg-[#2A442E]/40"}`}
          >
            <Icon
              className={`w-3.5 h-3.5 ${isDarkMode ? "text-[#8395BA]" : "text-[#093b11]"}`}
            />
          </div>

          {/* Bottom-right icon (upside down) */}
          <div
            className={`absolute bottom-2 right-2 w-7 h-7 rounded-full flex items-center
                        justify-center z-20
                        ${isDarkMode ? "bg-[#5D77AE]/40" : "bg-[#2A442E]/40"}`}
            style={{ transform: "rotate(180deg)" }}
          >
            <Icon
              className={`w-3.5 h-3.5 ${isDarkMode ? "text-[#8395BA]" : "text-[#093b11]"}`}
            />
          </div>

          {/* Title */}
          <h3
            className={`text-xs font-bold mt-3 mb-1
                        ${isDarkMode ? "text-[#FFFEFD]/80" : "text-[#2A442E]"}`}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`overflow-y-auto text-[10px] md:text-[11px] leading-relaxed flex-1
                        ${isDarkMode ? "text-[#ffffff]/70" : "text-[#002E0E]/60"}`}
          >
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}

const InterestsSection = () => {
  const { isDarkMode } = useTheme()
  const [flippedCards, setFlippedCards] = useState({})
  const bg5 = isDarkMode ? bg5Dark : bg5Light
  const cardBack = isDarkMode ? cardBackDark : cardBackLight

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const interests = [
    {
      icon: Scissors,
      title: "Sewing & Costume",
      description:
        "I've spent years creating elaborate costumes — from working at Rio Carnival on the parade outfits to organising a trashion show in 2024 where myself and 12 other designers presented outfits created entirely from rubbish.",
    },
    {
      icon: Paintbrush,
      title: "Crafting",
      description:
        "I love getting hands-on with creative projects and sharing skills with others. Whether it's textiles, upcycling, or experimenting with new materials, I'm happiest when I'm making something from scratch.",
    },
    {
      icon: TreePine,
      title: "Nature & Wildlife",
      description:
        "My background in biology and wildlife filmmaking left me with a deep love for the natural world. I still spend as much time as I can outdoors — whether it's birdwatching, hiking, or just sitting still in a forest.",
    },
    {
      icon: Theater,
      title: "Performing",
      description:
        "I've recently immersed myself in the world of puppetry and will be performing later this year. I've also been involved behind the scenes on decor teams for various events and festivals.",
    },
    {
      icon: Music,
      title: "Dance",
      description:
        "I've attended classes across hip-hop, afrobeat, samba, forró, contemporary, pole, ballet and more. I've been involved in starting and running multiple ongoing sober dance events.",
    },
    {
      icon: Film,
      title: "Film",
      description:
        "I love being social, but nothing beats getting cosy on the sofa with some popcorn and a well-made movie! Although I've left the TV industry, I still occasionally make short documentaries in my spare time.",
    },
    {
      icon: Gamepad2,
      title: "Games",
      description:
        "I've always loved playing games and host a regular improv games evening. I would love to go on The Traitors one year — I think I'd do very well!",
    },
    {
      icon: PartyPopper,
      title: "Set Design & Events",
      description:
        "I've spent years behind the scenes on decor teams for festivals and events, building immersive spaces. I love creating environments where people can come together and express themselves freely.",
    },
    {
      icon: Flame,
      title: "Sauna & Movement",
      description:
        "I practise yoga and meditation regularly, swim whenever I can, and have become a bit obsessed with the sauna-to-cold-plunge cycle. There's something about extreme heat followed by ice-cold water that completely resets my brain.",
    },
  ]

  return (
    <Section id="interests" background={bg5}>

      <div className="relative z-10 w-full h-full flex flex-col
                      items-center justify-start px-8 pt-0 mt-0">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-0">
          <FaChessPawn
            className={`w-8 h-8
                        ${isDarkMode ? "text-[#ffffff]/70" : "text-[#2A442E]"}`}
          />
          <h2
            className={`text-3xl md:text-5xl font-bold tracking-wide
                        ${isDarkMode ? "text-[#FFFEFD]/70" : "text-[#2A442E]"}`}
            style={{
              textShadow: isDarkMode
                ? "0 0 15px rgba(131, 149, 186, 0.3)"
                : "0 0 15px rgba(42, 68, 46, 0.15)",
            }}
          >
            Interests
          </h2>
        </div>

        {/* Separator line */}
        <div className="relative w-full flex mt-6 justify-center py-0">
          <div
            className={`w-full max-w-3xl h-2 mb-8 rounded-full
                        ${isDarkMode
                          ? "bg-gradient-to-r from-[#5D77AE]/0 via-white/40 to-transparent"
                          : "bg-gradient-to-r from-[#98B19C]/0 via-[#1e5227]/60 to-transparent"
                        }`}
          />
        </div>

        <p
          className={`text-base md:text-lg mb-8 text-center max-w-xl
                      ${isDarkMode ? "text-[#c6cdda]" : "text-[#002E0E]/60"}`}
        >
          Click a card to find out more!
        </p>

        {/* 3x3 Card grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-5xl w-full">
          {interests.map((interest, index) => (
            <FlipCard
              key={index}
              icon={interest.icon}
              title={interest.title}
              description={interest.description}
              isFlipped={!!flippedCards[index]}
              onClick={() => toggleCard(index)}
              isDarkMode={isDarkMode}
              cardBack={cardBack}
            />
          ))}
        </div>

      </div>
    </Section>
  )
}

export default InterestsSection