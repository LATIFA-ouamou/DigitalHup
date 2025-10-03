// Navbar améliorée
import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo avec effet de gradient */}
          <div className="text-2xl font-bold bg-gradient-to-r from-[#203E11] to-[#203E11] bg-clip-text text-transparent">
            Maroc<span className="text-yellow-600">DigitalHub</span>
          </div>

          {/* Navigation Links avec indicateur */}
          <div className="hidden md:flex space-x-8">
            <Link to="/startups" className="font-semibold text-gray-700 hover:text-[#203E11] transition-colors relative group">
              Startups
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#203E11] group-hover:w-full transition-all duration-300"></span>
          </Link>

            <Link to="/EventsPage" className="font-semibold text-gray-700 hover:text-[#203E11] transition-colors relative group">
              Événements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#203E11] group-hover:w-full transition-all duration-300"></span>
            </Link>



<Link to="/forum" className="font-semibold text-gray-700 hover:text-[#203E11] transition-colors relative group">
               Forum
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#203E11] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/dashboard" className="font-semibold text-gray-700 hover:text-[#203E11] transition-colors relative group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#203E11] group-hover:w-full transition-all duration-300"></span>
            </Link>

             <Link to="/mes-even" className="font-semibold text-gray-700 hover:text-[#203E11] transition-colors relative group">
              Mes Événement
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#203E11] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>


          
       

          {/* Côté droit avec recherche et auth */}
          <div className="flex items-center space-x-4">
            {/* Search Icon pour mobile */}
            <button className="lg:hidden text-gray-600 hover:text-[#203E11]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Auth Buttons */}
            <div className="flex space-x-3">
              <Link
                to="/connexion" 
                className="px-4 py-2 bg-gradient-to-r from-[#203E11] to-[#203E11] text-white rounded-xl font-semibold hover:[#203E11] hover:[#203E11]transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              
               > Connexion</Link>
              
             
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
