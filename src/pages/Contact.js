import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { ContactForm } from "../Components/Components";

const EnhancedContactForm = () => {
  const location = useLocation(); // Get the current location


  // Scroll to the contact section when location changes to "/contact"
  useEffect(() => {
    if (location.pathname === "/contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the #contact section
      }
    }
  }, [location]); // Only trigger when the location changes

  useEffect(() => {
    Aos.init({ duration: 800, offset: 150 });
  }, []);



  return (
    <>

     <div className="min-h-screen bg-black">
     <ContactForm />
     </div>


      <Footer />
    </>
  );
};

export default EnhancedContactForm;
