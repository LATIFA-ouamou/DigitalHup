import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { fetchMessages, addMessage } from "../../redux/messagesSlice";

function Disscution() {
  const dispatch = useDispatch();
  const { list: messages, loading, error, success } = useSelector(
    (state) => state.messages
  );

  // ✅ On récupère l'utilisateur et son rôle depuis Redux
  const { user, role, isAuthenticated } = useSelector((state) => state.auth);

  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    // ⚠️ Si l’utilisateur n’est pas connecté, on bloque la publication
    if (!isAuthenticated) {
      alert("Vous devez être connecté pour publier un message.");
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      name: user?.username || "Utilisateur",
      role: role || "visitor",
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addMessage(newMessage));
    setContent("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <header className="bg-[#203E11] text-white text-center py-10 my-2">
          <h1 className="text-3xl font-bold">Espace Discussions</h1>
          <p className="mt-2">Partagez vos idées avec la communauté</p>
        </header>

        <main className="max-w-3xl mx-auto py-10 space-y-6 px-4">
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          {success && <p className="text-center text-green-600">{success}</p>}

          {/* Liste des messages */}
          {messages.map((msg) => (
            <div key={msg.id} className="bg-green-100 rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">{msg.name}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`text-white text-xs px-2 py-1 rounded ${
                    msg.role === "admin"
                      ? "bg-green-900"
                      : msg.role === "startup"
                      ? "bg-green-700"
                      : msg.role === "investor"
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  {msg.role.charAt(0).toUpperCase() + msg.role.slice(1)}
                </span>
              </div>
              <p className="mt-2 text-gray-800">{msg.content}</p>
            </div>
          ))}
        </main>

        {/* ✅ Zone d’écriture affichée seulement si connecté */}
        {isAuthenticated ? (
          <div className="max-w-3xl mx-auto px-4 py-6">
            <div className="bg-green-100 rounded-lg p-4">
              <textarea
                className="w-full border rounded p-3"
                rows="3"
                placeholder="Partagez vos idées, posez vos questions..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <button
                onClick={handleSubmit}
                className="mt-3 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Publier le message
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 pb-10">
            Connectez-vous pour participer à la discussion.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Disscution;
