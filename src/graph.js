import GraphNode from './graphnode.js';

/**
 * @template T
 * @template U
 */
export default class Graph {
  constructor(directed = true) {
    this.#directed = directed;
  }
  /** @type {boolean} */
  #directed;
  /** @type {Map<string, GraphNode<T>>} */
  #nodes = new Map();
  /** @type {Map<string, Map<string, U>>} */
  #edges = new Map();

  [Symbol.iterator]() {
    return this.#nodes.values();
  }

  get nodes() {
    return this.#nodes;
  }

  get directed() {
    return this.#directed;
  }

  /**
   * @param {string} [id] - The id of the node to get edges for.
   * @returns
   */
  edges(id) {
    if (id) {
      return this.#edges.get(id) || [];
    }
    return this.#edges;
  }

  /**
   * Add a node to the graph.
   * @param {GraphNode<T>} node - The node data.
   */
  addNode(node) {
    if (node instanceof GraphNode == false) {
      node = new GraphNode(node);
    }
    this.#nodes.set(node.id, node);
    return node;
  }

  /**
   * Remove a node from the graph.
   * @param {GraphNode<T>|string} node - The node data.
   */
  removeNode(node) {
    const isNode = node instanceof GraphNode;
    this.#nodes.delete(isNode ? node.id : node);
  }

  /**
   * Adds an edge between two nodes in the graph.
   * Takes either the #nodes themselves, or their ids.
   * @param {GraphNode<T>|string} n1 - The node or the id.
   * @param {GraphNode<T>|string} n2 - The node or the id.
   * @param {U} data - The data for the edge.
   */
  addEdge(n1, n2, data) {
    const isNode1 = n1 instanceof GraphNode;
    const id1 = isNode1 ? n1.id : n1;
    const isNode2 = n2 instanceof GraphNode;
    const id2 = isNode2 ? n2.id : n2;

    if (this.#edges.has(id1)) {
      this.#edges.get(id1).set(id2, data);
    } else {
      this.#edges.set(id1, new Map([[id2, data]]));
    }

    if (!this.#directed) {
      if (this.#edges.has(id2)) {
        this.#edges.get(id2).set(id1, data);
      } else {
        this.#edges.set(id2, new Map([[id1, data]]));
      }
    }
  }

  /**
   * Removes an edge between two nodes.
   * @param {GraphNode<T>|string} n1 - The node or the id.
   * @param {GraphNode<T>|string} n2 - The node or the id.
   */
  removeEdge(n1, n2) {
    const isNode1 = n1 instanceof GraphNode;
    const id1 = isNode1 ? n1.id : n1;
    const isNode2 = n2 instanceof GraphNode;
    const id2 = isNode2 ? n2.id : n2;

    if (this.#edges.has(id1)) {
      this.#edges.get(id1).delete(id2);
    }

    if (!this.#directed) {
      if (this.#edges.has(id2)) {
        this.#edges.get(id2).delete(id1);
      }
    }
  }
}
