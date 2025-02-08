import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 text-white p-4 shadow-lg fixed w-full z-10 transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Name Section */}
                <div className="flex items-center">
                    <button className="flex items-center transition duration-300 hover:opacity-80 focus:outline-none" aria-label="Home">
                        <span className="text-lg font-bold text-gray-700">MARIEM BEN MILED</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {/* Navigation Links */}
                    {['About', 'Technologies', 'projects'].map((link) => (
                        <a
                            href={`#${link.toLowerCase()}`}
                            key={link}
                            className="text-gray-700 hover:text-gray-800 font-bold transition duration-300"
                            aria-label={link}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="/cv.pdf" // Adjust the path to your resume's location
                        download
                        className="text-gray-700 hover:text-gray-800 font-bold transition duration-300"
                        aria-label="Download Resume"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-2 p-4 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    {['About', 'Technologies', 'projects'].map((link) => (
                        <a
                            href={`#${link.toLowerCase()}`}
                            key={link}
                            className="block px-4 py-2 hover:bg-gray-600 transition duration-300"
                            aria-label={link}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="/cv.pdf"
                        download
                        className="block px-4 py-2 hover:bg-gray-600 transition duration-300"
                        aria-label="Download Resume"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
