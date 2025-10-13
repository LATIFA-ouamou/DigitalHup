// import { configureStore } from "@reduxjs/toolkit";
// import startupsReducer from "./startupSlice";

// const store = configureStore({
//   reducer: {
//     startups: startupsReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import startupsReducer from "./startupSlice";
import messagesReducer from "./messagesSlice";
import eventsReducer from "./eventsSlice"; // <-- ajouter slice événements

const store = configureStore({
  reducer: {
    startups: startupsReducer,
    messages: messagesReducer,
    events: eventsReducer, 
  },
});

export default store;
