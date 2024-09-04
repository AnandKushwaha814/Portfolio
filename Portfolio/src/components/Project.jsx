import Projects from "./Projects"
import ProjectTitle from './ProjectTitle'
import proj1 from '../assets/Project1.png'
import proj2 from '../assets/Project2.png'
import proj3 from '../assets/Project3.png'
const skills = () => {
    return (
      <>
        <ProjectTitle/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-10 columns-3 box-border">
        <Projects title="Random Jokes Generator" image={proj1} alt="Random Image Generator"/>
        <Projects title="BMI Calculator" image={proj2} alt="BMI Calculator"/>
        <Projects title="Todo List" image={proj3} alt="Todo List"/>
        </div>

      </>
    )
  }
  
  export default skills
  