import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../Redux/movie/MovieSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncShows());
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;
