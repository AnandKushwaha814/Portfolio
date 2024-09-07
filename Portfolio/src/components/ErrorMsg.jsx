const ErrorMsg = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Error Image */}
      <img
        className="w-full max-w-md h-auto mt-6 object-contain"
        src="https://media.geeksforgeeks.org/auth-dashboard-uploads/Illustration.svg"
        alt="404-error-image"
      />

      {/* Error Text */}
      <div className="w-full max-w-xl text-center mt-6">
        <h2 className="font-bold text-2xl sm:text-3xl">Whoops, that page is gone.</h2>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          While you’re here, feast your eyes upon these popular
        </p>
        <p className="mt-2 text-lg sm:text-xl leading-relaxed">
          recommendations for you.
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
