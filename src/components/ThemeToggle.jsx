import { Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import cn from "../lib/utils"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300 z-40",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  )
}

export default ThemeToggle