/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = function(...args) {
  const array = [...args];
  
  return array.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */