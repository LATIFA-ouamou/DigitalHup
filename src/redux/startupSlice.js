import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStartups = createAsyncThunk(
  'startups/fetchStartups',
  async () => {
    const res = await axios.get('http://localhost:5000/startups');
    return res.data; // tableau de startups
  }
);

const startupsSlice = createSlice({
  name: 'startups',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStartups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erreur';
      });
  },
});

export default startupsSlice.reducer;
