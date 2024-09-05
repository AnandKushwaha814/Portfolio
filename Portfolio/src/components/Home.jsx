import Anand from '../assets/anand.jpg';
const Home = () => {
 

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between p-5">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img className="w-full h-auto object-cover rounded-lg" src={Anand} alt="Anand Kushwaha" />
      </div>

      {/* Content section */}
      <div className="w-full md:w-1/2 m-[50px] mt-10 md:mt-0 md:ml-10 max-w-[500px]">
        <h3 className="text-2xl font-bold">
          Hello It&apos;s Me
        </h3>
        <h1 className="text-5xl font-bold">
          Anand Kushwaha
        </h1>
        <h3 className="text-2xl font-bold mb-8">
          And I&apos;m a <span className="text text-cyan-400">Web Developer</span>
        </h3>
        <p className="text-lg mb-5">
          I&apos;m a web Designer Fresher. <br />
          My expertise is in creating websites, frontend design, and backend development.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          More About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
