const products = [
   {
      "name": "Iphone 14",
      "type": "Trắng, 256GB",
      "price": "4000000",
      "id": 1
   },
   {
      "name": "Iphone 12",
      "type": "Trắng, 32GB",
      "price": "200000",
      "id": 2
   },
   {
      "name": "Samsung Galaxy ZFlip4",
      "type": "Trắng, 128GB",
      "price": "210000",
      "id": 4
   },
   {
      "name": "Xiaomi Redmi Note 11",
      "type": "Trắng, 32GB",
      "price": "100000",
      "id": 5
   }
]

function arrayToList(array) {
   var list = null;
   for (var i = array.length - 1; i >= 0; i--) {
      console.log(i); //2, then 1
      console.log(array[i]); //20, then 10
      list = {
         value: array[i],
         rest: list //null, then {value:20, rest: null}
      };
   }
   return list;
}