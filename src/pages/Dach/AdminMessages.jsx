import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../redux/messagesSlice";

const AdminMessages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.list || []);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer ce message ?")) {
      dispatch(deleteMessage(id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-green-900">Tous les Messages</h2>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li
            key={msg._id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <span>{msg.content}</span>
            <button
              onClick={() => handleDelete(msg._id)}
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
export default AdminMessages;
