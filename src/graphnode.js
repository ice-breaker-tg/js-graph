/**
 * @template T
 */
export default class GraphNode {
  /**
   * @param {{id: string, data: (T|undefined)}} params
   */
  constructor({ id, data }) {
    this.data = data || {};
    // TODO: make id hash of data if no id passed.
    this.id = id || '';
  }
}
