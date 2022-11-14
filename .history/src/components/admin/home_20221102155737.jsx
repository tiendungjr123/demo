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
   // sửa
   const loadProductDetail = async () => {
      const res = await getallProducts(1);
      setProductDetail(res.data);
   };

   const onValueChange = (e) => {
      setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
      console.log(productDetail);
   };

   const editProductDetails = async () => {
      await editProduct(1, productDetail);
   };
   // xóa
   const deleteData = async (id) => {
      await deleteProduct(id);
      getProducts();
   };
   // tìm kiếm
   const handleSearch = (e) => {
      setInputText(e.target.value.toLowerCase());
   };

   const filterProduct = products.filter((product) => {
      if (inputText === "") {
         return product;
      } else {
         return product.name.toLowerCase().indexOf(inputText) != -1;
      }
   });

   // sắp xếp
   function swap(arr, xp, yp) {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
   }
   const sortProduct = products.map((product) => {
      console.log(Number(product[0].price)
      // var i, j, min_idx;
      // for (i = 0; i < products.length - 1; i++) {
      //    min_idx = i;
      //    for (j = i + 1; j < products.length; j++) {
      //       if (Number(product[j].price) < Number(product[min_idx].price))
      //          min_idx = j;
      //       swap(products, min_idx, j);
      //    }
      // }
      // console.log(products);
   });
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
               {filterProduct.map((data) => (
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
                              data-dismiss="modal"
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
