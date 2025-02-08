import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="bg-orange-100 text-gray-800 py-4">
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/mariem-ben-miled/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* Replace with your LinkedIn profile */}
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500 transition duration-200" />
                </a>
                <a href="https://github.com/MariemBenMiled" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> {/* Replace with your GitHub profile */}
                    <FontAwesomeIcon icon={faGithub} className="text-2xl  hover:text-gray-400 transition duration-200" />
                </a>
                <a href="mailto:mariembenmiled67@gmail.com" aria-label="Email"> {/* Replace with your email */}
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl hover:text-red-500 transition duration-200" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
