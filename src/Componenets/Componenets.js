import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


//footer
export function Component() {
  return (
    <Footer bgDark className="rounded-none text-[#ee6b6e] bg-form"> {/* Set background color */}
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Contact Details" className="text-[#ee6b6e]" /> {/* Heading color */}
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-gray-300">Kavita Nagar Raipur</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">+91 7218196231</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">info@duttaintegratedservices.com</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" className="text-[#ee6b6e]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-gray-300">Discord Server</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Twitter</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Facebook</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" className="text-[#ee6b6e]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-gray-300">Web Development</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">App Development</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Graphic Design</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">E-Commerce Website Services</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">API Development</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Quick Links" className="text-[#ee6b6e]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-gray-300">iOS</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Android</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Windows</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">MacOS</Footer.Link>
              <Footer.Link href="#" className="hover:text-gray-300">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-form px-4 py-6 sm:flex sm:items-center sm:justify-between"> {/* Footer bottom background */}
          <Footer.Copyright href="#" by="Dutta Integrated" year={2022} className="text-[#ee6b6e]" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-[#ee6b6e] hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-[#ee6b6e] hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-[#ee6b6e] hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsGithub} className="text-[#ee6b6e] hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-[#ee6b6e] hover:text-gray-300" />
          </div>
        </div>
      </div>
    </Footer>
  );
}






//service card
export function ServiceCard({ image, title, description }) {
  return (
    <a
      href="#contact"
      className="max-w-xs bg-div h-90 flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:bg-gray-700 duration-300"
    >
      <div className="pross-box text-black text-center flex-grow p-4">
        <img
          className="pross-icon mb-3 object-scale-down h-48 w-full mx-auto transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={title}
        />
        <h2 className="pross-title font-bold m-2 text-heading transition-colors duration-300 hover:text-yellow-400">
          {title}
        </h2>
        <p className="text-sm text-white text-left transition-opacity duration-300 opacity-80 hover:opacity-100">
          {description}
        </p>
      </div>
    </a>
  );
}










//contact form
export function ContactForm() {
  const form = useRef();
  
  // State to manage form data
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    subject: '',
    number: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ldmp7zl', 'template_xxwv34d', form.current, {
        publicKey: '5bZx2DXgDfYbBIX7j',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Form Submitted successfully!');
          // Reset form fields after successful submission
          setFormData({
            from_name: '',
            email: '',
            subject: '',
            number: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-div text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* Content Section */}
        <div className="lg:pr-16 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400 mb-6">
            Contact us for any inquiries, demos, or support. We are here to help and offer one month of free service after delivery. Feel free to reach out!
          </p>
          <p className="text-xl font-semibold">Call us at:</p>
          <p className="text-2xl text-text">+91 7218196231</p>
          <p className="mt-6">You can also email us at <span className="text-text">info@duttaintegratedservices.com</span></p>
        </div>

        {/* Form Section */}
        <div className="bg-form p-8 rounded-lg shadow-lg mx-10  ">
          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-button text-black font-semibold rounded-md hover:bg-button focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//welcome 
export function WelcomeSection() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./assets/images/welcome.jpg')" }}>
      {/* Dark overlay filter */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-left h-full px-4 sm:px-10">
        <div className="text-white max-w-lg text-left sm:text-left">
          <h1 className="text-3xl sm:text-5xl  font-bold text-text mb-4">
            Welcome to Dutta Integrated Services
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Delivering excellence in every service we offer
          </p>

          {/* New Text Content */}
          <p className="text-sm sm:text-md mb-4 text-gray-300">
            At Dutta Integrated Services, we’re committed to providing top-quality solutions tailored to meet your unique needs. With a team of dedicated professionals, we cover a wide range of services that empower your business, enhance productivity, and drive sustainable growth.
          </p>
          <p className="text-sm sm:text-md mb-6 text-gray-300">
            From comprehensive consulting to hands-on support, we go beyond expectations to deliver results that matter. Trust us to be your partner in achieving success and excellence in every project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row text-center space-y-2 sm:space-y-0 sm:space-x-2">
            {/* Get Started Button */}
            <a href="#contact" className="px-4 py-2 bg-[#ee6b6e] text-white font-semibold rounded-lg hover:bg-transparent hover:text-[#ee6b6e] hover:border-[#ee6b6e] border border-white transition duration-300">
              Get Started
            </a>

            {/* Learn More Button */}
            <a href="#services" className="px-4 py-2 bg-transparent text-[#ee6b6e] font-semibold rounded-lg hover:bg-[#ee6b6e] hover:text-white hover:border-white border border-[#ee6b6e] transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}













//industries card

export function IndustriesCard({ image, label, description }) {
  return (
    <a href="#contact">
    <div className="relative max-w-sm bg-div border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
      
      {/* Overlay for unique hover effect */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-lg"></div>

      <div className="image-container h-48 overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
          src={image}
          alt={label}
        />
      </div>

      <div className="p-5 transition-opacity duration-300 hover:opacity-90">
        <a href="#contact">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-text dark:text-white transition-colors duration-300 hover:text-yellow-400">
            {label}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white dark:text-gray-400 transition-opacity duration-300 opacity-80 hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
    </a>
  );
}






// //about us

// export function About() {
//   return (
//     <div id="about" className="bg-background text-white py-10 sm:py-16 px-4">
//       <div className="bg-background p-5 md:p-10 w-full lg:w-5/6 mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
//           <div>
//             <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
//               How It Started
//             </h2>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl text-text font-bold mb-4">
//               Our Dream is Global Learning Transformation
//             </h1>
//             <p className="text-white text-sm sm:text-base mb-6 leading-relaxed">
//               Kawruh was founded by Robert Anderson, a passionate lifelong learner, and Maria Sanchez,
//               a visionary educator. Their shared dream was to create a digital haven of knowledge 
//               accessible to all. United by their belief in the transformational power of education, 
//               they embarked on a journey to build 'Kawruh.' With relentless dedication, they gathered 
//               a team of experts and launched this innovative platform, creating a global community 
//               of eager learners, all connected by the desire to explore, learn, and grow.
//             </p>
//           </div>
//           <div className="flex justify-center lg:justify-end">
//             <img 
//               className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg" 
//               src="./assets/images/office.jpg" 
//               alt="Founders working together"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center mt-10">
//           <div className="bg-div p-4 sm:p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl sm:text-3xl font-bold text-text">3.5</h3>
//             <p className="text-text text-sm sm:text-base">Years Experience</p>
//           </div>
//           <div className="bg-div p-4 sm:p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl sm:text-3xl font-bold text-text">23</h3>
//             <p className="text-text text-sm sm:text-base">Project Challenge</p>
//           </div>
//           <div className="bg-div p-4 sm:p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl sm:text-3xl font-bold text-text">830+</h3>
//             <p className="text-text text-sm sm:text-base">Positive Reviews</p>
//           </div>
//           <div className="bg-div p-4 sm:p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl sm:text-3xl font-bold text-text">100K</h3>
//             <p className="text-text text-sm sm:text-base">Trusted Students</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




















