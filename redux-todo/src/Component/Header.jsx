import React from "react";

function Header() {
  return (
    <div className="container bg-light m-2">
        <div className="h3 text-center text-primary">Redux Todo App</div>
      <div className="form">
        <input type="text" className="form-control form-control-sm"></input>
        
      </div>
    </div>
  );
}

export default Header;
