function createNode(value) {
   return {
      value: value,
      next: null,
   };
}
var arr = [];
export default class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   insert(value) {
      this.length++;
      let newNode = createNode(value);

      if (this.tail) {
         this.tail.next = newNode;
         this.tail = newNode;
         return newNode;
      }

      this.head = this.tail = newNode;
      return newNode;
   }
}