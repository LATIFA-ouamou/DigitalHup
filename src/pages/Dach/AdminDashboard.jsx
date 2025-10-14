


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaPlane, FaCalendarAlt, FaComments, FaUsers, FaPlus } from "react-icons/fa";
// import Navbar from "../home/Navbar";
// import Footer from "../home/Footer";
// import { fetchStartups } from "../../redux/startupSlice";
// import { fetchEvents } from "../../redux/eventsSlice";
// import { fetchMessages } from "../../redux/messagesSlice";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // 🔹 Récupération des données depuis Redux
//   const startupsList = useSelector((state) => state.startups.list || []);
//   const eventsList = useSelector((state) => state.events.list || []);
//   const messagesList = useSelector((state) => state.messages.list || []);

//   // 🔹 Chargement des données au montage
//   useEffect(() => {
//     dispatch(fetchStartups());
//     dispatch(fetchEvents());
//     dispatch(fetchMessages());
//   }, [dispatch]);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         {/* Header */}
//         <header className="bg-[#203E11] text-white text-center py-8 shadow-md">
//           <h1 className="text-3xl font-bold">
//             Tableau de Bord - <span className="italic">Administrateur</span>
//           </h1>
//           <p className="mt-2 text-gray-200">
//             Gérez et suivez votre écosystème digital
//           </p>
//         </header>

//         {/* Section des statistiques */}
//         <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Startups */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">
//               {startupsList.length}
//             </h2>
//             <FaPlane className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">
//               Startups inscrites
//             </p>
//             <button
//               onClick={() => navigate("/add-startup")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouvelle Startup
//             </button>
//           </div>

//           {/* Événements */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">
//               {eventsList.length}
//             </h2>
//             <FaCalendarAlt className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">
//               Événements créés
//             </p>
//             <button
//               onClick={() => navigate("/add-event")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouvel Événement
//             </button>
//           </div>

//           {/* Messages forum */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">
//               {messagesList.length}
//             </h2>
//             <FaComments className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">Messages forum</p>
//             <button
//               onClick={() => navigate("/add-message")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouveau Message
//             </button>
//           </div>

//           {/* Participants */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">
//               {startupsList.length * 10}
//             </h2>
//             <FaUsers className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">
//               Participants estimés
//             </p>
//             <button
//               onClick={() => navigate("/participants")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaUsers /> Voir Participants
//             </button>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;














// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaPlane, FaCalendarAlt, FaComments, FaUsers, FaPlus } from "react-icons/fa";
// import Navbar from "../home/Navbar";
// import Footer from "../home/Footer";
// import { fetchStartups } from "../../redux/startupSlice";
// import { fetchEvents } from "../../redux/eventsSlice";
// import { fetchMessages } from "../../redux/messagesSlice";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const startupsList = useSelector((state) => state.startups.list || []);
//   const eventsList = useSelector((state) => state.events.list || []);
//   const messagesList = useSelector((state) => state.messages.list || []);

//   useEffect(() => {
//     dispatch(fetchStartups());
//     dispatch(fetchEvents());
//     dispatch(fetchMessages());
//   }, [dispatch]);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         {/* Header */}
//         <header className="bg-[#203E11] text-white text-center py-8 shadow-md">
//           <h1 className="text-3xl font-bold">
//             Tableau de Bord - <span className="italic">Administrateur</span>
//           </h1>
//           <p className="mt-2 text-gray-200">
//             Gérez et suivez votre écosystème digital
//           </p>
//         </header>

//         {/* Statistiques */}
//         <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Startups */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">{startupsList.length}</h2>
//             <FaPlane className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">Startups inscrites</p>

//             {/* Bouton Ajouter */}
//             <button
//               onClick={() => navigate("/add-startup")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouvelle Startup
//             </button>

//             {/* Bouton Voir tout */}
//             <button
//               onClick={() => navigate("/startups")}
//               className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
//             >
//               Voir  les startups
//             </button>
//           </div>

//           {/* Événements */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">{eventsList.length}</h2>
//             <FaCalendarAlt className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">Événements créés</p>

