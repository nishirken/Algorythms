const { createInDegree, createNext, createLinearOrdering } = require('../../graphs/topological-sort');

describe('Graphs', () => {
  describe('Topological sort', () => {
    const graph = Object.freeze({
      0: [2],
      1: [3],
      2: [5, 6],
      3: [6, 7, 4],
      4: [8, 9],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    });
    const expectedInDegree = () => [0, 0, 1, 1, 1, 1, 2, 1, 1, 1];
    const expectedNext = () => [0, 1];

    test('inDegree function', () => {
      expect(createInDegree(graph)).toEqual(expectedInDegree());
    });

    test('next function', () => {
      expect(createNext(expectedInDegree())).toEqual(expectedNext());
    });

    /**
     * There are more than one correct result of topological sort,
     * In this case we go from left to right in a graph traversal
     */
    test('createLinearOrdering function', () => {
      const expectedOrder = [0, 1, 2, 3, 5, 6, 7, 4, 8, 9];

      expect(createLinearOrdering(graph, expectedNext(), expectedInDegree())).toEqual(expectedOrder);
    });
  });
});