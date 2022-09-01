import Graph from '../graph.js';
import DFS from './DFS.js';
/**
 * @param {Graph} graph
 * @param {string} root id
 */
export default function toDot(graph, root, { edgeLabelMapper } = {}) {
  let nodes = '';
  let edges = '';

  for (const id of DFS(graph, root)) {
    const data = graph.nodes.get(id).data;
    const mapped = Object.keys(data)
      .map((k) => `{${k}|${data[k]}}`)
      .join('|');
    nodes += `\t${id} [label="{${id}|${mapped}}"]\n`;

    for (const [toId, data] of graph.edges(id)) {
      edges += `\t${id} -> ${toId}`;
      if (data) {
        const mappedEdgeData = Object.entries(data)
          .map(edgeLabelMapper || (([k, v]) => `${v}`))
          .filter((x) => x)
          .join(' ');
        edges += ` [label="${mappedEdgeData}"]`;
      }
      edges += '\n';
    }
  }

  return `digraph {
\tnode [shape=record]

${nodes}
${edges}
}`;
}
