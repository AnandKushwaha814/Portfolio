// eslint-disable-next-line react/prop-types
function Projects({ title, image,link, alt }) {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="border-2 border-gray-400 rounded-lg p-5 h-[400px] w-[380px] shadow-custom-blue border-none">
          <h3 className="text-center text-[20px] font-bold mb-3">{title}</h3>
          <div className="h-[260px] w-full overflow-hidden rounded mb-4">
            <img className="w-full h-full object-contain rounded-lg" src={image} alt={alt} />
          </div>
          <a className="bg-blue-600 text-white font-bold p-3 rounded flex justify-center items-center hover:bg-green-500"
          href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
      </div>
    </>
  );
}

export default Projects;
