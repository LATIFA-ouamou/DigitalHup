import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../pages/home/Navbar";
import Footer from "../pages/home/Footer";
import { addEvent } from "../redux/eventsSlice";
import { useNavigate } from "react-router-dom";

const FormAjouteEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.events);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now().toString(),
      title,
      description,
      date,
      location,
    };

    dispatch(addEvent(newEvent));
    setTitle("");
    setDescription("");
    setDate("");
    setLocation("");

    // Optionnel : rediriger vers la liste
    navigate("/EventsPage");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border border-green-800 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
          Créer un nouvel événement
        </h2>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">Titre de l'événement</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nom de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 bg-[#B0B9A8] rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">Lieu</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Lieu de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-[#203E11] text-white px-6 py-2 rounded-md hover:bg-green-800"
            >
              Créer un événement
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FormAjouteEvent;


