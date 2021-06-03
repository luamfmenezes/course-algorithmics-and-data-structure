/*
    Travessal Graph
 
    Peer to perr networking.
    Web crawlers
    finding closest
    recoomendations
    shortest path problems.
        1. Gps navigation
        2. Solving mazes
        3. AI (games) 

    DFS - Depth first search    
    
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

  // recursive
  const depthFirstRecursive = (start) => {
    const result = [];
    const visisted = {};

    const dfs = (vertex) => {
      if (!vertex) return null;
      visisted[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visisted[neighbor]) {
          return dfs(neighbor);
        }
      });
    };
    dfs(start);
    return result;
  };

  // iterative
  const depthFirstIterative = (start) => {
    const stack = [start];
    const visisted = { [start]: true };
    const result = [];

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visisted[neighbor]) {
          visisted[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  };

  const breadthFirstIterative = (start) => {
    const queue = [start];
    const visisted = { [start]: true };
    const result = [];

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visisted[neighbor]) {
          visisted[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  };

  return {
    adjacencyList,
    addVertex,
    addEdge,
    removeEdge,
    removeVertex,
    depthFirstRecursive,
    depthFirstIterative,
    breadthFirstIterative,
  };
}

const graph = createGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.addEdge("test2", "test3");
graph.addEdge("test3", "test1");

console.log(graph.depthFirstIterative("A"));
