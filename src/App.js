import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home"; // Import your homepage component
import AboutPage from "./pages/About"; // Import other pages/components as needed
import ContactUs from "./pages/ContactUs";
import Reviews from './pages/Reviews';
import Media from "./pages/Media";
import Hapkido from './pages/Hapkido';
import DojangEtiquette from "./pages/DojangEtiquette";
import Grandmaster from './pages/Grandmaster';
import Instructors from './pages/Instructors';
import OurCurriculum from './pages/Programs';
import ClassSchedule from './pages/Schedule';
import AppFooter from "./shared/AppFooter";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Navbar from "./shared/Navbar";
import UseScrollToTop from './hooks/useScrollToTop';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <div>

    <Router>
      <ScrollToTop />
      <Navbar />  
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        {/* Add routes to other pages/components as needed */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/media-gallery" element={<Media />} />
        <Route path="/hapkido" element={<Hapkido />} />
        <Route path="/grandmaster" element={<Grandmaster />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/our-curriculum" element={<OurCurriculum />} /> 
        <Route path="/dojang-etiquette" element={<DojangEtiquette />} />
        <Route path="/events" element={<Events />} />

        {/* Add more routes for other pages */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <AppFooter />
    </Router>
    <UseScrollToTop />
    </div>
  );
};

export default App;
