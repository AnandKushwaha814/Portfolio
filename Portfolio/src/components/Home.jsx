import Anand from '../assets/anand.jpg';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "App Developer", "YouTuber"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between p-5 md:p-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg" src={Anand} alt="Anand Kushwaha" />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 max-w-lg text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold">
          Hello, It&apos;s Me
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Anand Kushwaha
        </h1>
        <h3 className="text-xl md:text-2xl font-bold mb-6">
          And I&apos;m a <span className="text-red-600 text-2xl md:text-3xl" ref={el}></span>
        </h3>
        <p className="text-md md:text-lg mb-6 leading-relaxed">
          I&apos;m a web designer.<br /> My expertise is in creating websites, frontend design, and backend development.
        </p>
        <a
          href="https://github.com/AnandKushwaha814" target='_blank'
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          More About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
