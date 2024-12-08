import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import Footer from './Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

// Initialize AOS animations
AOS.init();

const services = [
  {
    title: 'Warehouse',
    description: 'Efficient warehouse management solutions to streamline inventory storage and distribution.',
    icon: './assets/images/bwarehouse.jpg',
  },
  {
    title: 'Transport',
    description: 'Reliable and cost-effective transport services to ensure timely deliveries and logistics management.',
    icon: './assets/images/transport.jpg',
  },
  {
    title: 'License & Registration',
    description: 'Comprehensive support for obtaining licenses and handling all registration requirements seamlessly.',
    icon: './assets/images/bl&r.jpg',
  },
  {
    title: 'Staffing',
    description: 'Provide skilled staffing solutions tailored to meet the workforce needs of your business.',
    icon: './assets/images/bstaff.png',
  },
  {
    title: 'Printing',
    description: 'High-quality printing services for all your marketing and business needs, from brochures to banners.',
    icon: './assets/images/bprint.png',
  },
  {
    title: 'Packaging',
    description: 'Custom packaging solutions that ensure safe and secure delivery of your products, enhancing brand presentation.',
    icon: './assets/images/bpackage.png',
  },
];

const BusinessPage = () => {
  const location = useLocation(); // Access the location object

  // Scroll to the business section when location changes to "/itsolutions"
  useEffect(() => {
    if (location.pathname === "/itsolutions") {
      const businessSection = document.getElementById("business");
      if (businessSection) {
        businessSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div id="business" className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-text">Business Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/contact" // Link to the /contact page
                className="relative bg-div shadow-lg rounded-lg overflow-hidden group border-2 border-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ height: '450px' }} // Adjust height for larger cards
              >
                {/* Card Title */}
                <div className="absolute top-0 left-0 w-full bg-black bg-opacity-70 text-white text-xl font-semibold py-3 text-center z-10">
                  {service.title}
                </div>

                {/* Card Image */}
                <div className="h-full">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Description with Slide-In Effect */}
                <div className="absolute bottom-0 left-0 w-full px-6 text-white text-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-[-50%]">
                  <p className="text-lg">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div id="contact">
        {/* Your contact section content here */}
      </div>
      <Footer />
    </>
  );
};

export default BusinessPage;
