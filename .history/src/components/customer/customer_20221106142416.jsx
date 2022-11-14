import React, { useState, useEffect } from "react";
import { getallUsers } from "../../apis";

const Customer = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      getUser();
   }, []);

   const getUser = async () => {
      const res = await getallUsers();
      setUsers(res.data);
   };

   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-25"
               placeholder="Search..."
               aria-describedby="basic-addon1"
            />
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
            >
               <option value="selected">Sắp xếp theo giá</option>
               <option value="ascending">Từ thấp lên cao</option>
               <option value="descending">Từ cao xuống thấp</option>
            </select>
         </div>
         <table className="table table-striped table-bordered">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Salary</th>
               </tr>
            </thead>
            <tbody>
               {users.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.first_name}</td>
                     <td>{data.last_name}</td>
                     <td>{data.gender}</td>
                     <td>{data.salary}</td>
                     <td>
                        <button
                           type="button"
                           className="btn btn-info"
                           data-bs-toggle="modal"
                           data-bs-target="#editModal"
                        >
                           Edit
                        </button>
                        <button className="btn btn-danger mx-3">Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Customer;