//             <button
//               onClick={() => navigate("/add-event")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouvel Événement
//             </button>

//             <button
//               onClick={() => navigate("/events")}
//               className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
//             >
//               Voir les événements
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">{messagesList.length}</h2>
//             <FaComments className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">Messages forum</p>

//             <button
//               onClick={() => navigate("/add-message")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaPlus /> Nouveau Message
//             </button>

//             <button
//               onClick={() => navigate("/messages")}
//               className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
//             >
//               Voir les messages
//             </button>
//           </div>

//           {/* Participants */}
//           <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//             <h2 className="text-4xl font-bold text-green-900">{startupsList.length * 10}</h2>
//             <FaUsers className="mx-auto text-green-900 text-3xl my-2" />
//             <p className="text-green-900 font-medium mb-4">Participants estimés</p>

//             <button
//               onClick={() => navigate("/participants")}
//               className="flex items-center justify-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition w-full"
//             >
//               <FaUsers /> Voir Participants
//             </button>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;





















// src/components/admin/AdminDashboard.jsx
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlane, FaCalendarAlt, FaComments, FaUsers } from "react-icons/fa";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { fetchStartups } from "../../redux/startupSlice";
import { fetchEvents } from "../../redux/eventsSlice";
import { fetchMessages } from "../../redux/messagesSlice";
import AdminStartups from "./AdminStartups";
import AdminEvents from "./AdminEvents";

const AdminDashboard = () => {
   
  
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  const startupsList = useSelector((state) => state.startups.list || []);
  const eventsList = useSelector((state) => state.events.list || []);
  const messagesList = useSelector((state) => state.messages.list || []);

  useEffect(() => {
    dispatch(fetchStartups());
    dispatch(fetchEvents());
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-[#203E11] text-white text-center py-8 shadow-md">
          <h1 className="text-3xl font-bold">
            Tableau de Bord - <span className="italic">Administrateur</span>
          </h1>
          <p className="mt-2 text-gray-200">
            Gérez et suivez votre écosystème digital
          </p>
        </header>

        {/* Dashboard principal */}
        {activeSection === "dashboard" && (
          <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Startups */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-4xl font-bold text-green-900">{startupsList.length}</h2>
              <FaPlane className="mx-auto text-green-900 text-3xl my-2" />
              <p className="text-green-900 font-medium mb-4">Startups inscrites</p>

              <button
                onClick={() => setActiveSection("startups")}
                className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
              >
                Voir les startups
              </button>
            </div>

            {/* Événements */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-4xl font-bold text-green-900">{eventsList.length}</h2>
              <FaCalendarAlt className="mx-auto text-green-900 text-3xl my-2" />
              <p className="text-green-900 font-medium mb-4">Événements créés</p>

              <button
                onClick={() => setActiveSection("events")}
                className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
              >
                Voir les événements
              </button>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-4xl font-bold text-green-900">{messagesList.length}</h2>
              <FaComments className="mx-auto text-green-900 text-3xl my-2" />
              <p className="text-green-900 font-medium mb-4">Messages forum</p>

              <button
              
                  onClick={() => navigate("/forum")}
                className="mt-3 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition w-full"
              >
                Voir les messages
              </button>
            </div>

            {/* Participants */}
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-4xl font-bold text-green-900">{startupsList.length * 10}</h2>
              <FaUsers className="mx-auto text-green-900 text-3xl my-2" />
              <p className="text-green-900 font-medium mb-4">Participants estimés</p>
            </div>
          </main>
        )}

        {/* Vue Startups */}
        {activeSection === "startups" && (
          <div className="max-w-6xl mx-auto py-10 px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-900">Liste des Startups</h2>
              <button
                onClick={() => setActiveSection("dashboard")}
                className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Retour au tableau de bord
              </button>
            </div>
            <AdminStartups />
          </div>
        )}

        {/* Vue Événements */}
        {activeSection === "events" && (
          <div className="max-w-6xl mx-auto py-10 px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-900">Liste des Événements</h2>
              <button
                onClick={() => setActiveSection("dashboard")}
                className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Retour au tableau de bord
              </button>
            </div>
            <AdminEvents />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
