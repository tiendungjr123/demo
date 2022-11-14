import React, { useState } from "react";
import { addProduct } from "../../apis";

const initialValue = {
   name: "",
   type: "",
   price: "",
   image: "",
};
const AddProduct = () => {
   const [product, setProduct] = useState(initialValue);
   const [file, setFile] = useState();
   const { name, type, price, image } = product;

   const onValueChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
      console.log(product);
   };
   const handleChange = (e) => {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
   };
   const addProductDetails = async () => {
      await addProduct(product);
   };

   return (
      <>
         <button
            type="button"
            className="btn btn-primary ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
         >
            <i className="fa fa-sign-in me-1" />
            Thêm sản phẩm
         </button>
         <div
            className="modal fade"
            id="addModal"
            tabIndex="-1"
            aria-labelledby="addModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1
                        className="modal-title fs-5 fw-bold"
                        id="addModalLabel"
                     >
                        Thêm sản phẩm
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
                        <div className="mb-3">
                           <input
                              type="file"
                              onChange={handleChange}
                              name="file"
                              value={file}
                           />
                           <img className="w-25 h-25" src={file} />
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
                              onClick={() => addProductDetails()}
                           >
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AddProduct;
