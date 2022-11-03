function cachingDecoratorNew(func) {
  const cache = {};
    
  return function(...args) {
    const hash = args.join(',');

    if (hash in cache) {
      return `Из кэша: ${cache[hash]}`;
    }

    const result = func(...args);
    cache[hash] = result;    
    
    if (Object.keys(cache).length > 5) {
      delete cache[Object.keys(cache)[0]];
    }
   
    return `Вычисляем: ${result}`;
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
 
  function wrapper(...args) {
    wrapper.allCount++;    
    clearTimeout(timeoutId);
    
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }
    
    timeoutId = setTimeout(() => {      
      wrapper.count++;
      func(...args);
    }, delay);
  }
  
  return wrapper;
}