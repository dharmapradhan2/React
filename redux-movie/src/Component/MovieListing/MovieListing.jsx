import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Redux/movie/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(show);
  const renderMovies =
    movies.Response === "True"
      ? movies.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie} />;
        })
      : Error();
  const renderShows =
    shows.Response === "True"
      ? shows.Search.map((show, index) => {
          return <MovieCard key={index} data={show} />;
        })
      : Error();
  return (
    <div className="container m-1 p-0">
      <div className="card-body">
        <h5 className="card-title text-center">Movies List</h5>
        <div className="d-flex justify-content-around flex-wrap">
          {renderMovies}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">Shows List</h5>
        <div className="d-flex justify-content-around flex-wrap">
          {renderShows}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;

const Error = () => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Data can't be fetched...</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos
        possimus, at veniam modi veritatis ipsa repudiandae alias cumque beatae!
        Id, iste culpa reprehenderit nisi eaque vel esse! Quas, laborum?
      </p>
    </div>
  );
};
