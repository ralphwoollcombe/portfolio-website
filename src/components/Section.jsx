
const Section = ({id, background, children, className=""}) => {
    return (
       <section
        id={id}
        className={`bg-image relative w-full overflow-hidden ${className}`}
        style = {{backgroundImage: `url(${background})`}}
    >
        <div className="relative z-20">
            {children}
        </div>
        </section>
    )
}

export default Section