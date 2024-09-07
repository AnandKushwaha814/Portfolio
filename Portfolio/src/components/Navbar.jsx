import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css'; // Assuming you have other styles here
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle mobile menu
  const logo1 = "./src/assets/anand2.png";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Fixed navbar */}
      <div className="bg-nav-bar shadow-lg shadow-indigo-500/50 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
          {/* Logo */}
          <img className="h-[4rem] w-[4rem] rounded-full hidden md:block" src={logo1} alt="logo" />

          <p className="text-2xl md:text-4xl text-white font-bold">
            Ana<span className="text-[#0ef]">nd</span>
          </p>

          {/* Menu for large screens */}
          <div className="text-[20px] font-bold hidden md:flex space-x-6">
            <Link to="/home" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">Home</Link>
            <Link to="/skills" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">Skills</Link>
            <Link to="/Myservice" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">Services</Link>
            <Link to="/project" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">Projects</Link>
            <Link to="/about" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">About Us</Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-box-style">Contact Us</Link>
          </div>

          {/* Hamburger menu icon for mobile */}
          <button onClick={toggleMenu} className="text-white md:hidden">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-nav-bar z-50">
          <div className="container mx-auto py-6">
            <ul className="flex flex-col items-center space-y-6">
              <li><Link onClick={toggleMenu} to="/home" className="text-white hover:text-cyan-400 text-lg">Home</Link></li>
              <li><Link onClick={toggleMenu} to="/skills" className="text-white hover:text-cyan-400 text-lg">Skills</Link></li>
              <li><Link onClick={toggleMenu} to="/Myservice" className="text-white hover:text-cyan-400 text-lg">Services</Link></li>
              <li><Link onClick={toggleMenu} to="/project" className="text-white hover:text-cyan-400 text-lg">Projects</Link></li>
              <li><Link onClick={toggleMenu} to="/about" className="text-white hover:text-cyan-400 text-lg">About Us</Link></li>
              <li><Link onClick={toggleMenu} to="/contact" className="text-white hover:text-cyan-400 text-lg">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-24 p-6">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
