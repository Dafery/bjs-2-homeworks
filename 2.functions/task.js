// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
    
    sum += arr[i];  
  }
  
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];    
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    
    if ( funcResult > max) {
      max = funcResult;
    }
  } 
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    } 
  }
  
  return Math.abs(max - min);
}
