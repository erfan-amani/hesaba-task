import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/User";

export interface AuthInitialState {
  user?: User;
}
const initialState: AuthInitialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout() {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
