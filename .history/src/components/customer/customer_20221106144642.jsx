import React, { useState, useEffect } from "react";
import { getallUsers } from "../../apis";

const Customer = () => {
   const [users, setUsers] = useState([]);
   const [inputText, setInputText] = useState("");

   useEffect(() => {
      getUser();
   }, []);

   const getUser = async () => {
      const res = await getallUsers();
      setUsers(res.data);
   };

   //tìm kiếm theo first_name
   const handleSearch = (e) => {
      setInputText(e.target.value.toLowerCase());
   };

   const filterUsers = users.filter((user) => {
      if (inputText === "") {
         return user;
      } else {
         return user.first_name.toLowerCase().indexOf(inputText) != -1;
      }
   });

   // tìm kiếm theo gender
   const handleSelectSearch = (e) => {
      setCheck(true);
      let searchUser = [...users];
      if (e.target.value === "female") {
         const userFilter = searchUser.filter(
            (user) => user.gender === "Female"
         );
         setUsers(userFilter);
      } else if (e.target.value === "male") {
         let searchUser = [...users];
         const userFilter = searchUser.filter((user) => user.gender === "Male");
         setUsers(userFilter);
      } else {
         getUser();
      }
   };
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-25"
               placeholder="Search..."
               aria-describedby="basic-addon1"
               onChange={handleSearch}
            />
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-2"
               aria-label="Default select example"
               onChange={handleSelectSearch}
            >
               <option value="selected">Gender</option>
               <option value="female">Female</option>
               <option value="male">Male</option>
            </select>
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
            >
               <option value="selected">Sắp xếp theo lương</option>
               <option value="ascending">Từ thấp lên cao</option>
               <option value="descending">Từ cao xuống thấp</option>
            </select>
         </div>
         <table className="table table-striped table-bordered mt-3">
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
               {filterUsers.map((data) => (
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
