import React, {  useState } from "react";
import http from "./APi/http";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Container/Sign/Login";
import Signup from "./Container/Registration/Signup";
import Home from "./Container/Home Page/Home";
function App() {
  // const [logedIn, setLogedIn] = useState([]);
  // useEffect(() => {
  //  http.get("/users").then((res) => setLogedIn(res.data));
  // }, []);
  // console.log(logedIn);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
