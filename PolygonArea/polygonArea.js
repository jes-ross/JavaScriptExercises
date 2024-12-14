
class Triangle {
    _base
    _height
    constructor (base, height){
        this._base = base
        this._height = height
    }
    calcArea(base, height) {
        return (base * height) / 2
    }
    
}

class Rectangle {
    _length
    _width
    constructor (length, width){
        this._length = length
        this._width = width
    }
    calcArea (length, width){
        return length * width
    }
}

class Square{
    _side
    constructor (side){
        this._side = side
    }
    calcArea(side){
        return side * side
    }
}



let triangle = new Triangle
let square = new Square
let rectangle = new Rectangle

console.log(triangle.calcArea(10.0, 5.0))
console.log(square.calcArea(2.5))
console.log(rectangle.calcArea(12.5, 45.3))
