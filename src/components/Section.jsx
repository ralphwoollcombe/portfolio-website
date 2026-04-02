const Section = ({ id, background, children, className = "", fullWidth = false }) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: "1080px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 overflow-hidden z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Content wrapper - pointer-events-none so nav clicks pass through */}
      <div
        className={`relative z-20 pointer-events-none
                    ${fullWidth ? 0 : "pl-[180px] pr-8"}`}
      >
        {/* Actual content - pointer-events restored */}
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section