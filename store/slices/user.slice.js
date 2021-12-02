import { createSlice } from "@reduxjs/toolkit";
import Login from "./../../screens/Login";

const initialState = { nombre: "", apellido: "", email: "", contrasena: "" };

export const userSilce = createSlice({
  name: "user",
  initialState: {
    value: initialState,
  },
  reducers: {
    UserLogin: (state, action) => {
      state.value = action.payload;
    },
    UserLogaut: (state) => {
      state.value = initialState;
    },
  },
});

export const { UserLogin, UserLogaut } = userSilce.actions;

export default userSilce.reducer;
