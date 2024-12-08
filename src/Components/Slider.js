import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "./assets/images/slide1.jpg",
    title: "Welcome to Our Services",
    description: "Discover a wide range of solutions to elevate your business.",
    ctaText: "Explore Now",
    ctaLink: "/services",
  },
  {
    id: 2,
    image: "./assets/images/slide2.jpg",
    title: "Innovative Solutions",
    description: "We provide cutting-edge technology to drive your success.",
    ctaText: "Learn More",
    ctaLink: "/about",
  },
  {
    id: 3,
    image: "./assets/images/slide3.jpg",
    title: "Get Started Today",
    description: "Join us and transform your business with our expert services.",
    ctaText: "Get in Touch",
    ctaLink: "/contact",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center justify-center">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      ></div>

      {/* Card Slider */}
      <div className="relative w-[90%] md:w-[80%] h-[300px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrevious = (currentIndex - 1 + slides.length) % slides.length === index;
          const isNext = (currentIndex + 1) % slides.length === index;

          return (
            <div
              key={slide.id}
              className={`absolute transition-all duration-1000 ease-in-out transform ${
                isActive
                  ? "translate-x-0 scale-100 opacity-100 z-10"
                  : isPrevious
                  ? "-translate-x-40 scale-90 opacity-50 z-0"
                  : isNext
                  ? "translate-x-40 scale-90 opacity-50 z-0"
                  : "opacity-0 scale-75 z-0"
              }`}
            >
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-[500px] h-[300px] flex">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 py-6 z-10">
                  <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-4">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="bg-primary text-white py-2 px-6 rounded-full text-lg hover:bg-hover transition-all"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
