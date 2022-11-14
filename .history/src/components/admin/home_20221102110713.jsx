import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteProduct, editProduct, getallProducts } from "../../apis";
import AddProduct from "./addProduct";

const initialValue = {
   name: "",
   type: "",
   price: "",
};
const Home = () => {
   const [products, setProducts] = useState([]);
   const [productDetail, setProductDetail] = useState(initialValue);
   const { id } = useParams();

   useEffect(() => {
      getProducts();
   }, []);
   const getProducts = async () => {
      const res = await getallProducts();
      console.log(res.data);
      setProducts(res.data);
   };

   const loadProduct = async () => {
      const res = getallProducts(id);
      console.log(res.data);
      setProductDetail(res.data);
   };

   const deleteData = async (id) => {
      await deleteProduct(id);
      getProducts();
   };
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-50"
               placeholder="Search..."
               aria-describedby="basic-addon1"
            />
            <AddProduct />
         </div>
         <table className="table mt-3">
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
                        <button
                           className="btn btn-danger mx-3"
                           onClick={() => deleteData(data.id)}
                        >
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1
                        className="modal-title fs-5 fw-bold"
                        id="editModalLabel"
                     >
                        Sửa sản phẩm
                     </h1>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="mb-3">
                           <label className="form-label">Tên sản phẩm</label>
                           <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">Loại</label>
                           <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">Giá</label>
                           <input type="text" className="form-control" />
                        </div>
                        <div className="text-center">
                           <button
                              type="submit"
                              className="btn btn-danger w-25 me-2"
                           >
                              Cancel
                           </button>
                           <button
                              type="submit"
                              className="btn btn-primary w-25"
                           >
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
