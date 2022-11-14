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
   removeFrom(index) {
      if (index < 0 || index >= this.size)
         return console.log("Please Enter a valid index");
      else {
         var curr, prev, it = 0;
         curr = this.head;
         prev = curr;

         // deleting first element
         if (index === 0) {
            this.head = curr.next;
         } else {
            // iterate over the list to the
            // position to removce an element
            while (it < index) {
               it++;
               prev = curr;
               curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
         }
         this.size--;

         // return the remove element
         return curr.element;
      }
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