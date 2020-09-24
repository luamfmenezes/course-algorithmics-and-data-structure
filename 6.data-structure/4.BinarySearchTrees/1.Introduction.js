/*
    Binary search tree.

    Data structure that consist of nodes in a parent / child relationship

    Trees different of list are nonlinear.

    Real usuability of trees: 
    Html DOM(Document object module)
    Network routing
    Abstract sintaxy tree.
    Minimax Tree (Artificial Inteligence)
    Folders in OS.

    BigO 
    Insertion - O(log(n))
    Searching - O(log(n))

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return false;
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value === current.value) return true;
      if (!current.right && !current.left) return false;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(15);
bst.insert(40);
console.log(bst.find(15));
