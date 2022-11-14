import axios from 'axios';

const url = "http://localhost:3000/products";
const fakeApi = "http://localhost:3000/users";
const apiImg = "https://jsonplaceholder.typicode.com/photos";
export const getallProducts = async (id) => {
   id = id || '';
   return await axios.get(`${url}/${id}`);
}

export const addProduct = async (product) => {
   return await axios.post(url, product);
}

export const editProduct = async (id, product) => {
   return await axios.put(`${url}/${id}`, product);
}


export const deleteProduct = async (id) => {
   return await axios.delete(`${url}/${id}`);
}


export const getallUsers = async (id) => {
   id = id || '';
   return await axios.get(`${fakeApi}/${id}`);
}

export const getallImgages = async (id) => {
   id = id || '';
   return await axios.get(`${apiImg}/${id}`);
}

