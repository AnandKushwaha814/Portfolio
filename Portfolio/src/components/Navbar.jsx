import { Link } from 'react-router-dom';
import './style.css';  // Assuming you have other styles here

const Skills = () => {
  const logo1 = "./src/assets/anand2.png";

  return (
    <div>
      {/* Fixed navbar */}
      <ul className="flex items-center justify-evenly p-3  bg-nav-bar shadow-lg shadow-indigo-500/50 fixed top-0 left-0 w-full z-50">
        <p className="text-5xl text-white font-bold">
          Ana<span className="text-[#0ef] text-5xl">nd</span>
        </p>
        <li><Link to="/home" className="text-white hover:text-cyan-400 py-[8px] px-[15px] hover:shadow-box-style hover:rounded-[11px] transition duration-500 ease-in hover:transform hover:scale-105" >Home</Link></li>
        <li><Link to="/skills" className="text-white py-[8px] px-[15px] hover:rounded-[11px] hover:shadow-box-style hover:text-cyan-400 transition duration-500 ease-in hover:transform hover:scale-105">Skills</Link></li>
        <li><Link to="/Myservice" className="text-white py-[8px] px-[15px] hover:rounded-[11px] hover:shadow-box-style hover:text-cyan-400 transition duration-500 ease-in hover:transform hover:scale-105">Services</Link></li>
        <li><Link to="/project" className="text-white py-[8px] px-[15px] hover:rounded-[11px] hover:shadow-box-style hover:text-cyan-400 transition duration-500 ease-in hover:transform hover:scale-105">Projects</Link></li>
        <li><Link to="/about" className="text-white py-[8px] px-[15px] hover:rounded-[11px] hover:shadow-box-style hover:text-cyan-400 transition duration-500 ease-in hover:transform hover:scale-105">About Us</Link></li>
        <li><Link to="/contact" className="text-white py-[8px] px-[15px] hover:rounded-[11px] hover:shadow-box-style hover:text-cyan-400 transition duration-500 ease-in hover:transform hover:scale-105">Contact Us</Link></li>
        <img className="h-[90px] w-[90px] rounded-full" src={logo1} alt="" />
      </ul> transition duration-500 ease-in hover:transform hover:scale-105
      <div className="mt-24 p-6">
        
      </div>
    </div>
  );
};

export default Skills;
