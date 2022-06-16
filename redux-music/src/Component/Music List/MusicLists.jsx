import React from "react";
import MusicCard from "../Music List/MusicCard";
import { useSelector } from "react-redux";
import { getAllmusic } from "../../Redux/MusicSlice";
function Home() {
  const musics = useSelector(getAllmusic);
  // console.log(musics);
  return (
    <div className="container p-0">
      <div className="card-body">
        <h5 className="card-title text-center">Music List</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {musics.map((item, index) => {
            return <MusicCard key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
