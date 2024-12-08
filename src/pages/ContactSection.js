import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7218196231";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="bg-black p-6 text-center space-y-4" data-aos="fade-up">
      <p className="text-sm text-gray-400 py-10">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
      <h2 className="text-2xl font-semibold pb-4">Better yet, see us in person!</h2>
      <p className="text-base text-gray-400 pb-8">
        We love our customers, so feel free to visit during normal business
        hours.
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center my-6 py-4 bg-white mx-auto text-black px-4 shadow hover:shadow-lg focus:outline-none space-x-2"
        data-aos="fade-up"
      >
        <FaWhatsapp className="text-green-500 text-xl " /> {/* WhatsApp Icon */}
        <span className="font-bold">Message us on WhatsApp</span>
      </button>
      <div className="mt-4" data-aos="fade-up">
        <h3 className="text-3xl font-semibold pt-8">Dutta Integrated Services</h3>
        <p className="text-sm py-7 text-gray-400">info@dis.services</p>
        <p className="text-sm text-gray-400">Monday to Friday 09:00 am – 05:00 pm</p>
      </div>
    </div>
  );
};

export default ContactSection;
