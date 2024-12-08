import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from './Footer';

export const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "7218196231"; // Use your own number
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
    <div className="bg-black py-20  px-20 text-center space-y-4" >
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-4xl font-semibold text-white" data-aos="fade-right">Dutta Integrated Services</h2>
        <div className="w-full border-t border-gray-400 mt-2"></div> {/* Line below the title */}
      </div>
      
      <p className="text-base text-gray-400 pb-8" data-aos="fade-up">
        Better yet, see us in person! We love our customers, so feel free to visit during normal business hours.
      </p>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center my-6 py-4 bg-white mx-auto text-black px-4 shadow hover:shadow-lg focus:outline-none space-x-2"
        data-aos="fade-up"
      >
        <FaWhatsapp className="text-green-500 text-xl" /> {/* WhatsApp Icon */}
        <span className="font-bold">Message us on WhatsApp</span>
      </button>

      {/* Business Info */}
      <div className="mt-4" data-aos="fade-up">
        <h3 className="text-3xl font-semibold pt-8 text-white">Dutta Integrated Services</h3>
        <p className="text-sm py-7 text-gray-400">info@dis.services</p>
        <p className="text-sm text-gray-400">Monday to Friday 09:00 am – 05:00 pm</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};
