import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: "swaniket",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
});

export default chatSlice.reducer;
