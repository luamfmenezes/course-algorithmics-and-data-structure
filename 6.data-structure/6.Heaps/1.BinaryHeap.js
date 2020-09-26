/*
    Binary Heaps

    MaxBinaryHeap - Tree with the parents higher than the childrens.
    MinBinaryHeap - Tree with the parents lower than the childrens.

    Childrens are no ordered.

    It's as compact as possible. All the children of each node are as full as they can be and left children
    are filled out first.

    Use case:
    1. Priority queues.
    2. Used with graphs

    
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}
