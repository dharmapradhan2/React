import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPlayList, removeFromPlayList } from "../../Redux/MusicSlice";
function PlayLists() {
  const musics = useSelector(getAllPlayList);
  const dispatch = useDispatch();
  function deleteData(id) {
    dispatch(removeFromPlayList(id));
  }
  console.log(musics.length);
  const rendermusic =
    musics.length !== "0" ? (
      musics.map((item, index) => {
        console.log(item);
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.artiest}</td>
            <td className="btn btn-danger" onClick={() => deleteData(item.id)}>
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
    <div className="container-sm p-0" style={{ height: "99vh" }}>
      <div className="card-body">
        <table className="table table-responsive m-0">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Artists</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{rendermusic}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayLists;
