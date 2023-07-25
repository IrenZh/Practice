class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
         return Object.getPrototypeOf(this).constructor.name;
    }    
}

class Triangle extends GeometricFigure {
    constructor (base, height){
        super();
        this.base = base;
        this.height = height;
    }
    getArea(){
        return (this.base * this.height / 2);
    }
}

class Square extends GeometricFigure {
    constructor (side){
        super();
        this.side = side;
    }
    getArea(){
        return (this.side * this.side);
    }
}

class Circle extends GeometricFigure{
    constructor (radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }
}

function handleFigures(figures) {
    let totalArea = figures.reduce((acc, figure) => {
        if (figure instanceof GeometricFigure) {
            let area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return acc + area;
        } else{
            throw new Error('Invalid figure type');
        }
    }, 0);
    return totalArea;
} 

const figures = [new Triangle(2, 3), new Square(5), new Circle(10)];
console.log(handleFigures(figures));
