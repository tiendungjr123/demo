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
   print() {
      let current = this.head;
      while (current) {
         arr.push(current.value);
         current = current.next;
      }
      return arr;
   }
}