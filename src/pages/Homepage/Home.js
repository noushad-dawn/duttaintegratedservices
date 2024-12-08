import React from 'react';
import { ContactForm, Component } from '../../Components/Components';
import OurServices from '../../Components/OurServices';
import Industries from '../../Components/Industries';
import Slider from '../../Components/Slider';
import './Home.css';
import { BusinessConsulting, BusinessSolutions, ITConsultingServices, ITConsultingServicesCard } from './HomeComponent';

function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen">
      <Slider className="section" />
      <BusinessSolutions/>
      <BusinessConsulting/>
      <ITConsultingServices/>
      <ITConsultingServicesCard/>
      {/* <OurServices className="section" />
      <Industries className="section" /> */}
      <ContactForm className="section" />
      <Component className="section" />
    </div>
  );
}

export default Home;
