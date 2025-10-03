import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
   const navigate = useNavigate();
  return (
    <section className="bg-[#C9E3CC] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#203E11] mb-6 leading-tight">
              Découvrez l'écosystème digital marocain
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connectez-vous avec les startups innovantes, participez aux événements et développez votre réseau entrepreneurial.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors mb-8 shadow-lg"  onClick={() => navigate("/ajouter-startup")}>
              Publier ma startup
            </button>

            {/* Search Form */}
            <div className="flex max-w-lg">
              <input
                type="text"
                placeholder="Rechercher une startup..."
                className=" bg-white flex-1 px-6 py-3 border-2 border-gray-200 rounded-l-lg outline-none focus:border-[#203E11] transition-colors text-gray-700"
              />
              <button className="px-8 py-3 bg-[#203E11] text-white rounded-r-lg font-semibold hover:bg-[#203E11] transition-colors">
                Rechercher
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1">
            <div className="relative bg-gradient-to-br from-[#203E11] to-green-600 rounded-2xl h-80 lg:h-96 flex items-center justify-center text-white font-semibold text-xl shadow-2xl overflow-hidden">
              
             
              
              
              {/* Contenu principal */}
              <div className="relative z-10 text-center p-8">
               <img src='src/assets/17835.jpg'/>
              </div>

            </div>
          </div>













        </div>
      </div>
    </section>
  );
};

export default HeroSection;