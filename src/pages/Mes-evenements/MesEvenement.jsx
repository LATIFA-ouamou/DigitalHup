import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import EventCard from "../../Evenements/EventCard";
import { useSelector } from "react-redux";

function MesEvenement() {
  const myEvents = useSelector((state) => state.mesEvenements.list);

  return (
    <>
      <Navbar />
      <div className="px-6 my-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Mes Événements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {myEvents.length > 0 ? (
            myEvents.map((event) => (
              <EventCard key={event.id} event={event} isMyEvent />
            ))
          ) : (
            <p className="text-center">Aucun événement pour le moment.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MesEvenement;
