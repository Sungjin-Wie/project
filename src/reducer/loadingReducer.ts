import { createSlice } from "@reduxjs/toolkit";

export const displayLoadingSlice = createSlice({
  name: "displayLoadingSlice",
  initialState: false,
  reducers: {
    setLoading: (_, action) => {
      return action.payload;
    },
  },
});

export const { setLoading } = displayLoadingSlice.actions;

const loadingReducer = displayLoadingSlice.reducer;
export default loadingReducer;
