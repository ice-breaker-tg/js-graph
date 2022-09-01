import Graph from '../graph.js';
import DFS from './DFS.js';

/**
 * @param {Graph} graph
 * @param {string} root id
 */
export default function toMermaid(graph, root) {
  let output = 'graph TD\n';

  for (const id of DFS(graph, root)) {
    const data = graph.nodes.get(id).data;
    const mapped = Object.keys(data)
      .map((k) => `<div>${k}: ${data[k]}</div>`)
      .join('');

    output += `\t${id}[${id}<hr/>${mapped}]\n`;

    for (const edge of graph.edges(id)) {
      output += `\t${id} --> ${edge}\n`;
    }
  }

  return output;
}
