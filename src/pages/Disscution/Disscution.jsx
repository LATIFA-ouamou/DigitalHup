import React from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'

function Disscution() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-900 text-white text-center py-10 my-2">
        <h1 className="text-3xl font-bold">Espace Discussions</h1>
        <p className="mt-2">Partagez vos idées avec la communauté</p>
      </header>

      {/* Liste des messages */}
      <main className="max-w-3xl mx-auto py-10 space-y-6 px-4">
        {/* Message 1 */}
        <div className="bg-green-100 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Ahmed Mansouri</h3>
              <p className="text-sm text-gray-600">Il y a 2 heures</p>
            </div>
            <span className="bg-green-900 text-white text-xs px-2 py-1 rounded">
              Admin
            </span>
          </div>
          <p className="mt-2 text-gray-800">
            Bonjour à tous ! 👋 Nous recherchons un développeur Full Stack
            senior pour rejoindre notre équipe TechMaroc. Stack technique :
            React, Node.js, !
          </p>
          <hr className="mt-3 border-green-300" />
        </div>

        {/* Message 2 */}
        <div className="bg-green-100 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Ahmed Mansouri</h3>
              <p className="text-sm text-gray-600">Il y a 2 heures</p>
            </div>
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
              Startup
            </span>
          </div>
          <p className="mt-2 text-gray-800">
            Bonjour à tous ! 👋 Nous recherchons un développeur Full Stack
          </p>
          <hr className="mt-3 border-green-300" />
        </div>
      </main>

      {/* Formulaire d'ajout */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-green-100 rounded-lg p-4">
          <textarea
            className="w-full border rounded p-3"
            rows="3"
            placeholder="partager vos idées, posez vos questions avec tout le monde"
          ></textarea>
          <button className="mt-3 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">
            Publier le message
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Disscution
