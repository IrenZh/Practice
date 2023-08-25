const { Food, foodArray } = require('../practice_11/food');
const food = new Food();

describe("food Tests", () => {
    test('filtered array length should be 3', () => {
        expect(food.filterFoodPrice(foodArray, 12, 40).length).toBe(3);
    });

    test('the sorted array contains the object { kind: "pepper", price: 27 }', () => {
        expect(food.filterFoodPrice(foodArray, 12, 40)).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test('filtered array should contain 2nd, 3rd, and 4th elements of original array', () => {
        expect(food.filterFoodPrice(foodArray, 12, 40)).toEqual(expect.arrayContaining([foodArray[1], foodArray[2], foodArray[3]]));
    });

    test('price property of 3rd element should be less than max', () => {
        let filteredArray = food.filterFoodPrice(foodArray, 12, 40);
        expect(filteredArray[2].price).toBeLessThan(40);
    });

    test('the sorted array does not contain the element { kind: "lemon", price: 50 }.', () => {
        expect(food.filterFoodPrice(foodArray, 12, 40)).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    test('price property of 2nd element should be more than min', () => {
        let filteredArray = food.filterFoodPrice(foodArray, 12, 40);
        expect(filteredArray[2].price).toBeGreaterThan(12);
    });

    test('check the length of the sorted array', () => {
        expect(food.filterFoodPrice(foodArray, 12, 40).length).toBeLessThanOrEqual(3);
    });
})
