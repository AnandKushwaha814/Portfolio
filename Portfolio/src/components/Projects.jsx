// eslint-disable-next-line react/prop-types
function Projects({ title, image, link, alt }) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="border-2 border-gray-400 rounded-lg p-4 shadow-custom-blue border-none w-full max-w-[380px] h-auto flex flex-col">
        <h3 className="text-center text-lg font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-center relative h-[200px] w-full overflow-hidden rounded mb-4">
          <img className="h-full object-cover rounded-lg" src={image} alt={alt} />
        </div>
        <a 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded flex justify-center items-center  hover:bg-green-500 transition-colors duration-300"
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Projects;
