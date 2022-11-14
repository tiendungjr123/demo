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
         if (index === 0) {
            this.head = curr.next;
         } else {
            while (it < index) {
               it++;
               prev = curr;
               curr = curr.next;
            }
            prev.next = curr.next;
         }
         this.size--;
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

const linkedList = new LinkedList();

linkedList.insert(1)
console.log(linkedList)