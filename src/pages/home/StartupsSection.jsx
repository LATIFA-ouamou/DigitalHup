import CardeStartup from "./CardeStartup";

const StartupsSection = () => {
  return (
     <section className="py-10">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">
        Dernières startups
      </h2>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        
       <CardeStartup/>
       <CardeStartup/>
       <CardeStartup/>
       <CardeStartup/>
      </div>

      {/* Bouton */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 border border-[#203E11]  text-[#203E11]  px-4 py-2 rounded-md hover:bg-[#203E11]  hover:text-white transition">
          voir toutes les startups →
        </button>
      </div>
    </section>
  );
};

export default StartupsSection;