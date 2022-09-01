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

/**
 * @param {Graph} graph
 * @returns boolean
 */
export default function isAcyclic(graph) {
  const perm = new Set();
  const temp = new Set();
  const stack = [];

  const { value: start } = graph.nodes.keys().next();

  function visit(node) {
    if (perm.has(node)) {
      return true;
    } else if (temp.has(node)) {
      return false;
    }
    temp.add(node);

    let noCycle = true;
    for (const n of graph.edges(node)) {
      noCycle = noCycle && visit(n[0]);
    }

    temp.delete(node);
    perm.add(node);
    return noCycle;
  }

  return visit(start);
}
