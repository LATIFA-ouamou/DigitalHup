 import AuthPage from "./pages/AuthPage"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import EventPage from "./Evenements/EventsPage"
import FormAjouteEvent from "./Evenements/FormAjouteEvent"
import StartupForm from "./pages/home/StartupForm"
import Disscution from "./pages/Disscution/Disscution"
import AdminDashboard from "./pages/Dach/AdminDashboard"
import MesEvenement from "./pages/Mes-evenements/MesEvenement"
function App() {
  return (
    <>
      {/* <AuthPage/> */}
      
      <BrowserRouter>
      <Routes>
        <Route path="/startups" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/ajouter-startup" element={<StartupForm/>} />
        <Route path="/connexion" element={<AuthPage />} />
        <Route path="/EventsPage" element={<EventPage />} />
        {/* <Route path="/" element={<AuthPage />} /> */}
        <Route path="/ajouter-event" element={<FormAjouteEvent/>} />
        <Route path="/forum" element={<Disscution/>} />
        <Route path="/dashboard" element={<AdminDashboard/>} />
        <Route path="/mes-even" element={<MesEvenement/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
