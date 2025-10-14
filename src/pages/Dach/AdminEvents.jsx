// src/components/admin/AdminEvents.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, deleteEvent } from "../../redux/eventsSlice";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.list || []);
  const status = useSelector((state) => state.events.status);
  const error = useSelector((state) => state.events.error);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleDelete = (event) => {
    const id = event._id || event.id;
    if (!id) return;
    if (window.confirm(`Voulez-vous vraiment supprimer "${event.title}" ?`)) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-8">
        Gestion des Événements
      </h1>

      {status === "loading" && (
        <p className="text-center text-gray-600">Chargement...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* ✅ Grille responsive */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map((e, index) => {
          const eventDate = new Date(e.date);
          const day = eventDate.getDate();
          const month = eventDate.toLocaleString("default", { month: "short" });

          return (
            <div
              key={e._id || e.id || index}
              className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white overflow-hidden"
            >
              {/* Bloc date et titre */}
              <div className="bg-green-100 text-center py-3">
                <p className="font-bold text-2xl text-green-800">{day}</p>
                <p className="uppercase text-sm text-green-700">{month}</p>
                <p className="font-semibold mt-1 text-green-900">
                  {e.title}
                </p>
              </div>

              {/* Contenu de la card */}
              <div className="p-4 flex flex-col justify-between h-56">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    📍 {e.location || "Non précisé"}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {e.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleDelete(e)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                  >
                    Supprimer
                  </button>
                  <button className="border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white transition">
                    Détails
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {events.length === 0 && status !== "loading" && (
          <p className="col-span-full text-center text-gray-500 italic">
            Aucun événement trouvé.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminEvents;
