"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const D = b**2 - 4 * a * c;
  
  if ( D === 0 ) {
    arr.push(-b / (2 * a));
  } else if ( D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2*a));
    arr.push((-b - Math.sqrt(D)) / (2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if ( Number.isNaN(parseInt(percent)) ) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if ( Number.isNaN(parseInt(contribution)) ) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if ( Number.isNaN(parseInt(amount)) ) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } else if ( Number.isNaN(parseInt(date.getTime())) ) {
    return (`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
  }
  
  let creditAmount = amount - contribution;
  let nowDate = Date.now();
  let totalMonths = Math.floor((date - nowDate) / 1000 / 60 / 60 / 24 / 30);
  let amountMonth = creditAmount * (percent / 12  / 100 + (percent / 12 / 100 / (((1 + percent / 12/ 100)**totalMonths) - 1)));
  let totalAmount = +(amountMonth * totalMonths).toFixed(2);

  console.log(`Ввод: ${percent}, ${contribution}, ${amount}, ${totalMonths}. Вывод: ${totalAmount}`);

  return totalAmount;
}
