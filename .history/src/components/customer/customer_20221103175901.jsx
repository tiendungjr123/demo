import React, { useState, useEffect } from "react";
import AddProduct from "./addProduct";
import LinkedList from "./linkedList";

const Customer = () => {
   const linkedList = new LinkedList();
   const [products, setProducts] = useState([]);
   const [check, setCheck] = useState(false);
   useEffect(() => {
      const product = linkedList.print();
      setProducts(product);
   }, [check]);
   const addProductDetails = () => {
      linkedList.insert({
         name: "Iphone 14",
         type: "Trắng, 256GB",
         price: "4000000",
         id: 1,
      });
      setCheck(true);
   };

   console.log(products);
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-25"
               placeholder="Search..."
               aria-describedby="basic-addon1"
            />
            <button onClick={addProductDetails} className="btn btn-dark">
               Add
            </button>
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
            >
               <option value="selected">Sắp xếp theo giá</option>
               <option value="ascending">Từ thấp lên cao</option>
               <option value="descending">Từ cao xuống thấp</option>
            </select>
            <AddProduct />
         </div>
         <table className="table table-striped table-bordered mt-3">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Loại</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {products.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.name}</td>
                     <td>{data.type}</td>
                     <td>{data.price}</td>
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
