// src/redux/mesEvenementsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Récupérer les événements auxquels le user participe
export const fetchMesEvenements = createAsyncThunk(
  "mesEvenements/fetchMesEvenements",
  async (userId) => {
    const res = await axios.get(`http://localhost:5000/mesEvenements?userId=${userId}`);
    return res.data;
  }
);

// 🔹 Participer à un événement
export const participer = createAsyncThunk(
  "mesEvenements/participer",
  async ({ event, userId }) => {
    // Vérifie si l’utilisateur a déjà participé
    const existing = await axios.get(
      `http://localhost:5000/mesEvenements?userId=${userId}&eventId=${event.id}`
    );

    if (existing.data.length > 0) return existing.data[0]; // déjà inscrit

    const newParticipation = {
      id: Date.now().toString(),
      userId,
      eventId: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
    };

    const res = await axios.post("http://localhost:5000/mesEvenements", newParticipation);
    return res.data;
  }
);

// 🔹 Se désabonner d’un événement
export const desabonner = createAsyncThunk(
  "mesEvenements/desabonner",
  async ({ eventId, userId }) => {
    const res = await axios.get(
      `http://localhost:5000/mesEvenements?userId=${userId}&eventId=${eventId}`
    );
    if (res.data.length > 0) {
      const id = res.data[0].id;
      await axios.delete(`http://localhost:5000/mesEvenements/${id}`);
    }
    return eventId;
  }
);

const mesEvenementsSlice = createSlice({
  name: "mesEvenements",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMesEvenements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMesEvenements.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(participer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(desabonner.fulfilled, (state, action) => {
        state.list = state.list.filter((e) => e.eventId !== action.payload);
      });
  },
});

export default mesEvenementsSlice.reducer;
