import React, { useState, useEffect } from "react";
import { getallImgages } from "../../apis";

const Test = () => {
   const [images, setImages] = useState([]);
   const [inputText, setInputText] = useState("");

   useEffect(() => {
      getImages();
   }, []);

   const getImages = async () => {
      const res = await getallImgages();
      setImages(res.data);
   };
   // sắp xếp
   // sắp xếp selection sort
   function swap(arr, xp, yp) {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
   }
   const sortUser = (arr, n) => {
      var i, j, min_idx;
      for (i = 0; i < n - 1; i++) {
         min_idx = i;
         for (j = i + 1; j < n; j++)
            if (arr[j].title > arr[min_idx].title) min_idx = j;

         swap(arr, min_idx, i);
      }
      return arr;
   };
   // quick sort

   function partition(arr, low, high) {
      let pivot = arr[high].title;
      let i = low - 1;
      for (let j = low; j <= high - 1; j++) {
         if (arr[j].title < pivot) {
            i++;
            swap(arr, i, j);
         }
      }
      swap(arr, i + 1, high);
      return i + 1;
   }

   function quickSort(arr, low, high) {
      if (low < high) {
         let pi = partition(arr, low, high);
         quickSort(arr, low, pi - 1);
         quickSort(arr, pi + 1, high);
      }
      return arr;
   }
   const handleSelect = (e) => {
      let sortImages = [...images];
      const sorted = sortUser(sortImages, images.length);
      if (e.target.value === "ascending") {
         const sortDec = quickSort(sortImages, 0, images.length - 1);
         setImages(sortDec);
      } else if (e.target.value === "descending") {
         setImages(sorted);
      } else {
         getImages();
      }
   };
   //tìm kiếm
   const handleSearch = (e) => {
      setInputText(e.target.value.toLowerCase());
   };

   const filterImages = images.filter((image) => {
      if (inputText === "") {
         return image;
      } else {
         return image.title.toLowerCase().indexOf(inputText) != -1;
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
            <select
               defaultValue={"selected"}
               className="form-select w-25 mx-5"
               aria-label="Default select example"
               onChange={handleSelect}
            >
               <option value="selected">Sắp xếp theo a-b</option>
               <option value="ascending">Từ a-b</option>
               <option value="descending">Từ b-a</option>
            </select>
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
