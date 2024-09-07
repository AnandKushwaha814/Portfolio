const About = () => {
  const logo1 = "./src/assets/anand2.png";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-[15px] px-4 md:px-12">
        {/* Image Section */}
        <div className="about-img">
          <img
            src={logo1}
            alt="Profile"
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-lg mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="about-text text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h4 className="text-lg md:text-2xl font-medium text-white mt-4 mb-2">
            Frontend Developer
          </h4>
          <p className="text-lg md:text-xl text-blue-100 mt-3 mb-8 leading-relaxed">
            I&apos;m a Frontend Web Developer. I&apos;m passionate about developing web
            applications. I have experience in HTML, CSS, JavaScript, Bootstrap, React.js, and more.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="inline-block bg-slate-200 text-[#081b29] py-3 px-6 rounded-[16px] hover:bg-cyan-400 hover:text-white transition"
            >
              More About
            </a>
            <a
              href="https://drive.google.com/file/d/1fRl7-TNYdxJCkot2qGJY0_JDUwawYiDI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-200 text-[#081b29] py-3 px-6 rounded-[16px] hover:bg-cyan-400 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
