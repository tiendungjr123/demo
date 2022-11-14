import React, { useState } from "react";
function createNode(value) {
   return {
      value: value,
      next: null,
   };
}
var arr = [];
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   insert(value) {
      this.length++;
      let newNode = createNode(value);

      if (this.tail) {
         this.tail.next = newNode;
         this.tail = newNode;
         return newNode;
      }

      this.head = this.tail = newNode;
      return newNode;
   }

   print() {
      let current = this.head;
      while (current) {
         arr.push(current.value);
         current = current.next;
      }
      return arr;
   }
}
const linkedList = new LinkedList();

linkedList.insert({
   name: "Iphone 14",
   type: "Trắng, 256GB",
   price: "4000000",
   id: 1,
});
linkedList.insert({
   name: "Iphone 12",
   type: "Trắng, 32GB",
   price: "200000",
   id: 2,
});
linkedList.insert({
   name: "Samsung Galaxy ZFlip4",
   type: "Trắng, 128GB",
   price: "210000",
   id: 4,
});
linkedList.insert({
   name: "Xiaomi Redmi Note 11",
   type: "Trắng, 32GB",
   price: "100000",
   id: 5,
});

const Customer = () => {
   const [products, setProducts] = useState([]);

   setProducts(linkedList.print());
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
