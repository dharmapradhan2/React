import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { http ,url} from "../../APi/commonApi";
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
      <div className="card row">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src={url+ prod.filePath}  alt={prod.pname} />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="card-body">
              <h4 className="card-title">{prod.pname}</h4>
              <p className="card-text">Rs. {prod.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    details=<div className="card alert">No Product Found.</div>
  }
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container-fluid">{details}</div>
    </div>
  );
}

export default ProdDetails;
