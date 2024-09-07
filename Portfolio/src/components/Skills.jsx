const Skills = () => {
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl text-white p-5 font-bold">
        My <span className='text-[#0ef]'>Skills</span>
      </h1>
      <div className="container mx-auto py-8 px-4" id="skills">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Technical Skills</h1>

        {/* Skill Box: HTML */}
        <div className="mb-6">
          <span className="block text-lg md:text-xl font-semibold">HTML</span>
          <div className="w-full bg-gray-300 rounded-full h-4 md:h-6 mt-2">
            <div className="bg-blue-600 h-full rounded-full text-center text-white" style={{ width: '75%' }}>
              <span className="tooltip">75%</span>
            </div>
          </div>
        </div>

        {/* Skill Box: CSS */}
        <div className="mb-6">
          <span className="block text-lg md:text-xl font-semibold">CSS</span>
          <div className="w-full bg-gray-300 rounded-full h-4 md:h-6 mt-2">
            <div className="bg-cyan-600 h-full rounded-full text-center text-white" style={{ width: '70%' }}>
              <span className="tooltip">70%</span>
            </div>
          </div>
        </div>

        {/* Skill Box: JavaScript */}
        <div className="mb-6">
          <span className="block text-lg md:text-xl font-semibold">JavaScript</span>
          <div className="w-full bg-gray-300 rounded-full h-4 md:h-6 mt-2">
            <div className="bg-yellow-500 h-full rounded-full text-center text-white" style={{ width: '60%' }}>
              <span className="tooltip">60%</span>
            </div>
          </div>
        </div>

        {/* Skill Box: Python */}
        <div className="mb-6">
          <span className="block text-lg md:text-xl font-semibold">Python</span>
          <div className="w-full bg-gray-300 rounded-full h-4 md:h-6 mt-2">
            <div className="bg-green-600 h-full rounded-full text-center text-white" style={{ width: '50%' }}>
              <span className="tooltip">50%</span>
            </div>
          </div>
        </div>



        {/* Professional Skills Section */}
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Professional Skills</h1>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Radial Bar: Creativity */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200">
                <circle className="text-gray-300" cx={100} cy={100} r={80} fill="none" stroke="currentColor" strokeWidth={10} />
                <circle
                  className="text-blue-600"
                  cx={100}
                  cy={100}
                  r={80}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeDasharray="502"
                  strokeDashoffset="50.2"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-xl md:text-3xl font-bold mt-4">90%</div>
              <div className="text-base md:text-lg font-bold">Creativity</div>
            </div>

            {/* Radial Bar: Communication */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200">
                <circle className="text-gray-300" cx={100} cy={100} r={80} fill="none" stroke="currentColor" strokeWidth={10} />
                <circle
                  className="text-yellow-500"
                  cx={100}
                  cy={100}
                  r={80}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeDasharray="502"
                  strokeDashoffset="201.06"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-xl md:text-3xl font-bold mt-4">60%</div>
              <div className="text-base md:text-lg font-bold">Communication</div>
            </div>

            {/* Radial Bar: Problem Solving */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200">
                <circle className="text-gray-300" cx={100} cy={100} r={80} fill="none" stroke="currentColor" strokeWidth={10} />
                <circle
                  className="text-red-500"
                  cx={100}
                  cy={100}
                  r={80}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeDasharray="502"
                  strokeDashoffset="201.06"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-xl md:text-3xl font-bold mt-4">60%</div>
              <div className="text-base md:text-lg font-bold">Problem Solving</div>
            </div>

            {/* Radial Bar: Video Editing */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200">
                <circle className="text-gray-300" cx={100} cy={100} r={80} fill="none" stroke="currentColor" strokeWidth={10} />
                <circle
                  className="text-cyan-400"
                  cx={100}
                  cy={100}
                  r={80}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeDasharray="502"
                  strokeDashoffset="150.80"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-xl md:text-3xl font-bold mt-4">70%</div>
              <div className="text-base md:text-lg font-bold">Video Editing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
