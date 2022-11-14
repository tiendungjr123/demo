import React, { useState, useEffect } from "react";
import { getallImgages } from "../../apis";

const Test = () => {
   const [images, setImages] = useState([]);
   const [inputText, setInputText] = useState("");

   useEffect(() => {
      getImnages();
   }, []);

   const getImnages = async () => {
      const res = await getallImgages();
      setImages(res.data);
   };
   //tìm kiếm
   const handleSearch = (e) => {
      setInputText(e.target.value.toLowerCase());
   };

   const filterImages = images.filter((image) => {
      if (inputText === "") {
         return image;
      } else {
         return image.name.toLowerCase().indexOf(inputText) != -1;
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
               {filterImages.map((data) => (
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
