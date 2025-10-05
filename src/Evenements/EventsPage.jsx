import Footer from "../pages/home/Footer";
import Navbar from "../pages/home/Navbar";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom"
const EventsPage = () => {
  const navigate = useNavigate();
  return(
  <>
  <div><Navbar/>
    <header className="bg-[#203E11] text-white text-center py-8 my-2">
        <h1 className="text-3xl font-bold">Événements Tech au Maroc</h1>
        <p className="mt-2">
          Découvrez les prochains événements, conférences et rencontres de
          l'écosystème startup marocain
        </p>
        <button className="mt-4 bg-yellow-500 px-4 py-2 rounded" onClick={() => navigate("/ajouter-event")}>+ Ajouter un événement</button>
      </header>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          <EventCard />
          <EventCard />
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default EventsPage;
