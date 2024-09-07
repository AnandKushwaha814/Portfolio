import Projects from "./Projects"
import ProjectTitle from './ProjectTitle'
import proj1 from '../assets/Project1.png'
import proj2 from '../assets/Project2.png'
import proj3 from '../assets/Project3.png'
import RockPaper from '../assets/Rock-paper-scissors.png'
import BgChanger from '../assets/download.png'
import Netflix from '../assets/netflix.jpg'
import FlipCart from '../assets/flipcart.png'
import Amazone from '../assets/amazone.jpeg'
import ImgGallery from '../assets/img-gallery.jpeg'
import PortFolio from '../assets/PortFolio.png'
import Express from '../assets/Express.png'
import SocialMedia from '../assets/social-media.png'
import LandingPage from '../assets/Landing-Page.png'
import Calculator from '../assets/calculator.png'
const skills = () => {
    return (
      <>
        <ProjectTitle/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-10 columns-3 box-border">
        <Projects title="Random Jokes Generator" image={proj1} link="https://github.com/AnandKushwaha814/Random-Jokes-Generator"alt="Random Image Generator"/>
        <Projects title="BMI Calculator" image={proj2} link="https://github.com/AnandKushwaha814/BMI-Calculator" alt="BMI Calculator"/>
        <Projects title="Todo List" image={proj3} link="https://github.com/AnandKushwaha814/Todo-List" alt="Todo List"/>
        <Projects title="Backgroun-Color-Changer" image={BgChanger} link="https://github.com/AnandKushwaha814/Background-Color-Changer" alt="Background Changer"/>
        <Projects title="Rock-Paper-Scissor " image={RockPaper} link="https://github.com/AnandKushwaha814/Rock-Paper-Scissor" alt="Rock-Paper-Scissor "/>
        <Projects title="Netflix-Clone " image={Netflix} link="https://github.com/AnandKushwaha814/Netflix-Clone" alt="Rock-Paper-Scissor "/>
        <Projects title="Image-Gallery " image={ImgGallery} link="https://github.com/AnandKushwaha814/Image-Gallery" alt="Image-Gallery "/>
        <Projects title="Amazone-Clone " image={Amazone} link="https://github.com/AnandKushwaha814/Amazone_Clone" alt="Amazone-Clone"/>
        <Projects title="Flipcart-Clone " image={FlipCart} link="https://github.com/AnandKushwaha814/Flipcart-Clone" alt="Flipcart-Clone"/>
        <Projects title="PortFolio " image={PortFolio} link="https://github.com/AnandKushwaha814/CodeAlpha/tree/main/CodAlpha%20Portfolio" alt="Portfolio"/>
        <Projects title="Expense-Tracker " image={Express} link="https://github.com/AnandKushwaha814/CodeAlpha/tree/main/Code_Alpha_Expense_Tracker-main" alt="Expense-Tracker"/>
        <Projects title="Social-Media-Dashboard " image={SocialMedia} link="https://github.com/AnandKushwaha814/CodeAlpha/tree/main/Social%20Media%20Dashboard" alt="Social-Media Dashboard"/>
        <Projects title="Landing-Page " image={LandingPage} link="https://github.com/AnandKushwaha814/CODSOFT/tree/main/Landing%20Page" alt="Flipcart-Clone"/>
        <Projects title="Calculator " image={Calculator} link="https://github.com/AnandKushwaha814/CODSOFT/tree/main/calculator" alt="Calculator"/>
        </div>
        

      </>
    )
  }
  
  export default skills
  