class CalcCircle {
    getCircleLength(radius) {
        return 2 * Math.PI * radius;
    }

    getCircleArea(radius) {
        return Math.PI * radius ** 2;
     }
}

module.exports = CalcCircle;