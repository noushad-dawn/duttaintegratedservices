import React, { useEffect } from 'react';
import { ServiceCard } from './Components';
import Aos from 'aos';
import 'aos/dist/aos.css'
const OurServices = () => {

    useEffect(()=>{
        Aos.init({

        });
    });

    return (
        <div id='services' className="flex flex-col items-center p-6 bg-div">
            <h2 className="text-center text-2xl font-bold mb-6 text-text">Our Services</h2>
            
            <div className="md:w-full p-4 ">
                <p className="text-white dark:text-gray-300 mb-4" data-aos="fade-up">
                    Our IT solutions are designed to empower your business with tailored approaches and expertise in key technology areas. We provide high-quality, customized services to support your business goals.
                </p>
            </div>

            <div className="md:w-5/6 p-4 ">
    <div className="flex flex-wrap justify-center gap-6"> {/* Centered the content */}
        <ServiceCard 
            title="Web Development"
            image="./assets/images/web.png"
            description="Our team builds custom, scalable websites that cater to your specific needs. We focus on creating secure, efficient, and visually appealing websites that drive engagement and business growth."
        />
        <ServiceCard
            title="App Development"
            image="./assets/images/app.png"
            description="We specialize in developing intuitive and user-friendly mobile applications for both iOS and Android platforms, ensuring seamless functionality and a delightful user experience."
        />
        <ServiceCard
            title="API Development"
            image="./assets/images/api.png"
            description="Our API development services enable smooth integration across platforms, allowing different software applications to interact efficiently and securely within your ecosystem."
        />
        <ServiceCard
            title="Graphic Design"
            image="./assets/images/graphics.png"
            description="From branding to digital assets, our graphic design services bring your brand to life with visually striking designs that communicate your message and captivate your audience."
        />
        <ServiceCard
            title="E-commerce Solutions"
            image="./assets/images/e-commerce.png"
            description="We create robust e-commerce platforms tailored to your business, providing a seamless shopping experience with secure payment options and easy navigation."
        />
        <ServiceCard
            title="SEO Services"
            image="./assets/images/sales.png"
            description="Boost your online visibility with our SEO strategies that enhance search engine rankings, increase traffic, and drive qualified leads to your business."
        />
    </div>
</div>

        </div>
    );
}

export default OurServices;
