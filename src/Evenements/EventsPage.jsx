import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../pages/home/Navbar";
import Footer from "../pages/home/Footer";
import EventCard from "./EventCard";
import { fetchEvents } from "../redux/eventsSlice";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list: events, loading, error } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  

  return (
    <>
      <Navbar />
      <header className="bg-[#203E11] text-white text-center py-8 my-2">
        <h1 className="text-3xl font-bold">Événements Tech au Maroc</h1>
        <p className="mt-2">
          Découvrez les prochains événements, conférences et rencontres de l'écosystème startup marocain
        </p>
        <button
          className="mt-4 bg-yellow-500 px-4 py-2 rounded"
          onClick={() => navigate("/ajouter-event")}
        >
          + Ajouter un événement
        </button>
      </header>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {events.length > 0
            ? events.map((event) => <EventCard key={event.id} event={event} />)
            : !loading && <p>Aucun événement pour le moment</p>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventsPage;
