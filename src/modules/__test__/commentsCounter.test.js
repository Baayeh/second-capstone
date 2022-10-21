import commentsCounter from '../commentsCounter.js';

describe('CommentsCounter', () => {
    test('Array Length should be 4', () => {
        let arr = [1, 2, 3, 4];
        expect(commentsCounter(arr)).toBe(4);
    }); 
})