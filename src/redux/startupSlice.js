



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Récupérer toutes les startups
export const fetchStartups = createAsyncThunk(
  "startups/fetchStartups",
  async () => {
    const res = await axios.get("http://localhost:5000/startups");
    return res.data;
  }
);

// 📌 Supprimer une startup
export const deleteStartup = createAsyncThunk(
  "startups/deleteStartup",
  async (id) => {
    await axios.delete(`http://localhost:5000/startups/${id}`);
    return id; // retourne l'ID supprimé
  }
);

const startupsSlice = createSlice({
  name: "startups",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchStartups.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchStartups.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Delete
      .addCase(deleteStartup.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (startup) => startup._id !== action.payload && startup.id !== action.payload
        );
      });
  },
});

export default startupsSlice.reducer;
