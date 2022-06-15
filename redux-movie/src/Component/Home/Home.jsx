import React, { useEffect } from "react";
import MovieApi from "../../api/MovieApi";
import MovieListing from "../MovieListing/MovieListing";
import { MY_API_KEY } from "../../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Redux/movie/MovieSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${MY_API_KEY}&s=${movieText}&type=movie`
      ).catch((error) => {
        console.log(error);
      });
      // here we get all data and added to 
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="img-fluid">
        {/* <img src="" alt="banner" /> */}
      </div>
      <MovieListing />
    </div>
  );
}

export default Home;
