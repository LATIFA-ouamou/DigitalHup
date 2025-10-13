// const EventCard = () => {
//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
//       <div className="bg-green-100 text-center py-2 rounded-t">
//         <p className="font-bold text-lg">5</p>
//         <p className="uppercase text-sm">Jan</p>
//         <p className="font-semibold mt-1">Fintech Conference</p>
//       </div>
//       <div className="mt-4">
//         <h3 className="font-bold text-lg">Maroc Startup Summit 2023</h3>
//         <p className="text-sm text-gray-600 mt-1">📍 Casablanca, Morocco</p>
//         <p className="text-sm mt-2">
//           Conférence exclusive sur l’avenir des technologies financières au
//           Maroc avec les leaders du secteur et régulateur
//         </p>
//         <div className="flex justify-between mt-4">
//           <button className="bg-green-700 text-white px-4 py-1 rounded">Participer</button>
//           <button className="border px-4 py-1 rounded">Détails</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <div className="bg-green-100 text-center py-2 rounded-t">
        <p className="font-bold text-lg">{new Date(event.date).getDate()}</p>
        <p className="uppercase text-sm">{new Date(event.date).toLocaleString("default", { month: "short" })}</p>
        <p className="font-semibold mt-1">{event.title}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg">{event.title}</h3>
        <p className="text-sm text-gray-600 mt-1">📍 {event.location}</p>
        <p className="text-sm mt-2">{event.description}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-700 text-white px-4 py-1 rounded">Participer</button>
          <button className="border px-4 py-1 rounded">Détails</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
