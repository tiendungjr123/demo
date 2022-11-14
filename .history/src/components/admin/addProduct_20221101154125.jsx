import React from "react";

const AddProduct = () => {
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
                        <div className="d-flex text-center">
                           <button
                              type="submit"
                              className="btn btn-outline-dark w-25"
                           >
                              Submit
                           </button>
                           <button
                              type="submit"
                              className="btn btn-outline-dark w-25"
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
