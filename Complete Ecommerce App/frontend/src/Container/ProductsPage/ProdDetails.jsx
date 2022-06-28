import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { http, url } from "../../APi/commonApi";
import { useParams } from "react-router-dom";
function ProdDetails() {
  const { id } = useParams();
  const [prod, SetProd] = useState();
  console.log(id);
  useEffect(() => {
    const data = async () => {
      await http.get(`/prodDetails/${id}`).then((res) => {
        if (res.status === 200) {
          SetProd(res.data);
        } else if (res.status === 404) {
          console.log(res.data);
        }
      });
    };
    data();
  }, [id]);
  let details = "";
  if (prod) {
    console.log(prod);
    details = (
      <div className="d-flex align-items-center">
        <div className="">
          <img src={url + prod.filePath} alt="..." width="20%" />
        </div>
        <div className="flex-grow-1 ms-3">
          This is some content from a media component. You can replace this with
          any content and adjust it as needed.
        </div>
      </div>
    );
  } else {
    details = <div className="card alert">No Product Found.</div>;
  }
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container-fluid">{details}</div>
    </div>
  );
}

export default ProdDetails;
