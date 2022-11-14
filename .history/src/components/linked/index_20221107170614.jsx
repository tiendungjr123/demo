import React, { useEffect, useState } from "react";
import LinkedList from "./linkedList";
const initialValue = {
   name: "",
   des: "",
   category: "",
   price: "",
};

const Index = () => {
   const [products, setProducts] = useState([]);
   const linkedList = new LinkedList();
   const handleAdd = (e) => {
      linkedList.insert({
         name: "iphone 14",
         des: "64GB",
         category: "Iphone",
         price: "1000",
      });
      linkedList.insert({
         name: "iphone 14",
         des: "64GB",
         category: "Iphone",
         price: "1000",
      });
      setProducts(linkedList.print());
   };
   const handleRemove = () => {
      linkedList.removeFrom(1);
   };
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleAdd}>
               Add
            </button>
            <button className="btn btn-primary" onClick={handleRemove}>
               Remove
            </button>
         </div>
         <table className="table table-striped table-bordered mt-3">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Mô tả</th>
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
                     <td>{data.des}</td>
                     <td>{data.category}</td>
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

export default Index;
