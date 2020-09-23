/*
    Queues.

    Have the same principle that stack, the only difference is that it's not a LIFO,

    It's a FIFO -> First In Frist Out.

    Real usuability:
    1.Background Tasks.
    2. Uploading resources.
    3. Print Queue.
    4. Send emails async

    BigO:
    Insertion - O(1)
    Removal - O(1)
    // unimportant
    Searching - O(n)
    Access - O(n)
    
*/

// Array implementation
let simpleQueue = [];
simpleQueue.push("first");
simpleQueue.push("second");
simpleQueue.push("third");
simpleQueue = [];
simpleQueue.unshift("first");
simpleQueue.unshift("second");
simpleQueue.unshift("third");
// BigO
// insert - O(n) && collect - O(1) || insert - O(1) && collect - O(n)

// inser - O(1) && collect - O(1)
class Node {
  constructor(value) {
    this.value = value;
    this.next;
  }
}

class Queue {
  constructor() {
    this.first;
    this.last;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) return null;
    let oldFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return oldFirst.value;
  }
}

let queue = new Queue();

queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log(queue.dequeue());
console.log(queue.dequeue());
