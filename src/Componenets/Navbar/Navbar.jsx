import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Effect to handle body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden"); // Disable scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scroll
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <nav className="bg-div fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="w-full bg-white px-5 lg:px-10 flex items-center justify-between">
        <div className="z-50 p-5 flex items-center ">
          <img 
            src='./assets/images/logo.png' 
            alt="logo" 
            className="cursor-pointer h-9" 
          />
          <span className="text-xl lg:text-2xl font-bold text-text ml-4">
            Dutta Integrated Services
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="flex-grow md:flex md:justify-end hidden uppercase items-center gap-8 font-[Poppins]">
          <div>
            <a href="/" className="py-7 px-3 inline-block font-bold text-black hover:text-[#f97068] duration-300">
              Home
            </a>
          </div>
          <div>
            <a href="#about" className="py-7 px-3 text-black font-bold inline-block hover:text-[#f97068] duration-300">
              About
            </a>
          </div>
          <NavLinks closeNavbar={() => setOpen(false)} /> {/* Pass the closeNavbar function */}
          <div>
            <a href="#contact" className="py-7 px-3 text-black font-bold inline-block hover:text-[#f97068] duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div 
          className="text-3xl md:hidden cursor-pointer z-50 "
          onClick={() => setOpen(!open)} // Toggle menu open state
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>
        
        {/* Mobile nav */}
        <div
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-40 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <div className="mt-5">
            <div>
              <a href="/" className="py-7 px-3 font-bold inline-block" onClick={() => setOpen(false)}>
                Home
              </a>
            </div>
            <NavLinks closeNavbar={() => setOpen(false)} /> {/* Pass the closeNavbar function */}
            <div>
              <a href="#contact" className="py-7 px-3 font-bold inline-block" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
