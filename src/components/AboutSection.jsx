import bg2 from "@/assets/bg-2.png"
import Section from "./Section"

const AboutSection = () => {
    return (
        <Section id={"about"} background={bg2} className=''>
          <div className="relative w-full h-full flex items-center justify-center"> 
                <h1>About Me</h1>
                <p>
                    Hello, This is me!
                </p>
            </div>
        </Section>
    )
}

export default AboutSection