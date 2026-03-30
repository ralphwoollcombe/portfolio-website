import bg6 from "@/assets/bg-6.png"
import Section from "./Section"
import treeRoots from "@/assets/roots-system.png"

const ContactSection = () => {
    return (
        <Section id={"contact"} background={bg6} className=''>
            <div className="relative w-full h-full flex items-center justify-center"> 
            <img src={treeRoots} className="absolute top-0 left-0 w-20/24 h-200 z-0 min-w-220 max-w-1400"/>
                <h1>Contact Details</h1>
                <div>
                </div>
            </div>
        </Section>
    )
}

export default ContactSection