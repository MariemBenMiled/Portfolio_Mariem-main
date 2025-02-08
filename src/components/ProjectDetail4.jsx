import React, { useState } from 'react';
import { assets } from "../assets/assets";

const websiteImages = [
    assets.project_4_1,
    assets.project_4_2,
];

const ProjectDetail4 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour fermer l'image agrandie
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="mx-auto px-4 py-16 text-gray-100 bg-orange-100 min-h-screen">
            <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-orange-100 border ">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-400">Analyse et Visualisation des Données</h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-800">
                Ce mini-projet porte sur l'analyse et la visualisation des données de l'Enquête Nationale sur l'Emploi en Tunisie, visant à nettoyer le dataset, explorer ses caractéristiques, effectuer des analyses descriptives et segmenter les données en clusters optimisés pour extraire des insights pertinents. Les résultats incluent des visualisations, un clustering avec la méthode K-Prototypes, et des fichiers CSV contenant des données préparées pour identifier des tendances sur les chômeurs volontaires.
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

export default ProjectDetail4;
