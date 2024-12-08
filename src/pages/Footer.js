const Footer = () => {
    return (
      <footer className="bg-black text-white text-center py-10">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-10 gap-8 ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
  
        {/* Copyright Section */}
        <p className="text-sm text-gray-400 mb-10">
        Copyright © 2024 _DIS - All Rights Reserved.
      </p>
  
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-gray-200 text-sm mb-10 gap-10">
          <a href="#it-solutions" className="hover:underline">
            IT Solutions
          </a>
          <a href="#business-solutions" className="hover:underline">
            Business Solutions
          </a>
          <a href="#consultation" className="hover:underline">
            Consultation
          </a>
          <a href="#about-us" className="hover:underline">
            About Us
          </a>
        </div>
  
        {/* Company Name */}
        <p className="text-xs mt-6 text-gray-400">Dutta Integrated Services</p>
      </footer>
    );
  };
  
  export default Footer;
  