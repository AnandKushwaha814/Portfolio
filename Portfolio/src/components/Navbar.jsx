import { Link } from 'react-router-dom'
import './style.css'
const skills = () => {
  const logo1 = "./src/assets/anand2.png"
    return (
      <div>
        <ul  className='flex fixed left-0 right-0 items-center justify-evenly p-3 bg-nav-bar shadow-lg shadow-indigo-500/50'>
          <p className='text-5xl text-white font-bold'>Port<span className='text-[#0ef] text-5xl'>Folio</span></p>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/skills'}>Skills</Link></li>
            <li><Link to={'/project'}>Projects</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <img className='h-[90px] w-[90px] rounded-full' src={logo1} alt="" />
        </ul>
      </div>
    )
  }
  
  export default skills
