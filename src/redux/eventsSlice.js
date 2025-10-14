// src/redux/eventsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/events";

// Récupérer tous les événements
export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// Ajouter un événement
export const addEvent = createAsyncThunk("events/addEvent", async (newEvent) => {
  const res = await axios.post(API_URL, newEvent);
  return res.data;
});

// Supprimer un événement
export const deleteEvent = createAsyncThunk("events/deleteEvent", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const eventsSlice = createSlice({
  name: "events",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchEvents
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // addEvent
      .addCase(addEvent.fulfilled, (state, action) => {
        state.list = [action.payload, ...state.list];
      })

      // deleteEvent
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (e) => e._id !== action.payload && e.id !== action.payload
        );
      });
  },
});

export default eventsSlice.reducer;
