import { useTheme } from "../context/ThemeContext"

const SectionDivider = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className="relative w-full flex justify-center py-0">
      <div
        className={`w-full max-w-3xl h-[1px]
                    ${isDarkMode
                      ? "bg-gradient-to-r from-transparent via-[#5D77AE]/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#98B19C]/50 to-transparent"
                    }`}
      />
    </div>
  )
}

export default SectionDivider