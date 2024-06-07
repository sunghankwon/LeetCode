/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function(names, heights) {
  const obj = {};
  const result = [];
  
  for (let i = 0; i < names.length; i++) {
    obj[`${names[i]}${i}`] = heights[i];
  }
  
  const object = Object.fromEntries(
    Object.entries(obj).sort((a, b) => b[1] - a[1])
  );
  
  for (let human in object) {
    result.push(human.replace(/[0-9]/g, ""))
  }
  
  return result;
};
