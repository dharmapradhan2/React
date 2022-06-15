import React from "react";
import "./MovieCard.css";
function MovieCard(props) {
  console.log(props.data);
  return (
    <div className="col card1">
      <div className="card">
        <img
          src={props.data.Poster}
          className="card-img-top img-fluid img-thumbnail"
          alt="poster"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.Title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
