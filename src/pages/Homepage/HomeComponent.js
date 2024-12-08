import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

// Exporting the function as a named export
export function BusinessSolutions() {
  useEffect(() => {
    AOS.init({ duration: 1000 ,
        offset:160
    });
  }, []);

  return (
    <div className="bg-black flex justify-center py-20 md:px-5 items-center">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
        data-aos="fade-up"
      >
        {/* Left Section: Text Content */}
        <div className="text-center lg:text-left" data-aos="fade-up" >
          <h1 className="text-6xl font-bold text-text mb-4">
            THE ONE STOP SHOP FOR YOUR BUSINESS
          </h1>
          <p className="text-3xl text-white mb-6">
            Comprehensive suite of IT and business solutions tailored to your specific needs.
          </p>
          <button className="bg-text text-white py-2 px-6 rounded hover:bg-gray-700">
            Learn More
          </button>
        </div>

        {/* Right Section: Image/Design */}
        <div className="relative px-5">
          <div
            className="bg-black "
           data-aos="fade-left"
          >
            <img
              src="./assets/images/home1.jpg" // Replace with your image file path
              alt="Consulting Diagram"
              className="rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export function BusinessConsulting() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white pb-8 w-full  sm:px-6 lg:px-20">
      <div className="px-2 max-w-7xl mx-auto">
        {/* Header Section */}
        <h1
          className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left"
          data-aos="fade-down"
        >
          _DIS
        </h1>
        <div
          className="border-b-2 border-white mb-8"
          data-aos="fade-down"
        ></div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          {/* Left: Image Section */}
          <div
            className="w-full md:w-1/2 mb-5 md:mb-0 flex justify-center"
            data-aos="fade-right"
          >
            <img
              src="./assets/images/consultationhome.jpg" // Replace with your image URL
              alt="Business Meeting"
              className="w-full h-auto max-w-sm md:max-w-full rounded-md"
            />
          </div>

          {/* Right: Text Content */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Comprehensive IT and Business Solutions
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              We offer a comprehensive suite of IT and business solutions tailored
              to your specific needs. From web and app development to SaaS and
              software solutions, we've got you covered along with basic business
              needs like GST and trademark registration, warehouse and logistics,
              procurement, and staffing. Partner with us to unlock your business's
              full potential. Let's build a brighter future together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






export function ITConsultingServices() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration
  }, []);

  return (
    <div className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-left mb-8 border-b-2 border-white pb-4 w-full"
          data-aos="fade-down"
        >
          EXPERT IT CONSULTING SERVICES BY _DIS
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
          {/* Image Section */}
          <div
            className="flex justify-start lg:w-1/3"
            data-aos="fade-right"
          >
            <img
              src="./assets/images/homeIT.jpg" // Replace with your image URL
              alt="IT Consultant"
              className="w-full max-w-sm rounded-md object-fit"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">IT Strategy Consulting</h2>
              <p className="text-gray-300">
                We work with our clients to develop a comprehensive IT strategy that aligns with
                business goals and objectives. Our team of experts will assess your current IT
                infrastructure, identify gaps and opportunities, and provide recommendations for
                improvement.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Cloud Computing Services</h2>
              <p className="text-gray-300">
                We help our clients leverage the power of cloud computing to improve their
                operational efficiency, reduce costs, and enhance their ability to innovate. Our
                team has extensive experience in designing and implementing cloud solutions
                tailored to meet our clients' specific needs.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Data Analytics Consulting</h2>
              <p className="text-gray-300">
                We help our clients leverage the power of data to drive business growth and
                innovation. Our team of experts has extensive experience in data analytics, data
                warehousing, and business intelligence.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Managed IT Services</h2>
              <p className="text-gray-300" >
                We provide managed IT services that ensure the smooth operation of your IT systems,
                allowing you to focus on your core business activities while we handle your IT
                needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Digital Transformation Consulting</h2>
              <p className="text-gray-300">
                We help our clients navigate the complex and rapidly changing digital landscape to drive business growth and innovation. Our team of experts has extensive experience in digital strategy, customer experience design, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export function ITConsultingServicesCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Cloud Solutions",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      description:
        "We provide scalable and cost-effective cloud solutions for businesses of all sizes. Our team of experts can help you migrate your applications and data to the cloud, ensuring maximum performance and security.",
      animation: "fade-right",
    },
    {
      title: "Managed IT Services",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      description:
        "Our managed IT services allow you to focus on your core business while we handle your IT infrastructure. We provide 24/7 monitoring, proactive maintenance, and helpdesk support to keep your systems running smoothly.",
      animation: "fade-up",
    },
    {
      title: "Data Analytics",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      description:
        "We help businesses harness the power of data to gain insights and make informed decisions. Our team can help you collect, analyze, and visualize your data to uncover trends, patterns, and opportunities.",
      animation: "fade-left",
    },
    {
      title: "Software Development",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      description:
        "We develop custom software solutions tailored to meet your business needs, ensuring seamless integration and optimal performance.",
      animation: "fade-right",
    },
    {
      title: "IT Strategy Consulting",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      description:
        "Our IT strategy consulting services help businesses align their technology with their business goals, ensuring long-term success and innovation.",
      animation: "fade-up",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          Expert IT Consulting Services
        </h2>
        <div
          className="border-b-2 border-white mb-8"
          data-aos="fade-down"
        ></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-lg p-5 shadow-lg"
              data-aos={service.animation}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
