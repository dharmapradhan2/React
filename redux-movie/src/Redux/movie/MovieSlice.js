import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../api/MovieApi";
import { MY_API_KEY } from "../../api/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await MovieApi.get(
      `?apikey=${MY_API_KEY}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    const response = await MovieApi.get(
      `?apikey=${MY_API_KEY}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${MY_API_KEY}&i=${id}&plot=full`
    );
    return response.data;
  }
);
// creating initial state
const initialState = {
  movies: {},
  shows: {},
  selected: {},
};

// here createSlice work as reducer but here all are combine togeter

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelected: (state) => {
      state.selected = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending..");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched movie sucessfully..");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched shows sucessfully..");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched shows sucessfully..");
      return { ...state, selected: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected..");
    },
  },
});

export const { removeSelected } = movieSlice.actions;
// get all movies in Movies slice in movies properties
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSeleted = (state) => state.movies.selected;
export default movieSlice.reducer;
