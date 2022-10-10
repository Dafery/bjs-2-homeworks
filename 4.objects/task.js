'use strict';

const Student1 = new Student('Oleg', 'male', 25);
const Student2 = new Student('Sofi', 'female', 27);
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) { 
    this.marks = [mark]; 
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined) { 
    this.marks = [...mark]; 
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
  const Average = this.marks.reduce((acc, el, idx) => {
    acc += el;

    if (idx === this.marks.length - 1) {
      return acc / this.marks.length;
    }

    return acc;
  }, 0);

  return Average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject, this.marks;
  this.excluded = reason;
}