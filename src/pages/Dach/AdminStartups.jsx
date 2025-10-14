// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteStartup } from "../../redux/startupSlice";

// const AdminStartups = () => {
//   const dispatch = useDispatch();
//   const startups = useSelector((state) => state.startups.list || []);

//   const handleDelete = (id) => {
//     if (window.confirm("Voulez-vous supprimer cette startup ?")) {
//       dispatch(deleteStartup(id)); // 👈 à créer dans ton slice
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       <h2 className="text-2xl font-bold mb-6 text-green-900">Toutes les Startups</h2>
//       <ul className="space-y-4">
//         {startups.map((startup) => (
//           <li
//             key={startup._id}
//             className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
//           >
//             <span className="font-medium">{startup.name}</span>
//             <button
//               onClick={() => handleDelete(startup._id)}
//               className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//             >
//               Supprimer
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminStartups;
















import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStartups, deleteStartup } from "../../redux/startupSlice";

const AdminStartups = () => {
  const dispatch = useDispatch();
  const startups = useSelector((state) => state.startups.list || []);
  const status = useSelector((state) => state.startups.status);
  const error = useSelector((state) => state.startups.error);

  useEffect(() => {
    dispatch(fetchStartups());
  }, [dispatch]);

  const handleDelete = (startup) => {
    const id = startup._id || startup.id;
    if (!id) return;

    if (window.confirm(`Voulez-vous vraiment supprimer "${startup.name}" ?`)) {
      dispatch(deleteStartup(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-8">
        Gestion des Startups
      </h1>

      {status === "loading" && (
        <p className="text-center text-gray-600">Chargement...</p>
      )}
      {error && <p className="text-center text-red-500">Erreur : {error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {startups.map((s, index) => (
          <div
            key={s._id || s.id || index}
            className="bg-[#C9E3CC] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={s.image || "/images/placeholder.png"}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-48">
              <div>
                <h3 className="font-bold text-green-900 text-lg mb-1">{s.name}</h3>
                <p className="text-yellow-700 font-semibold mb-2">{s.sector}</p>
                <p className="text-gray-700 text-sm line-clamp-3">{s.description}</p>
              </div>

              <button
                onClick={() => handleDelete(s)}
                className="mt-4 bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700 transition w-full"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}

        {startups.length === 0 && status !== "loading" && (
          <p className="col-span-full text-center text-gray-500 italic">
            Aucune startup trouvée.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminStartups;

