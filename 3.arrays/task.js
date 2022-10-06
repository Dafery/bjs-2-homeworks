function compareArrays(arr1, arr2) {
  let result = arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);  

  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(el => el > 0 && el % 3 === 0).map(el => el * 10);

  return resultArr; 
}
