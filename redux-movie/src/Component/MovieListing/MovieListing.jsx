import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Redux/movie/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const renderMovies =
    movies.Response === "True"
      ? movies.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie}/>;
        })
      : Error();
  // console.log(renderMovies);
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="card-body">
          <h5 className="card-title text-center">Movies List</h5>
          <div className="d-flex justify-content-around flex-wrap col-md-12">{renderMovies}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;

const Error = () => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Data can't be fetched</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos
        possimus, at veniam modi veritatis ipsa repudiandae alias cumque beatae!
        Id, iste culpa reprehenderit nisi eaque vel esse! Quas, laborum?
      </p>
    </div>
  );
};
