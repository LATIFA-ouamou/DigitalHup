import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStartups } from "../../redux/startupSlice"; 
import CardeStartup from "./CardeStartup";

const StartupsSection = () => {
  const dispatch = useDispatch();
  const { list: startups, loading, error } = useSelector(
    (state) => state.startups
  );

  const [selectedSector, setSelectedSector] = useState(""); // secteur filtré
  const [currentPage, setCurrentPage] = useState(1);
  const startupsPerPage = 8;

  useEffect(() => {
    dispatch(fetchStartups());
  }, [dispatch]);

  // 🔹 Filtrage par secteur
  const filteredStartups = selectedSector
    ? startups.filter((s) => s.sector === selectedSector)
    : startups;

  // 🔹 Pagination
  const indexOfLastStartup = currentPage * startupsPerPage;
  const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
  const currentStartups = filteredStartups.slice(
    indexOfFirstStartup,
    indexOfLastStartup
  );

  const totalPages = Math.ceil(filteredStartups.length / startupsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 🔹 Les 3 dernières startups
  const latestStartups = [...startups]
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, 3);

  // 🔹 Startup du mois (la plus récente)
  const startupDuMois = startups
    .slice()
    .sort((a, b) => b.id.localeCompare(a.id))[0];

  return (
    <section className="py-10 bg[#C9E3CC]-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">
        🚀 Startups
      </h2>

      {/* Filtre par secteur */}
      <div className="flex justify-center mb-6 gap-6 flex-wrap">
        <select
          value={selectedSector}
          onChange={(e) => {
            setSelectedSector(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none"
        >
          <option value="">Tous les secteurs</option>
          <option value="Intelligence Artificielle">🤖 IA</option>
          <option value="Fintech">💳 Fintech</option>
          <option value="E-commerce">🛒 E-commerce</option>
          <option value="Edtech">🎓 Edtech</option>
          <option value="Santé numérique">🏥 Santé</option>
          <option value="Énergie verte">🌱 Énergie verte</option>
          <option value="Art & Culture">🎨 Art & Culture</option>
        </select>
      </div>

      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Grille principale des startups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-[100px]">
        {currentStartups.length > 0 ? (
          currentStartups.map((s) => <CardeStartup key={s.id} startup={s} />)
        ) : (
          !loading && (
            <p className="col-span-full text-center text-gray-600">
              Aucune startup disponible
            </p>
          )
        )}
      </div>

      {/* Pagination */}
      {filteredStartups.length > startupsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            ⬅ Précédent
          </button>
          <span className="text-gray-700 font-medium">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Suivant ➡
          </button>
        </div>
      )}

      {/* 3 Dernières startups */}
      <div className="mt-12 max-w-7xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6 text-center">
          🌟 Les 3 dernières startups
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestStartups.map((s) => (
            <CardeStartup key={s.id} startup={s} />
          ))}
        </div>
      </div>

      {/* Startup du mois (carte ovale + image ronde) */}
      {startupDuMois && (
        <div className="mt-12 flex justify-center">
          <div className="bg-green-100 rounded-full p-8 flex flex-col items-center shadow-md w-full max-w-md">
            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4 text-center">
              🏆 Startup du Mois
            </h3>

            {/* Image/logo ronde */}
            {startupDuMois.image && (
              <img
                src={startupDuMois.image}
                alt={startupDuMois.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-200 shadow-md"
              />
            )}

            {/* Nom et description */}
            <h4 className="text-lg font-semibold text-green-900 mb-2 text-center">
              {startupDuMois.name}
            </h4>
            <p className="text-gray-700 text-center">{startupDuMois.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default StartupsSection;
