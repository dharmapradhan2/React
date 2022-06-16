import React from "react";
import MusicJson from "../Music/MusicJson";
import MusicCard from "../Music List/MusicCard";
function Home() {
  return (
    <div className="container p-0">
      <div className="card-body">
        <h5 className="card-title text-center">Music List</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {MusicJson.map((item, index) => {
            return <MusicCard key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

// const Error = () => {
//   return (
//     <div className="alert alert-danger" role="alert">
//       <h4 className="alert-heading">Data can't be fetched...</h4>
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos
//         possimus, at veniam modi veritatis ipsa repudiandae alias cumque beatae!
//         Id, iste culpa reprehenderit nisi eaque vel esse! Quas, laborum?
//       </p>
//     </div>
//   );
// };
