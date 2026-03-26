import Section from "../components/Section"
import tree1 from "../assets/tree-1.png"
import tree2 from "../assets/tree-2.png"
import tree3 from "../assets/tree-3.png"
import tree4 from "../assets/tree-4.png"
import tree5 from "../assets/tree-5.png"
import tree6 from "../assets/tree-6.png"


const Home = (props) => {
    
    
    return (
        <>
            <Section id='welcome' background={tree1}> 
                <h1>Ralph Woollcombe</h1>
            </Section>

            <Section id='about' background={tree2}> 
                
            </Section>

            <Section id='projects' background={tree3}> 
                
            </Section>

            <Section id='work' background={tree4}> 
                
            </Section>

            <Section id='interests' background={tree5}> 
                
            </Section>

            <Section id='contact' background={tree6}> 
                
            </Section>
        </>
    )
}

export default Home