import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";

const projects = [
    {
        title: 'Glamory', // Titre du projet
        description: 'Optimisation des commandes, notifications en temps réel, paiements flexibles et UX améliorée pour une marketplace.', // Description du projet
        technologies: ['ReactJS', 'Node.js', 'Bootstrap'], // Adjust the technologies as needed
        link: '/projects/glamory', // Lien vers la page de détails
        image: assets.project_1_1
    },
    {
        title: 'NBA Statistiques', // Titre du projet
        description: 'Analyse des performances en basketball via scraping, ETL, SQL Server et dashboard Power BI.', // Description du projet
        technologies: ['Python', 'SQL Server', 'Power BI', 'ETL', 'scraping'], // Adjust the technologies as needed
        link: '/projects/nba', // Lien vers la page de détails
        image: assets.project_2_1
    },
    
    {
        title: 'Analyse et Visualisation des Données', // Titre du projet
        description: "Ce mini-projet porte sur l'analyse et la visualisation des données de l'Enquête Nationale sur l'Emploi en Tunisie", // Description du projet
        technologies: ['Python'], // Adjust the technologies as needed
        link: '/projects/analyse', // Lien vers la page de détails
        image: assets.project_4_1
    },
    {
        title: 'Analyse et Comparaison de Modèles', // Titre du projet
        description: 'Ce projet vise à explorer et à appliquer des techniques de Machine Learning sur un jeu de données supervisé.', // Description du projet
        technologies: ['python'], // Adjust the technologies as needed
        link: '/projects/comparaison-modeles', // Lien vers la page de détails
        image: assets.project_3_1
    },
    
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gradient-to-br from-gray-900 to-black text-white py-10">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-default">
                    {projects.map((project, index) => (
                        <Link to={project.link} key={index} target="_blank" className="relative rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-110 shadow-orange-500/50  hover:shadow-2xl hover:orange-cyan-500/50 project-card brightness-110"
                              style={{
                                  backgroundImage: `url(${project.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  height: '300px',
                              }}>
                            <div className="bg-gray-950 bg-opacity-70 h-full flex flex-col justify-center p-6 backdrop-blur-sm hover:backdrop-blur-none hover:blur-3xl transition duration-500 hover:duration-500">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-lg mb-4">{project.description}</p>
                                <p className="text-sm mb-4">
                                    <strong>Technologies :</strong> {project.technologies.join(', ')}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
