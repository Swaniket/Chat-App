import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "swaniket",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
