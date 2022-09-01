import { Graph } from './index.js';
import { toJSON, toDot, toMermaid, DFS, BFS } from './index.js';
import { DFS_iterator } from './src/utils/DFS.js';
import isAcyclic from './src/utils/isAcyclic.js';
import isFullyConnected from './src/utils/isFullyConnected.js';

var foo = new Graph();

foo.addNode({ id: 'a', data: { bar: 1, baz: 2 } });
foo.addNode({ id: 'b', data: { bar: 1, links: 123 } });
foo.addNode({ id: 'c', data: { bar: 1, thing: 'test' } });
foo.addNode({ id: 'd', data: { bar: 1, banana: 2 } });
// foo.addNode({ id: 'e', data: { bar: 1, type: 'file' } });

foo.addEdge('a', 'b', { name: 'hello', other: 'test' });
foo.addEdge('a', 'c');
foo.addEdge('b', 'd');
foo.addEdge('c', 'd');
foo.addEdge('d', 'a');

console.log('dfs', DFS(foo, 'a'));
console.log('bfs', BFS(foo, 'a'));
console.log('json', toJSON(foo, true));
console.log('isAcyclic', isAcyclic(foo));
console.log('isFullyConnected', isFullyConnected(foo));

// const nameMapper = ([propertyName, propertyValue]) => {
//   if (propertyName == 'name') {
//     return propertyValue;
//   }
// };
//
// console.log(toDot(foo, 'a', { edgeLabelMapper: nameMapper }));

// for (const node of foo) {
//   console.log(node);
// }
