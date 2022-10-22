import commentsCounter from '../commentsCounter.js';

describe('CommentsCounter', () => {
  test('Array Length should be 0', () => {
    const arr = [];
    expect(commentsCounter(arr)).toBe(0);
  });

  test('Array Length should be 4', () => {
    const arr = [1, 2, 3, 4];
    expect(commentsCounter(arr)).toBe(4);
  });
});
