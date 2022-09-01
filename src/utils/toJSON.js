import Graph from '../graph.js';

/**
 * @param {Graph} graph
 * @param {boolean} [pretty] - Should json be pretty printed.
 * @returns {string} the JSON.
 */
export default function toJSON(graph, pretty = false) {
  const nodes = graph.nodes;
  const edges = graph.edges();

  const nodesObject = {};
  const edgesObject = {};

  for (const [k, v] of nodes.entries()) {
    const node = { ...v.data };
    nodesObject[k] = node;
  }

  for (const [k, v] of edges.entries()) {
    edgesObject[k] = Array.from(v);
  }

  return JSON.stringify(
    {
      directed: graph.directed,
      nodes: nodesObject,
      edges: edgesObject,
    },
    null,
    pretty ? 2 : 0
  );
}
