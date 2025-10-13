import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../redux/eventsSlice";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.list || []);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cet événement ?")) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-green-900">Tous les Événements</h2>
      <ul className="space-y-4">
        {events.map((e) => (
          <li
            key={e._id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <span className="font-medium">{e.title}</span>
            <button
              onClick={() => handleDelete(e._id)}
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
export default AdminEvents;
