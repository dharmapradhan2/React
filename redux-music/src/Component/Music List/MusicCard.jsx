import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToPlayList } from "../../Redux/MusicSlice";
function MusicCard(props) {
  const [toggle, setToggle] = useState(false);
  const { data } = props;
  // const addToList=useSelector((state)=>state.music.)
  const dispatch = useDispatch();
  useEffect(() => {
    if (toggle) {
      dispatch(addToPlayList(data));
    }
  }, [toggle]);
  return (
    <div className="card mb-2 p-0 m-auto shadow rounded">
      <img
        src={data.imgSrc}
        className="img-thumbnail p-0 border border-primary"
        alt={data.title}
      />
      <div className="card-body">
        <div className="float-end m-0" onClick={() => setToggle(!toggle)}>
          {!toggle ? (
            <i className="bi bi-heart text-danger"></i>
          ) : (
            <i className="bi bi-heart-fill text-danger"></i>
          )}
        </div>
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
