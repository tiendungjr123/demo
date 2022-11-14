import React, { useEffect, useState } from "react";
import LinkedList from "./linkedList";
const initialValue = {
   id: "",
   firstName: "",
   lastName: "",
};

const Index = () => {
   const [products, setProducts] = useState(initialValue);
   const { firstName, lastName } = products;
   const [users, setUsers] = useState([]);
   const linkedList = new LinkedList();
   useEffect(() => {}, []);
   const onValueChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setProducts({ ...products, [name]: value });
   };
   const handleAdd = (e) => {
      console.log(products);
   };

   return (
      <div>
         <div className="mt-3 d-flex">
            <div className="row">
               <div className="col">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="First name"
                     aria-label="First name"
                     name="firstName"
                     value={firstName}
                     onChange={(e) => onValueChange(e)}
                  />
               </div>
               <div className="col">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Last name"
                     aria-label="Last name"
                     name="lastName"
                     value={lastName}
                     onChange={(e) => onValueChange(e)}
                  />
               </div>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleAdd}>
               Add
            </button>
         </div>
         <table className="table table-striped table-bordered mt-3">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
               </tr>
            </thead>
            <tbody>
               {users.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.firstName}</td>
                     <td>{data.lastName}</td>
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

export default Index;
