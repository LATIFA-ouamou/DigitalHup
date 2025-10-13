import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

import StartupsSection from './StartupsSection'
import CardeStartup from "./CardeStartup";
import Footer from './Footer';
function Home() {
   
  return (
    <>
       <Navbar/>
      <HeroSection/>
      <StartupsSection/>

    
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 pt-9">
        
           
        </div>
         

          <section className="py-10 bg-green-100">
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



