// import Footer from "../pages/home/Footer";
// import Navbar from "../pages/home/Navbar";

// const FormAjouteEvent = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white">
//       <h2 className="text-xl font-semibold text-center text-green-900 mb-6">
//         Créer un nouvel événement
//       </h2>

//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Titre de l'événement
//           </label>
//           <input
//             type="text"
//             placeholder="nom de l'événement"
//             className="w-full p-2 bg-gray-200 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             placeholder="description de l'événement"
//             className="w-full p-2 bg-gray-200 rounded"
//  />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Date</label>
//           <input
//             type="date"
//             className="w-full p-2 bg-gray-200 rounded"/>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Lieu</label>
//           <input
//             type="text"
//             placeholder="description de l'événement"
//             className="w-full p-2 bg-gray-200 rounded"
//           />
//         </div>

//         <button
//           type="button"
//           className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
//         >
//           Crée un événement
//         </button>
//       </form>
//     </div>
//     <Footer/>
// </>
//   );
// };

// export default FormAjouteEvent;



import Footer from "../pages/home/Footer";
import Navbar from "../pages/home/Navbar";

const FormAjouteEvent = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border border-green-800 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
          Créer un nouvel événement
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Titre de l'événement
            </label>
            <input
              type="text"
              placeholder="nom de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Description
            </label>
            <textarea
              placeholder="description de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-[#B0B9A8]rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Lieu
            </label>
            <input
              type="text"
              placeholder="description de l'événement"
              className="w-full p-3 bg-[#B0B9A8] rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="bg-[#203E11] text-white px-6 py-2 rounded-md hover:bg-green-800"
            >
              Crée un événement
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FormAjouteEvent;
