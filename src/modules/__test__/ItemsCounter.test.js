import ItemsCounter from '../ItemsCounter.js';

describe('CommentsCounter', () => {
  test('Array Length should be 6', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(ItemsCounter(arr)).toBe(6);
  });
});