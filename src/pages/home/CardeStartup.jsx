import React from 'react'

function CardeStartup() {
  return (
   <>
   
   
   {/* Grille de cartes */}

        
          {/* Carte 1 */}
        <div className="border-l-5 border-[#203E11] 0 rounded-md overflow-hidden shadow-sm bg-green-100">
          <img
            src="src/assets/TEC.jpg"
            alt="TechMaroc"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-green-900 text-lg">TechMaroc</h3>
            <p className="text-yellow-600 font-semibold">
              Intelligence Artificielle
            </p>
            <p className="text-gray-700 text-sm mt-2">
              Plateforme d'IA pour l'optimisation des processus industriels.
            </p>
          </div>
        </div>

   </>
  )
}

export default CardeStartup
