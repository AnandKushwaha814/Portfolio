const Skills = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-wite p-5 font-bold ">My<span className='text-[#0ef]'>Skills</span></h1>
      <>
        <div className="container mx-auto py-8" id="skills">
          <h1 className="text-4xl font-bold text-center mb-8">Technical Skills</h1>

          {/* Skill Box: HTML */}
          <div className="mb-6">
            <span className="block text-lg font-semibold">HTML</span>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-blue-600 h-6 rounded-full text-center text-white" style={{ width: '75%' }}>
                <span className="tooltip">75%</span>
              </div>
            </div>
          </div>

          {/* Skill Box: CSS */}
          <div className="mb-6">
            <span className="block text-lg font-semibold">CSS</span>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-cyan-600 h-6 rounded-full text-center text-white" style={{ width: '70%' }}>
                <span className="tooltip">70%</span>
              </div>
            </div>
          </div>

          {/* Skill Box: JavaScript */}
          <div className="mb-6">
            <span className="block text-lg font-semibold">JavaScript</span>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-yellow-500 h-6 rounded-full text-center text-white" style={{ width: '45%' }}>
                <span className="tooltip">45%</span>
              </div>
            </div>
          </div>

          {/* Skill Box: Python */}
          <div className="mb-6">
            <span className="block text-lg font-semibold">Python</span>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-green-600 h-6 rounded-full text-center text-white" style={{ width: '50%' }}>
                <span className="tooltip">50%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Professional Skills</h1>

          <div className="flex justify-evenly flex-wrap">
            {/* Radial Bar: Creativity */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-40 h-40" viewBox="0 0 200 200">
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
              <div className="text-3xl font-bold mt-4">90%</div>
              <div className="text-lg font-bold">Creativity</div>
            </div>

            {/* Radial Bar: Communication */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-40 h-40" viewBox="0 0 200 200">
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
                  strokeDashoffset="225.9"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-3xl font-bold mt-4">55%</div>
              <div className="text-lg font-bold">Communication</div>
            </div>

            {/* Radial Bar: Problem Solving */}
            <div className="flex flex-col items-center mb-8">
              <svg className="w-40 h-40" viewBox="0 0 200 200">
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
                  strokeDashoffset="225.9"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <div className="text-3xl font-bold mt-4">55%</div>
              <div className="text-lg font-bold">Problem Solving</div>
            </div>
          </div>

          {/* Video Editing */}
          <div className="flex flex-col items-center mb-8">
            <svg className="w-40 h-40" viewBox="0 0 200 200">
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
                strokeDashoffset="225.9"
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease-out' }}
              />
            </svg>
            <div className="text-3xl font-bold mt-4">55%</div>
            <div className="text-lg font-bold">Video Editing</div>
          </div>
          </div>
      
    </>


    </>


  )
}

export default Skills
