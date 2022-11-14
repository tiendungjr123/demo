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
                  <th scope="col">Giá</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                     <button
                        type="button"
                        class="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                     >
                        Edit
                     </button>
                     <button class="btn btn-danger mx-3">Delete</button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default Home;
