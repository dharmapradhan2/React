import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncDetails, getSeleted,removeSelected } from "../../Redux/movie/MovieSlice";
function MovieDeatils() {
  const { imdb } = useParams();
  // console.log(imdb);
  const dispatch = useDispatch();
  const data = useSelector(getSeleted);
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdb));
    return (() => {
      dispatch(removeSelected());
    })
  }, [dispatch, imdb]);
  return (
    <div className="card m-4 col-md-10 col-sm-8" style={{ height: "auto" }}>
      <img
        src={data.Poster}
        className="card-img-top img-fluid img-thumbnail"
        alt={data.Poster}
        style={{ height: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{data.Title}</h5>
        <p className="card-text m-0">Director: {data.Director}</p>
        <p className="card-text m-0">Writer: {data.Writer}</p>
        <p class="card-text mt-1">
          <p class="text-muted ">Story :- {data.Plot}</p>
          <p class="text-muted m-0">Genre : -{data.Genre}</p>
          <p class="text-muted m-0">Actors: -{data.Actors}</p>
          <p class="text-muted m-0">Type : -{data.Type}</p>
          <p class="text-muted m-0">Language : -{data.Language}</p>
          <p class="text-muted m-0">Rating : -{data.imdbRating}</p>
          <p class="text-muted m-0">Released year : -{data.Released}</p>
        </p>
      </div>
    </div>
  );
}
export default MovieDeatils;
