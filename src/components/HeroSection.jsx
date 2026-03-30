import bg1 from "@/assets/bg-1.png"
import treeCanopy from "@/assets/tree-canopy.png"
import treeBranches from "@/assets/tree-branches.png"
import Section from "./Section"

const HeroSection = () => {
    return (
        <Section id={"hero"} background={bg1} className=''>
            <div className="relative w-full h-full flex items-center justify-center"> 
                <img src={treeCanopy} className="absolute top-40 left-0 w-23/24 h-127 z-0 min-w-260 max-w-1400"/>
                <img src={treeBranches} className="absolute top-140 left-0 w-22/24 h-127 z-0 min-w-250 max-w-1400"/>
                <div className="z-10 top-52 relative text-center text-white pt-32">
                    <h1>Ralph Woollcombe</h1>
                    <h2>Software Engineer</h2>
                    <div>
                        <button className="orange-button">About</button>
                        <button className="orange-button">Projects</button>
                        <button className="orange-button">Work</button>
                        <button className="orange-button">Contact</button>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HeroSection