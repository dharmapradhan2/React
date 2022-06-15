import { createSlice } from "@reduxjs/toolkit";

// creating initial state
const initialState = {
  movies: {},
};

// here createSlice work as reducer but here all are combine togeter

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
// get all movies in Movies slice in movies properties
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
