import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import PlayLists from './Component/PlayLists/PlayLists'
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music/:id" element={<PlayLists />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
