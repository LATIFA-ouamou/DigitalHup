

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import startupsReducer from "./startupSlice";
import messagesReducer from "./messagesSlice";
import eventsReducer from "./eventsSlice"; // <-- ajouter slice événements
import mesEvenementsReducer from "./mesEvenementsSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    startups: startupsReducer,
    messages: messagesReducer,
    events: eventsReducer, 
     mesEvenements: mesEvenementsReducer,
         auth: authReducer,
  },
});

export default store;
