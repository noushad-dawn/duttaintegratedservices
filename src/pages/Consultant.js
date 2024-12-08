import Footer from "./Footer";
import { ContactForm } from "../Components/Components";
import ContactSection from "./ContactSection";
import React, { useEffect } from "react";

const ConsultationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="consult" className="bg-black text-white min-h-screen pt-16 md:pt-20 overflow-x-hidden" data-aos="fade-down">
      {/* Header Section */}
      <div className="text-center pt-5 px-4">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Ready to elevate your business? Let's connect
        </h1>
        <hr className="border-t border-gray-600 my-4 mx-auto w-2/3 sm:w-1/3" />
        <p className="text-sm md:text-lg">Hello, How may we assist you?</p>
      </div>

      {/* Contact Form Section */}
      <div className="py-8 px-4">
        <ContactForm />
      </div>
      <div className="pb-10">
        <ContactSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ConsultationPage;
