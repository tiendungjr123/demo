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

   // sắp xếp selection sort
   function swap(arr, xp, yp) {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
   }
   const sortUser = (arr, n) => {
      var i, j, min_idx;
      for (i = 0; i < n - 1; i++) {
         min_idx = i;
         for (j = i + 1; j < n; j++)
            if (arr[j].salary < arr[min_idx].salary) min_idx = j;

         swap(arr, min_idx, i);
      }
      return arr;
   };
   // quick sort

   function partition(arr, low, high) {
      let pivot = arr[high].salary;
      let i = low - 1;
      for (let j = low; j <= high - 1; j++) {
         if (arr[j].salary < pivot) {
            i++;
            swap(arr, i, j);
         }
      }
      swap(arr, i + 1, high);
      return i + 1;
   }

   function quickSort(arr, low, high) {
      if (low < high) {
         let pi = partition(arr, low, high);
         quickSort(arr, low, pi - 1);
         quickSort(arr, pi + 1, high);
      }
      return arr;
   }

   const handleSelect = (e) => {
      let sortUsers = [...users];
      const sorted = sortUser(sortUsers, users.length);
      if (e.target.value === "ascending") {
         setUsers(sorted);
      } else if (e.target.value === "descending") {
         const sortDec = quickSort(sortUsers, 0, users.length - 1);
         setUsers(sortDec);
      } else {
         getUser();
      }
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
      let searchUser = [...users];
      if (e.target.value === "female") {
         const userFilter = searchUser.filter(
            (user) => user.gender === "Female"
         );
         setUsers(userFilter);
      } else if (e.target.value === "male") {
         const userFilter = searchUser.filter((user) => user.gender === "Male");
         setUsers(userFilter);
      } else {
         getUser();
      }
   };

   const handleSelectSalary = (e) => {
      if (e.target.value === "min_5000") {
         const userSalary = [...users].filter((user) => user.salary >= 5000);
         setUsers(userSalary);
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
               className="form-select w-25 mx-2"
               aria-label="Default select example"
               onChange={handleSelectSalary}
            >
               <option value="selected">Salary</option>
               <option value="min_5000">{">"}5000</option>
            </select>
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
               onChange={handleSelect}
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
