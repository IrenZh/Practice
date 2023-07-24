let width;
let height;
let area;

function calcRectangleArea(width, height){
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Parameters must be numbers');
    }
    area = width*height/2;
    return area;
}

try {
    width = 8;
    height = 4;
  
    area = calcRectangleArea(width, height);
    console.log('Rectangle area:', area);
  } catch (error) {
    console.error('Error:', error.message);
  }
