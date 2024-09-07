
const ErrorMsg = () => {
  return (
    <div>
      <img className='h-[22vh] ml-auto mr-auto relative w-[100%] mt-[6vh]'src="https://media.geeksforgeeks.org/auth-dashboard-uploads/Illustration.svg" alt="404-error-image"/>
      <div className="mx-w-[100%] h-auto">
        <h2 className="ml-auto mr-auto mt-[15px] text-center font-bold text-[20px]">Whoops, that page is gone.</h2>
        <p className='ml-auto mr-auto mt-[2vh] mb-[-4vh] w-[100%] text-center leading-[18px] font-bold p-4 text-[25px]'> While you’re here, feast your eyes upon these popular </p>
        <p className='ml-auto mr-auto mt-[2vh] mb-[-4vh] w-[100%] text-center leading-[18px] font-bold p-3 text-[25px]'> recommendations for you.</p>
      </div>
      
    </div>
  )
}

export default ErrorMsg
