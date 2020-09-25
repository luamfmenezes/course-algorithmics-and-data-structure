/*
    Graphs

    A graph data structure consist of a finite (and possibly mutable) set of vertices, nodes or pointes,
    together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered
    pairs for a directed graph.

    Connection and nodes

    Use cases:
    1. Social networks.
    2. Location / Mapping
    3. Routing Algorithms
    4. Visual Hierarchy
    5. Recommendations
    5. a lot of other (It's in everywhere)

    Terminology:
    Vertex - Node
    Edge - connection beteween nodes
    Direct - A and B are connected - (Facebook friendShip)
    Undirect - A -> B is a connection, B -> A it's other connection (Followers instagram)
    Weighted -> when the edges have a value (Maps)
    Unweighted -> Edges are only connections (Facebook friendship)

    Adjacency Matrix
    -------------------------------------------------------------------------------------
    Matrix with the connections A - B = true
    Direct - Matrix simetric
    
        A B C
        -----
    A | 0 1 1
    B | 0 0 1
    C | 1 0 0
    

    Adjacency List >> Popular
    -------------------------------------------------------------------------------------
    array of connections
    [
        [1,5],
        [0,2],
        [1,3],
        [2,4]
    ]
    object of connections
    {
        a: [b,f],
        b: [a,c],
        c: [d, b],
        ...
    }

*/

function createGraph() {
  let adjacencyList = {};

  const addVertex = (key) => {
    if (!adjacencyList[key]) adjacencyList[key] = [];
  };

  const addEdge = (vertex1, vertex2) => {
    if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return false;
    if (vertex1 === vertex2) return false;
    adjacencyList[vertex1].push(vertex2);
    adjacencyList[vertex2].push(vertex1);
  };

  const removeEdge = (vertex1, vertex2) => {
    if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return false;
    if (vertex1 === vertex2) return false;
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (edge) => edge !== vertex2
    );
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (edge) => edge !== vertex1
    );
  };

  const removeVertex = (vertex) => {
    delete adjacencyList[vertex];
    for (let key in adjacencyList) {
      adjacencyList[key] = adjacencyList[key].filter((edge) => edge !== vertex);
    }
  };

  return { adjacencyList, addVertex, addEdge, removeEdge, removeVertex };
}

const graph1 = createGraph();
const graph2 = createGraph();

graph1.addVertex("test1");
graph1.addVertex("test2");
graph1.addVertex("test3");

graph1.addEdge("test1", "test2");
graph1.addEdge("test2", "test3");
graph1.addEdge("test3", "test1");

graph1.removeVertex("test1");

console.log(graph1.adjacencyList);
