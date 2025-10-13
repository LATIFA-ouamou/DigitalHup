// src/redux/eventsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simuler une API ou récupérer depuis une vraie API
export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async () => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
  }
);

export const addEvent = createAsyncThunk(
  "events/addEvent",
  async (newEvent, { getState }) => {
    const state = getState();
    const currentEvents = state.events.list;
    const updatedEvents = [newEvent, ...currentEvents];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    return newEvent;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    list: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchEvents
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = "Erreur lors du chargement des événements";
      })
      // addEvent
      .addCase(addEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [action.payload, ...state.list];
        state.success = "Événement ajouté avec succès !";
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = "Erreur lors de l'ajout de l'événement";
      });
  },
});

export default eventsSlice.reducer;
