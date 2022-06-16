import { createSlice } from "@reduxjs/toolkit";
import MusicsList from "../Component/Music/MusicJson";
// creating initial state
const initialState = {
  music: MusicsList,
  selected: [],
  playList: [],
};

// here createSlice work as reducer but here all are combine togeter

const musicslice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addToPlayList: (state, { payload }) => {
      state.playList.push(payload);
    },
    musicSelected: (state, { payload }) => {
      state.selected = payload;
    },
    removeFromPlayList: (state, {data}) => {
      console.log(data);
      state.playList = state.playList.filter((item) => item.id !== data);
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addToPlayList,
  musicSelected,
  removeFromPlayList,
} = musicslice.actions;
// get all music in music slice in music properties
export const getAllmusic = (state) => state.music.music;
export const getAllPlayList = (state) => state.music.playList;
export const getSeleted = (state) => state.music.selected;
export default musicslice.reducer;
