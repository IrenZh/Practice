const CalcCircle = require('../practice_11/calcCircle.js'); 
const calcCircle = new CalcCircle();

describe("Tests for calculating length and area of circle", () => {
    test('length of circle with radius 22 should be 138.2 (1 decimal place accuracy)', () => {
        expect(calcCircle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test('area of circle with radius 9 should be 254.47', () => {
        expect(calcCircle.getCircleArea(9)).toBeCloseTo(254.47);
    });

    test('length and ares of circle without arguments should return NaN', () => {
        expect(calcCircle.getCircleLength()).toBeNaN();
        expect(calcCircle.getCircleArea()).toBeNaN();
    });

})