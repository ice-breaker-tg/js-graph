import Graph from '../graph.js';

/**
 * @param {Graph} graph
 * @param {string} root id
 */
export default function BFS(graph, root) {
  return Array.from(BFS_iterator(graph, root));
}

/**
 * @param {Graph} graph
 * @param {string} root id
 */
function* BFS_iterator(graph, root) {
  const queue = [];
  const explored = new Set();
  explored.add(root);

  queue.unshift(root);

  while (queue.length > 0) {
    const cur = queue.pop();
    yield cur;

    for (const [id] of graph.edges(cur)) {
      if (!explored.has(id)) {
        explored.add(id);
        queue.unshift(id);
      }
    }
  }
}
