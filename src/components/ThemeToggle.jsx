import { Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import cn from "../lib/utils"
import { useEffect, useState } from "react"
 const useAtTop = () => {
  const [ isAtTop, setIsAtTop ] = useState(true)
  
    useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY < 5) {
      setIsAtTop(true)
    } else {setIsAtTop(false)}
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])
  return isAtTop
  }

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const isAtTop = useAtTop()

  return (
    <>
      {isAtTop ? 
      (<div className="max-sm:hidden text-sm fixed transition-colors duration-300 z-40 top-5 right-5">
      {isDarkMode ? (
        <h3 className="text-yellow-300">Light Mode</h3>)
       : (<h3 className="text-blue-900">Dark Mode</h3>)}
      </div>)
      : ('')}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed top-10 right-5 p-2 rounded-full transition-colors duration-300 z-40",
          "focus:outline-hidden"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  )
}

export default ThemeToggle