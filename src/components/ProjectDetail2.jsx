import React, { useState } from 'react';
import { assets } from "../assets/assets";

const websiteImages = [
    assets.project_2_1,
    assets.project_2_2,
    assets.project_2_3,
    assets.project_2_4,
];

const ProjectDetail2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour fermer l'image agrandie
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="mx-auto px-4 py-16 text-gray-100 bg-orange-100 min-h-screen">
            <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-orange-100">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-400">NBA Statistiques</h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-800">
                Ce projet de Business Intelligence vise à créer une solution analytique complète pour
                explorer les performances des joueurs et des équipes de basketball au fil des saisons. En 
                utilisant des techniques avancées de collecte, transformation, et visualisation des données, 
                nous avons développé un système capable d'extraire des insights stratégiques pour les 
                passionnés, analystes, et gestionnaires de basketball. Le projet se déroule en quatre étapes 
                clés : scraping web, ETL, base de données SQL Server, et dashboard Power BI.
                </p>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-teal-400">Captures d'écrans</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {websiteImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Website Interface ${index + 1}`}
                                    className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-800 mb-4 mt-4">
                        <strong>Technologies utilisées : Python, Power BI, SQL Server, </strong> 
                    </p>
                </div>


                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative">
                            <img src={selectedImage} alt="Selected" className=" max-h-96 rounded-lg shadow-lg" />
                            <button onClick={closeImage} className="absolute top-2 right-2 text-green-600 text-4xl font-bold hover:text-green-800">&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail2;
