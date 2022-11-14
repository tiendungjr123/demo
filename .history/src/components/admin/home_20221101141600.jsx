import React from "react";

const Home = () => {
   return (
      <div className="container-fluid">
         <div className="row text-center mt-4">
            <div className="col-md-12">
               <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="search..."
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
