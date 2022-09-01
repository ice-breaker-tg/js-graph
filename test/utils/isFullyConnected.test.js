import { expect, describe, it } from 'vitest';

import Graph from '../../src/graph.js';
import isFullyConnected from '../../src/utils/isFullyConnected.js';

describe('isFullyConnected', () => {
  it('should return true when graph has a single node', () => {
    const g = new Graph();
    g.addNode({ id: 'a' });

    expect(isFullyConnected(g)).toBeTruthy();
  });

  it('should be false when graph has a two nodes no edges', () => {
    const g = new Graph();
    g.addNode({ id: 'a' });
    g.addNode({ id: 'b' });

    expect(isFullyConnected(g)).toBeFalsy();
  });

  it('should be true when graph has a two nodes with a single directional edge', () => {
    const g = new Graph();
    const a = g.addNode({ id: 'a' });
    const b = g.addNode({ id: 'b' });
    g.addEdge(a, b);

    expect(isFullyConnected(g)).toBeTruthy();
  });

  it('should be true when graph has a two nodes with a bi-directional edge', () => {
    const g = new Graph();
    const a = g.addNode({ id: 'a' });
    const b = g.addNode({ id: 'b' });
    g.addEdge(a, b);
    g.addEdge(b, a);

    expect(isFullyConnected(g)).toBeTruthy();
  });
});
