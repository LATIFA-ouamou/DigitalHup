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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { participer, desabonner } from "../redux/mesEvenementsSlice";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { list: mesEvenements } = useSelector((state) => state.mesEvenements);

  const userId = user?.id || user?._id || "guest";

  const isParticipant = mesEvenements.some((e) => e.eventId === event.id);

  const handleClick = () => {
    if (isParticipant) {
      dispatch(desabonner({ eventId: event.id, userId }));
    } else {
      dispatch(participer({ event, userId }));
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <h3 className="font-bold text-lg">{event.title}</h3>
      <p className="text-sm text-gray-600 mt-1">📍 {event.location}</p>
      <p className="text-sm mt-2">{event.description}</p>

      <button
        onClick={handleClick}
        className={`mt-3 px-4 py-2 rounded text-white ${
          isParticipant ? "bg-red-700" : "bg-green-700"
        }`}
      >
        {isParticipant ? "Se désabonner" : "Participer"}
      </button>
    </div>
  );
};

export default EventCard;
