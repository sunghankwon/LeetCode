/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
    
  return function(...args) {
    const cacheKey = JSON.stringify(args);
    
    if (cache[cacheKey] === undefined) {
      cache[cacheKey] = fn(...args);
      return cache[cacheKey];
     } 
    
    return cache[cacheKey];   
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */