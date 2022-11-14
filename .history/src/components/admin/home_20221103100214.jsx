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
   const [sort, isSort] = useState(false);
   useEffect(() => {
      getProducts();
   }, []);
   useEffect(() => {
      loadProductDetail();
   }, []);

   const getProducts = async () => {
      const res = await getallProducts();
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

   // sắp xếp
   function swap(arr, xp, yp) {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
   }
   const sortProduct = (arr, n) => {
      var i, j, min_idx;

      for (i = 0; i < n - 1; i++) {
         min_idx = i;
         for (j = i + 1; j < n; j++)
            if (Number(arr[j].price) < Number(arr[min_idx].price)) min_idx = j;

         swap(arr, min_idx, i);
      }
      return arr;
   };

   const handleSort = () => {
      return [...products].sort((a, b) => a.price - b.price);
   };
   handleSort();
   // tìm kiếm
   // const handleSearch = (e) => {
   //    setInputText(e.target.value.toLowerCase());
   // };

   // const filterProduct = products.filter((product) => {
   //    if (inputText === "") {
   //       return product;
   //    } else {
   //       return product.name.toLowerCase().indexOf(inputText) != -1;
   //    }
   // });

   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-25"
               placeholder="Search..."
               aria-describedby="basic-addon1"
            />
            <button onClick={handleSort} className="btn btn-dark mx-5">
               Sort
            </button>
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
            >
               <option value="selected">Sắp xếp theo giá</option>
               <option value="1">Từ thấp lên cao</option>
               <option value="2">Từ cao xuống thấp</option>
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
