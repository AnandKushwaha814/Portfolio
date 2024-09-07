const Footer = () => {
  return (
    <>
      {/* Other content can go here */}
      
      {/* Footer */}
      <footer className="bg-[#4070f4] p-4 text-center font-serif w-full">
        <span className="text-base sm:text-lg font-normal text-white">
          Created By 
          <a 
            className="hover:text-[#0ef] hover:font-bold ml-1" 
            href="https://yourwebsite.com" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Visit Anand Kushwaha's website"
          >
            Anand Kushwaha
          </a> 
          | &#169; 2024 All Rights Reserved
        </span>
      </footer>
    </>
  );
}

export default Footer;
