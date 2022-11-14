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
                  <th scope="col">ID</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Loại sản phẩm</th>
                  <th scope="col">Gía</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
               </tr>
               <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
               </tr>
               <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default Home;
