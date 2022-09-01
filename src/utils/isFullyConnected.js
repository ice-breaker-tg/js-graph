// L ← Empty list that will contain the sorted elements
// S ← Set of all nodes with no incoming edge
//
// while S is not empty do
//     remove a node n from S
//     add n to L
//     for each node m with an edge e from n to m do
//         remove edge e from the graph
//         if m has no other incoming edges then
//             insert m into S
//
// if graph has edges then
//     return error   (graph has at least one cycle)
// else
//     return L   (a topologically sorted order)

import Graph from '../graph.js';
import DFS from './DFS.js';

/**
 * @param {Graph} graph
 * @returns boolean
 */
export default function isFullyConnected(graph) {
  const nodeCount = graph.nodes.size;
  const searchCount = DFS(graph, graph.nodes.keys().next()?.value).length;

  return nodeCount == searchCount;
}
