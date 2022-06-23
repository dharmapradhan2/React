import React from "react";
import Navbar from "../Header/Navbar";
import Products from "../ProductsPage/Products";

function Home() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <Products />
    </div>
  );
}

export default Home;
