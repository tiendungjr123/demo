import React from "react";

const Home = () => {
   return (
      <div class="container-fluid">
         <div class="row text-center mt-4">
            <div class="col-md-12">
               <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  placeholder="search..."
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
