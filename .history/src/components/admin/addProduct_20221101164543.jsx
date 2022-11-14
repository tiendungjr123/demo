import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../apis";

const initialValue = {
   name: "",
   type: "",
   price: "",
};
const AddProduct = () => {
   const [product, setProduct] = useState(initialValue);
   const [name, type, price] = product;
   const history = useHistory();

   const onValueChange = (e) => {
      //  console.log(e);
      // console.log(e.target.value);
      setProduct({ ...product, [e.target.name]: e.target.value });
      console.log(product);
   };

   const addProductDetails = async () => {
      await addProduct(product);
      history.push("/all");
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
      </>
   );
};

export default AddProduct;
