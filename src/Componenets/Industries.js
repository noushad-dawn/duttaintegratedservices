import React from 'react';
import { IndustriesCard } from './Componenets';

const Industries = () => {
    return (
        <div id='industries' className="flex flex-col  items-center p-6 bg-background bg-div">
            <h2 className="text-center text-2xl font-bold mb-6 text-text">Our Expertised Industries</h2>
            <div className="md:w-5/6 p-4">
                <p className="text-white dark:text-gray-300 mb-4">
                    We’re passionate about the industries we operate in. Armed with expert knowledge of their sector, our consultants fully appreciate the essential skills, qualities, and expertise candidates need to ensure our clients remain at the forefront of their industry. 
                    <br /><br />
                    Each industry presents unique challenges and opportunities. Here at our company, we leverage our extensive experience to navigate these complexities, ensuring that we provide our clients with the highest level of service and expertise.
                </p>
            </div>

            <div className="md:w-5/6 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <IndustriesCard
                        image='./assets/images/education.jpg'
                        label="Education"
                        description="Empowering educational institutions with digital solutions that enhance learning, streamline administration, and create engaging experiences for students and educators alike."
                    />
                    <IndustriesCard
                        image='./assets/images/health.jpg'
                        label="Health"
                        description="Providing healthcare organizations with innovative technology solutions to improve patient care, optimize operations, and facilitate secure communication and data management."
                    />
                    <IndustriesCard
                        image='./assets/images/travel.jpg'
                        label="Travel"
                        description="Transforming the travel experience through digital tools that simplify booking, enhance customer engagement, and streamline logistics, ensuring memorable journeys for every traveler."
                    />
                    <IndustriesCard
                        image='./assets/images/realstate.jpg'
                        label="Real Estate"
                        description="Offering real estate solutions that simplify property management, enhance customer interactions, and support informed decision-making with easy access to market data and analytics."
                    />
                    <IndustriesCard
                        image='./assets/images/transport.jpg'
                        label="Transport"
                        description="Enabling the transportation sector with technology that optimizes logistics, improves fleet management, and ensures smooth, efficient operations across the supply chain."
                    />
                    <IndustriesCard
                        image='./assets/images/finance.jpg'
                        label="Banking and Finance"
                        description="Delivering secure, efficient digital solutions for the banking and finance sector, empowering institutions to manage transactions, customer relationships, and regulatory compliance effectively."
                    />
                </div>
            </div>
        </div>
    );
};

export default Industries;
