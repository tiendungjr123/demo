import React, { useSate } from "react";

const Test = () => {
   const [images, setImages] = useSate([]);

   //tìm kiếm
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
   return (
      <div>
         <div className="mt-3 d-flex justify-content-between">
            <input
               type="text"
               className="form-control w-25"
               placeholder="Search..."
               onChange={handleSearch}
               aria-describedby="basic-addon1"
            />
         </div>
         <table className="table table-striped table-bordered mt-3">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
               </tr>
            </thead>
            <tbody>
               {filterImage.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.title}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Test;
