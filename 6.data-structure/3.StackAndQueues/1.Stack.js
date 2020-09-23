/*
    Stacks.

    Data collections in which all the data that is storage last is recovered first.

    LIFO -> Last In First Of

    Examples of usuability:
    1. Managing function invocations.
    2. Undo / Redo.
    3. Routing (the history object is treated like a stack).

    Abstract concept.

    BigO:
    Insertion - O(1)
    Removal - O(1)
    // unimportant
    Searching - O(n)
    Access - O(n)

*/

// Array implementation

let simpleStack = [];
simpleStack.push("first item");
simpleStack.push("second item");
simpleStack.pop();

// SingleLinkedList implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next;
  }
}

class Stack {
  constructor() {
    this.first;
    this.last;
    this.size = 0;
  }
  push(value) {
    // insert in the begin because time complexity is lower
    const node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size === 0) return undefined;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
    }
    this.size--;
    return removedNode;
  }
}

let stack = new Stack();

stack.push("test");
stack.push("test2");
stack.push("test3");
console.log(stack.pop());

console.log(stack);
