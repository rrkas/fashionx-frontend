import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./main";

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
