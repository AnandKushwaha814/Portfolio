const Contact = () => {
  return (
    <>
      <h2 className="text-4xl md:text-6xl font-bold text-center p-10">
        Contact <span className="text-cyan-400">Us</span>
      </h2>

      <div className="flex items-center justify-center mt-8 md:mt-0 order-1 md:order-2">
        <form className="space-y-4">
          <input type="text" placeholder="Enter Your Name" required className="w-[100%] p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none" />
          <input type="email" placeholder="Enter Your Email" required className="w-[100%] p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none" />
          <input type="text" placeholder="Enter Your Subject" required className="w-[100%] p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none" />
          <textarea name="" id="" cols={50} rows={10} placeholder="Enter Your Message" required className="w-[100%] p-4 bg-gray-700 text-white font-semibold rounded-md resize-none focus:outline-none"></textarea>
          <input type="submit" value="Submit" className=" bg-cyan-400 text-black font-semibold rounded-full px-12 py-4 mt-4 hover:shadow-cyan transition-all cursor-pointer" />
        </form>
      </div>



    </>

  )
}

export default Contact
