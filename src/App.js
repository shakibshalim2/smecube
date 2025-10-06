import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FacebookBoosting from './pages/services/FacebookBoosting';
import EcommerceSolution from './pages/services/EcommerceSolution';
import WebDevelopment from './pages/services/WebDevelopment';
import BusinessConsulting from './pages/services/BusinessConsulting';
import BrandPageSetup from './pages/services/BrandPageSetup';
import ChatbotSetup from './pages/services/ChatbotSetup';
import GraphicDesign from './pages/services/GraphicDesign';
import LandingPage from './pages/services/LandingPage';
import BulkSMS from './pages/services/BulkSMS';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 font-hind">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/facebook-boosting" element={<FacebookBoosting />} />
          <Route path="/services/ecommerce-solution" element={<EcommerceSolution />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />

          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
<Route path="/services/brand-page-setup" element={<BrandPageSetup />} />

            <Route path="/services/chatbot-setup" element={<ChatbotSetup />} /> {/* Add this route */}

            <Route path="/services/graphic-design" element={<GraphicDesign />} />
<Route path="/services/landing-page" element={<LandingPage />} />
<Route path="/services/bulk-sms" element={<BulkSMS />} />

        </Routes>
        <Footer />
        <ChatSupport />
      </div>
    </Router>
  );
}

export default App;
