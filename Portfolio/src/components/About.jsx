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
            I'm a Frontend Web Developer. I'm passionate about developing web applications. I have experience in HTML, CSS, JavaScript, Bootstrap, React Js more.
          </p>
          <a href="#" className="inline-block bg-[#0ef] text-[#081b29] py-3 px-4 rounded-[16px] hover:bg-[#0ef]  hover:transition hover:shadow-cyan">
            More About
          </a>
        </div>
      </div>
    </>


  )
}

export default skills
