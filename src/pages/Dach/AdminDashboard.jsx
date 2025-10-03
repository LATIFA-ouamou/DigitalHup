import React from "react";
import { FaPlane, FaCalendarAlt, FaComments, FaUsers } from "react-icons/fa";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const AdminDashboard = () => {
  return (<>
  <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-900 text-white text-center py-8 my-2">
        <h1 className="text-3xl font-bold">
          Tableau de Bord - <span className="italic">Administrateur</span>
        </h1>
        <p className="mt-2">Surveillez l'activité de votre écosystème</p>
      </header>

      {/* Cards */}
      <main className="max-w-4xl mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Startups */}
        <div className="bg-green-100 rounded-lg p-6 text-center shadow">
          <h2 className="text-3xl font-bold text-green-900">4</h2>
          <FaPlane className="mx-auto text-green-900 text-2xl my-2" />
          <p className="text-green-900">Startups inscrites</p>
        </div>

        {/* Événements */}
        <div className="bg-green-100 rounded-lg p-6 text-center shadow">
          <h2 className="text-3xl font-bold text-green-900">14</h2>
          <FaCalendarAlt className="mx-auto text-green-900 text-2xl my-2" />
          <p className="text-green-900">Événements créés</p>
        </div>

        {/* Messages forum */}
        <div className="bg-green-100 rounded-lg p-6 text-center shadow">
          <h2 className="text-3xl font-bold text-green-900">32</h2>
          <FaComments className="mx-auto text-green-900 text-2xl my-2" />
          <p className="text-green-900">Messages forum</p>
        </div>

        {/* Participants */}
        <div className="bg-green-100 rounded-lg p-6 text-center shadow">
          <h2 className="text-3xl font-bold text-green-900">40</h2>
          <FaUsers className="mx-auto text-green-900 text-2xl my-2" />
          <p className="text-green-900">Participants total</p>
        </div>
      </main>
    </div><Footer/>
    </>
  );
};

export default AdminDashboard;
