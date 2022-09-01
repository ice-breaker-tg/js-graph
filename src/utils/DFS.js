import Graph from '../graph.js';

/**
 * @param {Graph} graph
 * @param {string} root id
 */
export default function DFS(graph, root) {
  return Array.from(DFS_iterator(graph, root));
}

/**
 * @param {Graph} graph
 * @param {string} root id
 */
export function* DFS_iterator(graph, root) {
  const visited = new Set();
  const stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const cur = stack.pop();
    visited.add(cur);
    yield cur;

    for (const [id] of graph.edges(cur)) {
      if (!visited.has(id)) {
        stack.push(id);
      }
    }
  }
}
