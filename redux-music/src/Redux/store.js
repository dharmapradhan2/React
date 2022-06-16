import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./MusicSlice";
export const store = configureStore({
  reducer: { music: musicReducer },
});
