import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail1 from './components/ProjectDetail1';
import ProjectDetail2 from './components/ProjectDetail2';
import ProjectDetail3 from './components/ProjectDetail3';
import ProjectDetail4 from './components/ProjectDetail4';
import Footer from './components/Footer';
import Technologies from "./components/Technologies";

const App = () => {
    const location = useLocation(); // Get the current location

    // Determine whether to show the Navbar based on the current pathname
    const showNavbar = !['/projects/glamory', '/projects/nba', '/projects/comparaison-modeles', '/projects/analyse'].includes(location.pathname);

    return (
        <div className="text-gray-800 bg-gray-50">
            {showNavbar && <Navbar />} {/* Conditionally render the Navbar */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero/>
                        <About/>
                        <Technologies/>
                        <Projects/>
                    </>
                } />
                <Route path="/projects/glamory" element={<ProjectDetail1 />} />
                <Route path="/projects/nba" element={<ProjectDetail2 />} />
                <Route path="/projects/comparaison-modeles" element={<ProjectDetail3 />} />
                <Route path="/projects/analyse" element={<ProjectDetail4 />} />

            </Routes>
            <Footer/>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
