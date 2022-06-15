import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie/MovieSlice";
export const store = configureStore({
  reducer: { movies: moviesReducer },
});
