// binary search
const binarySearch = (arr, l, r, x) => {
   if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] > x) { return arr.slice(0, x) }

      else {
         return arr.slice(0, x);
      }
   }
};
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let x = 4;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
console.log(result);