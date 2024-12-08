import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Homepage/Home';

import Services from './pages/Services';
import BusinessPage from './pages/business';
import EnhancedContactForm from './pages/Contact';
import './App.css';

import ScrollToTop from './pages/ScrollToTop';

import ConsultationtPage from './pages/Consultant';
import { AboutPage } from './pages/About';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<ConsultationtPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<EnhancedContactForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/itsolutions" element={<BusinessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
