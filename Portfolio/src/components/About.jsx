const skills = () => {
  const logo1 = "./src/assets/anand2.png"
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-[15px]">
        <div className="about-img">
          <img src={logo1} alt="" className="w-full max-w-xl h-auto rounded-lg" />
        </div>
        <div className="about-text text-left">
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h4 className="text-xl md:text-2xl font-medium text-white mt-4 mb-1.5">
            Feontend Developer
          </h4>
          <p className="text-xl text-blue-100 mt-3 mb-16 leading-relaxed">
            I&apos;m a Frontend Web Developer. I&apos;m passionate about developing web applications. I have experience in HTML, CSS, JavaScript, Bootstrap, React Js more.
          </p>
          <a href="#" className="inline-block bg-slate-200 text-[#081b29] py-3 px-4 rounded-[16px]  hover:transition hover:shadow-cyan">
            More About
          </a>
          <a href="https://drive.google.com/file/d/1fRl7-TNYdxJCkot2qGJY0_JDUwawYiDI/view?usp=sharing" target="_blank" className="inline-block bg-slate-200 ml-10 text-[#081b29] py-3 px-4 rounded-[16px]  hover:transition hover:shadow-cyan">
            Resume
          </a>
        </div>
      </div>
    </>


  )
}

export default skills
