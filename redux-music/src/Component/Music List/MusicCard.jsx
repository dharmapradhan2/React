import React from "react";
function MusicCard(props) {
  const { data } = props;
  return (
    <div className="card mb-2 p-0 m-auto shadow rounded">
      <img
        src={data.imgSrc}
        className="img-thumbnail p-0 border border-primary"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title m-0">{data.title}</h5>
        <small className="text-muted m-0 p-0">
          {data.artiest.split(",").join(" ,")}
        </small>
        <audio controls className="p-0 container-fluid">
          <source src={data.audio} />
        </audio>
      </div>
    </div>
  );
}

export default MusicCard;
