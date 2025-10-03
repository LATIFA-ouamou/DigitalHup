// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AuthPage() {
//   const [showRegister, setShowRegister] = useState(false);
//   const [role, setRole] = useState("");
// const navigait =useNavigate()
//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        
//         {/* HERO */}
//         <div className="hidden md:flex flex-col justify-center p-10 text-white relative bg-[#203E11]">

//           <div className="relative z-10">
//             <div className="text-3xl font-bold mb-4">
//               Maroc<span className="text-yellow-500">DigitalHub</span>
//             </div>
//             <h1 className="text-4xl font-bold mb-4">
//               Rejoignez l'écosystème digital marocain
//             </h1>
//             <p className="opacity-90">
//               Connectez-vous avec la communauté des startups, investisseurs et innovateurs marocains. 
//               Votre portail vers l'entrepreneuriat digital au Maroc.
//             </p>

//             {/* Stats */}
            
//           </div>
//         </div>

//         {/* FORMULAIRE */}
//         <div className="p-10 flex flex-col justify-center">
//           {!showRegister ? (
//             // LOGIN
//             <div>
//               <h2 className="text-2xl font-bold text-[#203E11]">Connexion</h2>
//               <p className="text-gray-600 mb-6">Accédez à votre compte</p>

//               <form className="space-y-4">
//                 <div>
//                   <label className="block font-semibold mb-1">Email</label>
//                   <input
//                     type="email"
//                     placeholder="votre@email.com"
//                     className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">Mot de passe</label>
//                   <input
//                     type="password"
//                     placeholder="Votre mot de passe"
//                     className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#203E11] hover:bg-[#203E11] text-white font-semibold py-3 rounded-lg transition"
//                 onClick={navigait("/startups")}>
//                   Se connecter
//                 </button>
//               </form>

//               <div className="text-center text-gray-600 mt-4">
//                 Pas encore de compte ?{" "}
//                 <button
//                   onClick={() => setShowRegister(true)}
//                   className="text-[#203E11] font-semibold hover:underline"
//                 >
//                   S'inscrire
//                 </button>
//               </div>

             
//             </div>
//           ) : (
//             // REGISTER
//             <div>
//               <h2 className="text-2xl font-bold text-[#203E11]">Inscription</h2>
//               <p className="text-gray-600 mb-6">Créez votre compte</p>

//               <form className="space-y-4">
//                 <div>
//                   <label className="block font-semibold mb-1">Nom complet</label>
//                   <input
//                     type="text"
//                     placeholder="Votre nom complet"
//                     className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">Email</label>
//                   <input
//                     type="email"
//                     placeholder="votre@email.com"
//                     className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">Mot de passe</label>
//                   <input
//                     type="password"
//                     placeholder="Créez un mot de passe"
//                     className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
//                   />
//                 </div>

//                 {/* Roles */}
//                 <div>
//                   <label className="block font-semibold mb-2">Type de compte</label>
//                   <div className="grid grid-cols-2 gap-3">
//                     {[
//                       { key: "visitor", icon: "👀", label: "Visiteur" },
//                       { key: "startup", icon: "🚀", label: "Startup" },
//                       { key: "investor", icon: "💼", label: "Investisseur" },
//                       { key: "admin", icon: "⚙️", label: "Admin" },
//                     ].map((r) => (
//                       <div
//                         key={r.key}
//                         onClick={() => setRole(r.key)}
//                         className={`p-4 border-2 rounded-lg text-center cursor-pointer transition ${
//                           role === r.key
//                             ? "border-[#203E11] bg-blue-50"
//                             : "border-gray-200"
//                         }`}
//                       >
//                         <div className="text-2xl mb-1">{r.icon}</div>
//                         <div className="font-semibold">{r.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#203E11] hover:bg-[#203E11] text-white font-semibold py-3 rounded-lg transition"
//                 onClick={navigait("/startups")}>
//                   Créer mon compte
//                 </button>
//               </form>

//               <div className="text-center text-gray-600 mt-4">
//                 Déjà un compte ?{" "}
//                 <button
//                   onClick={() => setShowRegister(false)}
//                   className="text-[#203E11]font-semibold hover:underline"
//                  >
//                   Se connecter
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); // redirection page accueil
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/"); // redirection page accueil
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        
        {/* HERO */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white relative bg-[#203E11]">
          <div className="relative z-10">
            <div className="text-3xl font-bold mb-4">
              Maroc<span className="text-yellow-500">DigitalHub</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Rejoignez l'écosystème digital marocain
            </h1>
            <p className="opacity-90">
              Connectez-vous avec la communauté des startups, investisseurs et innovateurs marocains. 
              Votre portail vers l'entrepreneuriat digital au Maroc.
            </p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="p-10 flex flex-col justify-center">
          {!showRegister ? (
            // LOGIN
            <div>
              <h2 className="text-2xl font-bold text-[#203E11]">Connexion</h2>
              <p className="text-gray-600 mb-6">Accédez à votre compte</p>

              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Mot de passe</label>
                  <input
                    type="password"
                    placeholder="Votre mot de passe"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#203E11] text-white font-semibold py-3 rounded-lg transition"
                >
                  Se connecter
                </button>
              </form>

              <div className="text-center text-gray-600 mt-4">
                Pas encore de compte ?{" "}
                <button
                  onClick={() => setShowRegister(true)}
                  className="text-[#203E11] font-semibold hover:underline"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          ) : (
            // REGISTER
            <div>
              <h2 className="text-2xl font-bold text-[#203E11]">Inscription</h2>
              <p className="text-gray-600 mb-6">Créez votre compte</p>

              <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                  <label className="block font-semibold mb-1">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Mot de passe</label>
                  <input
                    type="password"
                    placeholder="Créez un mot de passe"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#203E11] text-white font-semibold py-3 rounded-lg transition"
                >
                  Créer mon compte
                </button>
              </form>

              <div className="text-center text-gray-600 mt-4">
                Déjà un compte ?{" "}
                <button
                  onClick={() => setShowRegister(false)}
                  className="text-[#203E11] font-semibold hover:underline"
                >
                  Se connecter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
