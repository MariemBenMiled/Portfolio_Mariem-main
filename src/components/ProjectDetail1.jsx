import React, { useState } from 'react';
import { assets } from "../assets/assets";

const websiteImages = [
    assets.project_1_1,
    assets.project_1_2,
    assets.project_1_3,
    assets.project_1_4,
    assets.project_1_5,
    assets.project_1_6,
    assets.project_1_7,
    assets.project_1_8,
    assets.project_1_9
];

const ProjectDetail2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour fermer l'image agrandie
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="mx-auto px-4 py-16 text-gray-100 bg-orange-100 min-h-screen">
            <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-orange-100 ">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-400">Glamory</h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-800">
                    Afin de remédier à l’inadéquation des méthodes de réservation actuelles, nous propo-
                    sons d’optimiser le processus de commande pour des achats plus rapides, d’envoyer des

                    notifications en temps réel sur les nouveaux produits et promotions, et d’intégrer des op-
                    tions de paiement flexibles telles que les paiements échelonnés et le paiement à la livraison.

                    Nous améliorerons aussi l’interface utilisateur pour une navigation intuitive et offrirons un
                    service client réactif pour assister les utilisateurs rapidement.
                    Ces solutions visent à améliorer la satisfaction et la fidélité des clients. Développer une application web pour une MarketPlace: 

                    React-Bootstrap (Front-end) 
                    Node.js (Back-end)
                    Développement du côté admin: ajout d’un dashboard PowerBI pour piloter les ventes sur la MarketPlace (offre une vue complète sur la performance commerciale comme l’évolution des ventes, etc…)
                </p>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-teal-400">Capture d'écrans</h3>
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
                    <p className="text-lg mb-4 text-gray-800 mt-4">
                        <strong>Technologies utilisées :</strong> Node.js, React, Bootstrap
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
