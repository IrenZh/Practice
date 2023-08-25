const Functions = require('../practice_11/task_1'); 
const functions = new Functions();
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("Tests for first and second tasks", () => {
    test('sum 0.1 and 0.2', () => {
        expect(functions.sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should contain "admin" element', () => {
        expect(userList).toContain('admin');
    });

    test('first element should be "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });

    test('should contain "new_user_2" element', () => {
        expect(userList).toContain('new_user_2');
    });

    test('the length of the array', () => {
        expect(userList.length).toBe(5);
    });

    test('the 3rd element of the array is of type string', () => {
        expect(typeof userList[2]).toBe('string');
    });

    test('the 8th element should not exist', () => {
        expect(userList[7]).toBeUndefined();
    });
})
