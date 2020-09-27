/*
    Dijkstra's

    One of the most famous and widely used algorithms around.

    Finds the shortest path between two vertices on a graph.

    useCases:
        1. GPS
        2. Network routing
        3. Biology - used to model the spead of vuruses amoung humans.
        4. Airline tickets 0 finding cheapest route to you destination
        ...

*/

// naive implementation
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  _sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this._sort();
  }
  dequeue() {
    return this.values.shift();
  }
}

class WeightedGraph {
  constructor() {
    this.ajacencyList = {};
  }
  addVertex(vertex) {
    if (!this.ajacencyList[vertex]) this.ajacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.ajacencyList[vertex1].push({ node: vertex2, weight });
    this.ajacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // build uo default state
    for (let vertex in this.ajacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      // smallest priority number
      (smallest = node.dequeue()), val;
    }
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);
graph.addEdge("E", "B", 3);

console.log(graph.ajacencyList);
