import React from 'react'
import Navbar from './home/Navbar'
import HeroSection from './home/HeroSection'
import StartupsSection from './home/StartupsSection'
import CardeStartup from "./home/CardeStartup";
import Footer from './home/Footer';
function Home() {
  return (
    <>
       <Navbar/>
      <HeroSection/>
      <StartupsSection/>

       <section className="py-10 bg-green-100">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">
        Filter par secateurs
      </h2>

      {/* Boutons */}
      <div className="flex justify-center flex-wrap gap-6">
        {/* AI actif */}
          <button className="flex items-center gap-2 bg-white text-green-900 font-bold px-6 py-2 rounded-full border shadow-sm hover:bg-green-900 hover:text-white transition">
          🤖 AI
        </button>

        {/* Fintech */}
        <button className="flex items-center gap-2 bg-white text-green-900 font-bold px-6 py-2 rounded-full border shadow-sm hover:bg-green-900 hover:text-white transition">
          💳 Fintech
        </button>

        {/* E-commerce */}
        <button className="flex items-center gap-2 bg-white text-green-900 font-bold px-6 py-2 rounded-full border shadow-sm hover:bg-green-900 hover:text-white transition">
          🛒 E-commerce
        </button>

        {/* Edtech */}
        <button className="flex items-center gap-2 bg-white text-green-900 font-bold px-6 py-2 rounded-full border shadow-sm hover:bg-green-900 hover:text-white transition">
          🎓 Edtech
        </button>
      </div>

      
    </section>
         
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 pt-9">
        
          <CardeStartup/>
          <CardeStartup/>
          <CardeStartup/>
          <CardeStartup/>
        </div>
         

          <section className="py-10">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">
        Secteurs d'Activité
      </h2>

      {/* Grille de cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-9 max-w-6xl mx-auto px-4">
        
        {/* Fintech */}
        <div className="flex items-center justify-center border border-green-300 rounded-md h-32 bg-white hover:bg-green-100 transition">
          <span className="font-semibold text-green-900">💳 Fintech</span>
        </div>

        {/* AI (active) */}
        <div className="flex items-center justify-center border border-green-300 rounded-md h-32 bg-white hover:bg-green-100 transition">
          <span className="font-semibold text-green-900">🤖 AI</span>
        </div>

        {/* E-commerce */}
        <div className="flex items-center justify-center border border-green-300 rounded-md h-32 bg-white hover:bg-green-100 transition">
          <span className="font-semibold text-green-900">🛒 E-commerce</span>
        </div>

        {/* Edtech */}
        <div className="flex items-center justify-center border border-green-300 rounded-md h-32 bg-white hover:bg-green-100 transition">
          <span className="font-semibold text-green-900">🎓 Edtech</span>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home



