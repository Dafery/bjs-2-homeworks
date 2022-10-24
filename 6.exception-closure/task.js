'use strict';

// Задача 1

function parseCount(value) {
  const parsedValue = Number.parseInt(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error('Невалидное значение');
  }

  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача 2

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.a = sideOne,
    this.b = sideTwo,
    this.c = sideThree;

    if (sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(sideOne, sideTwo, sideThree) {  
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch (error) {
    return {
      getPerimeter: () => 'Ошибка! Треугольник не существует',
      getArea: () => 'Ошибка! Треугольник не существует',
    }
  }
}
