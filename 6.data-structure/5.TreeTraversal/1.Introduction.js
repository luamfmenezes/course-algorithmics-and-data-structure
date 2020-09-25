/*
    Tree tranversal.

    It's a binary tree.

    Breadth First Search

    ----------> A ------------->
    -----> B -------> C  ------>
    --> D --> E --> N --> D --->

    Use cases.

    DFS, InOrder ->  

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BreadFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DepthFirstPreOrder() {
    let node = this.root;

    function goDeep(node) {
      if (!node.left && !node.right) return [node.value];
      if (!node.left) return [node.value, ...goDeep(node.right)];
      return [node.value, ...goDeep(node.left), ...goDeep(node.right)];
    }

    return goDeep(node);
  }
  DepthFirstPostOrder() {
    let node = this.root;

    function goDeep(node) {
      if (!node.left && !node.right) return [node.value];
      if (!node.left) return [...goDeep(node.right), node.value];
      return [...goDeep(node.left), ...goDeep(node.right), node.value];
    }

    return goDeep(node);
  }
  DepthFirstPostOrder() {
    let node = this.root;

    function goDeep(node) {
      if (!node.left && !node.right) return [node.value];
      if (!node.left) return [node.value, ...goDeep(node.right)];
      return [...goDeep(node.left), node.value, ...goDeep(node.right)];
    }

    return goDeep(node);
  }
}

var tree = new BinaryTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DepthFirstPostOrder());
