import React from 'react';
import { Component,ContactForm,WelcomeSection} from './Componenets/Componenets'; // Adjust the path if needed
import OurServices from './Componenets/OurServices';
import Industries from './Componenets/Industries';

import Navbar from './Componenets/Navbar/Navbar';





function App() {
  return (
    <div className="App">
        <Navbar/>
   
      
       <WelcomeSection/>
        <OurServices />
        <Industries />
        <ContactForm />
       
        <Component />
    
     </div>
    
  );
}

export default App;
