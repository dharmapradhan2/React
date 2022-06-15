import React from "react";
// impo
function MovieCard(props) {
  console.log(props.data);
  return (
    <div className="card1">
      <div className="card">
        <img
          src={props.data.Poster}
          className="card-img-top img-fluid img-thumbnail"
          alt="poster"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.Title}</h5>
          <p className="card-text">
              </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
