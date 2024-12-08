import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useLocation } from "react-router-dom";

// Initialize AOS animations
AOS.init();

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and modern websites tailored to your business needs.',
    icon: './assets/images/serviceWeb.jpg',
  },
  {
    title: 'App Development',
    description: 'Create mobile apps that are both user-friendly and powerful.',
    icon: './assets/images/serviceApp.jpg',
  },
  {
    title: 'API Development',
    description: 'Develop custom APIs to seamlessly integrate your services and applications.',
    icon: './assets/images/serviceApi.png',
  },
  {
    title: 'E-commerce',
    description: 'Increase your online visibility and attract more traffic to your website.',
    icon: './assets/images/serviceE-commerce.png',
  },
  {
    title: 'CRM',
    description: 'Boost your business with our expert sales strategies.',
    icon: './assets/images/serviceCrm.png',
  },
  {
    title: 'Graphic Design',
    description: 'Design captivating graphics that leave a lasting impression.',
    icon: './assets/images/serviceGraphics.jpg',
  },
  {
    title: 'SAAS',
    description: 'Leverage software as a service to streamline your business operations.',
    icon: './assets/images/serviceSaas.png',
  },
  {
    title: 'WhatsApp API',
    description: 'Integrate WhatsApp for enhanced communication with your customers.',
    icon: './assets/images/serviceWhatsAppApi.png',
  },
  {
    title: 'Cloud Service',
    description: 'Harness the power of cloud computing for scalability and flexibility.',
    icon: './assets/images/serviceCloud.png',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your brand presence with our tailored digital marketing solutions.',
    icon: './assets/images/serviceDigitalMarketing.png',
  },
  {
    title: 'Dedicated Hosting',
    description: 'Ensure high performance and reliability with dedicated hosting services.',
    icon: './assets/images/serviceHosting.png',
  },
];

const ServicesPage = () => {
  const location = useLocation(); // Access the location object

  // Scroll to the services section when location changes to "/services"
  useEffect(() => {
    if (location.pathname === "/services") {
      const businessSection = document.getElementById("services");
      if (businessSection) {
        businessSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div id="services" className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-text">IT Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/contact"
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
      <Footer />
    </>
  );
};

export default ServicesPage;
