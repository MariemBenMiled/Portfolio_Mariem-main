import React from 'react';
import Typical from 'react-typical';
import {assets} from '../assets/assets'; // Adjust the path according to your assets' location

function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-br1 from-orange-50 via-orange-100 to-orange-200 text-white p-6 animate-bgColor">

            {/* Image Section with Gradient Border and Pulse Animation */}
            <div className="relative mb-6 md:mb-0 md:mr-12">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-lg shadow-orange-500/50 overflow-hidden bg-gradient-to-r from-orange-200 via-slate-300 to-orange-200 p-1 animate-pulseHover">
                    <img
                        src={assets.myImg}
                        alt="Mariem Ben Miled"
                        className="w-full h-full rounded-xl transition-transform duration-500 transform hover:scale-110 opacity-80 hover:opacity-80"
                    />
                </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hello, I'm <br/><span
                    className="bg-clip-text font-bold text-gray-800">Mariem Ben Miled</span>
                </h1>
                <p className="mt-4 text-2xl md:text-3xl font-semibold relative">
                <span
                    className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent transition duration-500 ease-in-out">
                    <Typical
                    
                        // Adjust the steps and loop according to your needs
                        steps={['E-Business student at ESSECT ', 5000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </span>

                </p>

            </div>

        </section>
    );
}

export default Hero;
