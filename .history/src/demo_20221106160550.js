// binary search
const binarySearch = (arr, l, r, x) => {
   if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] > x) { return arr.slice(0, arr.indexOf(x) + 1) }

      else {
         return arr.slice(0, arr.indexOf(x) + 1);
      }
   }
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 4;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
console.log(result);