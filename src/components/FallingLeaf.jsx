const FallingLeaf = ({ delay = 0, left = "50%", size = 16, isDarkMode = false }) => {
  return (
    <div
      className="absolute top-0 pointer-events-none z-[3] animate-fall"
      style={{
        left: left,
        animationDelay: `${delay}s`,
        animationDuration: `${10 + Math.random() * 6}s`,
      }}
    >
      {isDarkMode ? (
        // Firefly for dark mode
        <div
          className="rounded-full animate-glow-pulse"
          style={{
            width: size * 0.4,
            height: size * 0.4,
            backgroundColor: "#8395BA",
            boxShadow: "0 0 8px 2px rgba(131, 149, 186, 0.4)",
          }}
        />
      ) : (
        // Leaf for light mode
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22.13C7.57 17.56 9.14 12.43 17 8Z"
            fill="#2A442E"
            opacity="0.7"
          />
          <path
            d="M12.82 5.58C11.4 7.15 10.58 9.19 10.56 11.41C12.83 9.88 14.36 7.51 14.89 4.78L12.82 5.58Z"
            fill="#98B19C"
            opacity="0.6"
          />
        </svg>
      )}
    </div>
  )
}

export default FallingLeaf