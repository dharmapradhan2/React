import React from "react";
import "./MovieCard.css";
import { NavLink } from "react-router-dom";
function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card m-1 col-sm-3" style={{ height: "15%" }}>
      {/* {console.log(data)} */}
      <NavLink to={`/movie/${data.imdbID}`} className="text-decoration-none">
        <img
          src={data.Poster}
          className="card-img-top img-fluid img-thumbnail"
          alt={data.Poster}
          style={{ height: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <p className="card-text">{data.Year}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default MovieCard;
