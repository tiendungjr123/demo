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
   const [inputText, setInputText] = useState("");
   const { name, type, price } = productDetail;
   useEffect(() => {
      getProducts();
   }, []);
   useEffect(() => {
      loadProductDetail();
   }, []);

   const getProducts = async () => {
      const res = await getallProducts();
      console.log(res.data);
      setProducts(res.data);
   };

   const loadProductDetail = async () => {
      const res = await getallProducts(1);
      console.log(res.data);
      setProductDetail(res.data);
   };

   const onValueChange = (e) => {
      setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
      console.log(productDetail);
   };

   const editProductDetails = async () => {
      await editProduct(1, productDetail);
   };
   const deleteData = async (id) => {
      await deleteProduct(id);
      getProducts();
   };

   const handleSearch = (e) => {
      let lowerCase = e.target.value.toLowerCase();
      console.log(lowerCase);
      setInputText(lowerCase);
   };

   // const filterdData = products.filter((product) => {
   //    if (inputText.input === "") {
   //       return product;
   //    } else {
   //       return product.text.toLowerCase().includes(inputText.input);
   //    }
   // });
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-50"
               placeholder="Search..."
               aria-describedby="basic-addon1"
               onChange={handleSearch}
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
                           <input
                              type="text"
                              className="form-control"
                              onChange={(e) => onValueChange(e)}
                              name="name"
                              value={name}
                           />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">Loại</label>
                           <input
                              type="text"
                              className="form-control"
                              onChange={(e) => onValueChange(e)}
                              name="type"
                              value={type}
                           />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">Giá</label>
                           <input
                              type="text"
                              className="form-control"
                              onChange={(e) => onValueChange(e)}
                              name="price"
                              value={price}
                           />
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
                              onClick={() => editProductDetails()}
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
