import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    imageType: null,
    inputImage: null,
    resultImage: null,
  },
  reducers: {
    setInput(state, action) {
      state.inputImage = action.payload;
    },
    setResult(state, action) {
      state.resultImage = action.payload;
    },
    setType(state, action) {
      state.imageType = action.payload;
    },
  },
});
