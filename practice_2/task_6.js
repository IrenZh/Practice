let firstSide = prompt('Please enter the first side of the triangles:', '');
let secondSide = prompt('Please enter the second side of the triangles:', '');
let thirdSide = prompt('Please enter the third side of the triangles:', '');

if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)){
    console.log('Incorrect data');
};

let area = (firstSide * secondSide * thirdSide) / 2;
area.toFixed(3);
console.log(area);

if (firstSide === secondSide && secondSide === thirdSide && firstSide === thirdSide){
    console.log('This triangle is rectangular')
};
