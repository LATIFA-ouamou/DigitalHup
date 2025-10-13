import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Récupérer les messages depuis le backend (JSON Server)
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {

    const response = await axios.get("http://localhost:5000/messages");
    return response.data;
  }
);

// 🔹 Ajouter un message
export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (newMessage) => {
    const response = await axios.post("http://localhost:5000/messages", newMessage);
    return response.data;
    
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    list: [],
    loading: false,
    error: null,
    success: null,

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMessages
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // addMessage
      .addCase(addMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
        state.success = "Message publié avec succès !";
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default messagesSlice.reducer;
