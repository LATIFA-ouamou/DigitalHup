import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  role: "visitor", 
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.error = null;
      
      localStorage.setItem("digitalhub_user", JSON.stringify(action.payload.user));
      localStorage.setItem("digitalhub_role", action.payload.role);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.role = "visitor";
      state.isAuthenticated = false;
      localStorage.removeItem("digitalhub_user");
      localStorage.removeItem("digitalhub_role");
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;