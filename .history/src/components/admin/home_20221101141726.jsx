import React from "react";

const Home = () => {
   return (
      <div>

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
      <table class="table mt-3">
         <thead>
            <tr>
               <th scope="col">Employee ID</th>
               <th scope="col">First Name</th>
               <th scope="col">Last Name</th>
               <th scope="col">Email</th>
               <th scope="col">Mobile</th>
               <th scope="col">Salary</th>
               <th scope="col">Action</th>
            </tr>
         </thead>
      <table/>
      </div>

   );
};

export default Home;
