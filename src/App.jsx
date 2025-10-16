//  import AuthPage from "./pages/AuthPage"

// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./pages/home/Home"
// import EventPage from "./Evenements/EventsPage"
// import FormAjouteEvent from "./Evenements/FormAjouteEvent"
// import StartupForm from "./pages/home/StartupForm"
// import Disscution from "./pages/Disscution/Disscution"
// import AdminDashboard from "./pages/Dach/AdminDashboard"
// import MesEvenement from "./pages/Mes-evenements/MesEvenement"
// function App() {
//   return (
//     <>
//       {/* <AuthPage/> */}
      
//       <BrowserRouter>
//       <Routes>
//         <Route path="/startups" element={<Home />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/ajouter-startup" element={<StartupForm/>} />
//         <Route path="/connexion" element={<AuthPage />} />
//         <Route path="/EventsPage" element={<EventPage />} />
//         {/* <Route path="/" element={<AuthPage />} /> */}
//         <Route path="/ajouter-event" element={<FormAjouteEvent/>} />
//         <Route path="/forum" element={<Disscution/>} />
//         <Route path="/dashboard" element={<AdminDashboard/>} />
//         <Route path="/mes-even" element={<MesEvenement/>} />
        
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App




import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import EventPage from "./Evenements/EventsPage";
import FormAjouteEvent from "./Evenements/FormAjouteEvent";
import StartupForm from "./pages/home/StartupForm";
import Disscution from "./pages/Disscution/Disscution";
import AdminDashboard from "./pages/Dach/AdminDashboard";
import MesEvenement from "./pages/Mes-evenements/MesEvenement";
import PrivateRoute from "./PrivateRoute";
 // ⚠️ assure-toi que le chemin est bon

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* --- PAGES PUBLIQUES --- */}
        <Route path="/" element={<Home />} />
        <Route path="/startups" element={<Home />} />
        <Route path="/connexion" element={<AuthPage />} />
        <Route path="/EventsPage" element={<EventPage />} />
        <Route path="/forum" element={<Disscution />} />

        {/* --- FORMULAIRE STARTUP (admin + startup) --- */}
        <Route
          path="/ajouter-startup"
          element={
            <PrivateRoute roles={["admin", "startup"]}>
              <StartupForm />
            </PrivateRoute>
       
          }
        />

        {/* --- AJOUTER ÉVÈNEMENT (admin + startup) --- */}
        <Route
          path="/ajouter-event"
          element={
            <PrivateRoute roles={["admin", "startup"]}>
              <FormAjouteEvent />
            </PrivateRoute>
          }
        />

        {/* --- DASHBOARD ADMIN UNIQUEMENT --- */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* --- MES ÉVÈNEMENTS (admin, startup, investor) --- */}
        <Route
          path="/mes-even"
          element={
            <PrivateRoute roles={["admin", "startup", "investor"]}>
              <MesEvenement />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
