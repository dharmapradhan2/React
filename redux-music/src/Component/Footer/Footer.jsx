import React from "react";

function Footer() {
  return (
    <div className="d-flex justify-content-between">
     <audio controls>
      <source src="../Music/Despacito.mp3"/>
    </audio>
      <p className="text-muted">Next Up: <span>Next Song</span></p>
      
    </div>
  );
}

export default Footer;
