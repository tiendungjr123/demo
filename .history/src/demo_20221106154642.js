// binary search
const binarySearch = (arr, l, r, x) => {
   if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] == x) return arr.slice(mid, arr.length);

      if (arr[mid] > x) {
         return binarySearch(arr, l, mid - 1, x);
      }
      else {
         return binarySearch(arr, mid + 1, r, x);
      }
   }
   return arr;
};
let arr = [2, 3, 4, 10, 40];
let x = 4;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
console.log(result);