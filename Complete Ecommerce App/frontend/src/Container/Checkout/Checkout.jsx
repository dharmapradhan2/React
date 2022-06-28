import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { cart } from "../../APi/commonApi";
function Checkout() {
  const [price, SetPrice] = useState(0);
  useEffect(() => {
    SetPrice(localStorage.getItem("price")||0);
  });

  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container-md">
        <div className="d-flex flex-column bd-highlight mb-3">rthyertyz</div>
      </div>
    </div>
  );
}

export default Checkout;
