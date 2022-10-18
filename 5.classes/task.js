"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(numState) {
    if (numState < 0) {
      this._state = 0;
    } else if (numState > 100) {
      this._state = 100;
    } else {
      this._state = numState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((el) => el[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIdx = this.books.findIndex((el) => el.name === bookName);
    return bookIdx > -1 ? this.books.splice(bookIdx, 1)[0] : null;
  }
}

// Создайте библиотеку;
const redLibrary = new Library("Красная библиотека");
// Добавьте в библиотеку несколько печатных изданий различных типов;
redLibrary.addBook(new DetectiveBook("Артур Конан Дойл", "Собака Баскервилей", 2017, 256));
redLibrary.addBook(new FantasticBook("Льюис Кэрролл", "Алиса в Стране чудес", 1919, 60));
// Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
console.log(redLibrary.findBookBy("releaseDate", 1919));
// Выдайте любую книгу;
const giveBook = redLibrary.giveBookByName("Алиса в Стране чудес");
console.log("выдали книгу", giveBook);
// Испортите выданную книгу;
giveBook.state = 30;
console.log("испортили книгу", giveBook.state);
// Почините выданную книгу;
giveBook.fix();
console.log("починили книгу", giveBook.state);
// Попытайтесь добавить починенную книгу обратно в библиотеку.
redLibrary.addBook(giveBook);
console.log(redLibrary);

// Задача №3. Журнал успеваемости

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject(subjectName) {
    if (this[subjectName]) {
      return `Ошибка! Предмет ${subjectName} уже существует.`;
    } else {
      this[subjectName] = [];
    }

    if (!this.subjects) {
      this.subjects = [subjectName];
    } else {
      this.subjects.push(subjectName);
    }
  }

  addMark(mark, subjectName) {
    if (mark < 1 || mark > 5) {
      return "Ошибка! Оценка должна быть числом от 1 до 5.";
    } else if (!this[subjectName]) {
      this[subjectName] = [mark];

      if (!this.subjects) {
        this.subjects = [subjectName];
      } else {
        this.subjects.push(subjectName);
      }
    } else {
      this[subjectName].push(mark);
    }

    if (this[subjectName] && !this.marks) {
      this.marks = [mark];
    } else if (this[subjectName]) {
      this.marks.push(mark);
    }
  }

  addMarks(...mark) {
    if (!this.marks) {
      this.marks = [...mark];
    } else {
      this.marks.push(...mark);
    }
  }

  getAverageBySubject(subjectName) {
    if (!this[subjectName]) {
      return `Ошибка! Предмета ${subjectName} не существует.`;
    }

    const Average = this[subjectName].reduce((acc, el, idx) => {
      acc += el;

      if (idx === this[subjectName].length - 1) {
        return acc / this[subjectName].length;
      }

      return acc;
    }, 0);

    console.log(`Средний балл по предмету ${subjectName}: ${Average}`);
    return +Average.toFixed(2);
  }

  getAverage() {
    if (!this.marks) {
      return "Ошибка! Оценок еще нет!";
    }

    const Average = this.marks.reduce((acc, el, idx) => {
      acc += el;

      if (idx === this.marks.length - 1) {
        return acc / this.marks.length;
      }

      return acc;
    }, 0);

    console.log(`Средний балл по всем предметам: ${Average}`);
    return +Average.toFixed(2);
  }

  exclude(reason) {
    for (let value of this.subjects) {
      for (let key in this) {
        if (key === value) {
          delete this[key];
        }
      }
    }

    delete this.subjects, delete this.marks;
    this.excluded = reason;

    return `Студент ${this.name} исключён(а) по причине: ${reason}`;
  }
}
