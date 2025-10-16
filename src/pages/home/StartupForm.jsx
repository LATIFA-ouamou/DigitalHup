import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { uploadToCloudinary } from "./uploadToCloudinary";

const StartupForm = () => {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Validation des champs
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Le nom est obligatoire";
    if (!sector) newErrors.sector = "Le secteur est obligatoire";
    if (!description.trim()) newErrors.description = "La description est obligatoire";
    if (!image) newErrors.image = "Le logo est obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadToCloudinary(image);
      }

      const newStartup = { name, sector, description, image: imageUrl };
      await axios.post("http://localhost:5000/startups", newStartup);

      // Message de succès
      setMessage("✅ Startup ajoutée avec succès !");

      // Réinitialisation des inputs
      setName("");
      setSector("");
      setDescription("");
      setImage(null);
      setPreview(null);
      setErrors({});

      // Disparition du message après 5s
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Erreur lors de l'ajout de la startup");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Ajouter une startup
        </h2>

        {message && (
          <p className="text-center mb-4 font-semibold text-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom de la startup
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom de la startup"
              className="bg-[#B0B9A8] w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 outline-none shadow-sm"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Secteur */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secteur
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="bg-[#B0B9A8] w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 outline-none shadow-sm"
            >
              <option value="">Sélectionne un secteur</option>
              <option value="Intelligence Artificielle">🤖 Intelligence Artificielle</option>
              <option value="Fintech">💳 Fintech</option>
              <option value="E-commerce">🛒 E-commerce</option>
              <option value="Edtech">🎓 Edtech</option>
              <option value="Santé numérique">🏥 Santé numérique</option>
              <option value="Énergie verte">🌱 Énergie verte</option>
              <option value="Art & Culture">🎨 Art & Culture</option>
            </select>
            {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décris ta startup..."
              className="bg-[#B0B9A8] w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 outline-none shadow-sm"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Logo */}
          <div>
            <label className="bg-[#B0B9A8] block text-sm font-medium text-gray-700 mb-1">
              Logo (upload sur Cloudinary)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                setPreview(URL.createObjectURL(file));
              }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-[#203E11]"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>

          {/* Aperçu du logo */}
          {preview && (
            <div className="mt-3 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-xl shadow-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#203E11] text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-shadow shadow-md"
          >
            Publier la startup
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default StartupForm;
