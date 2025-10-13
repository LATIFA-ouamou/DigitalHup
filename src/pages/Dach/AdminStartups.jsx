import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStartup } from "../../redux/startupSlice";

const AdminStartups = () => {
  const dispatch = useDispatch();
  const startups = useSelector((state) => state.startups.list || []);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous supprimer cette startup ?")) {
      dispatch(deleteStartup(id)); // 👈 à créer dans ton slice
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-green-900">Toutes les Startups</h2>
      <ul className="space-y-4">
        {startups.map((startup) => (
          <li
            key={startup._id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <span className="font-medium">{startup.name}</span>
            <button
              onClick={() => handleDelete(startup._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminStartups;
