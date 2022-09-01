import Graph from '../graph.js';

/**
 * @param {string} json
 * @returns {Graph}
 */
export default function fromJSON(json) {
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

  //   return JSON.stringify({
  //     nodes: nodesObject,
  //     edges: edgesObject,
  //   });
}
