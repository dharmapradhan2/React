import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPlayList, removeFromPlayList } from "../../Redux/MusicSlice";
function PlayLists() {
  const musics = useSelector(getAllPlayList);
  const dispatch = useDispatch();
  const rendermusic =
    musics.length !== "0" ? (
      musics.map((item, index) => {
        // console.log(item.id);
        return (
          <tr key={index} className="mb-1">
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.artiest}</td>
            <td className="btn btn-danger" onClick={() => dispatch(removeFromPlayList(item))}>
              Remove
            </td>
          </tr>
        );
      })
    ) : (
      <tr className="text-center card">No Data Present..</tr>
    );
  // console.log(rendermusic);
  return (
    <div className="container-fluid p-0" style={{ height: "99vh" }}>
      <div className="card-body">
        <table className="table table-responsive text">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Artists</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="border-none">{rendermusic}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayLists;
