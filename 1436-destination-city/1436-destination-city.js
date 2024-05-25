/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const map = new Map();
  let destination = paths[[0]][0];

  for (let path of paths) {
    map.set(path[0], path[1]);
  }
  
  while (map.has(destination)) {
    destination = map.get(destination);
  }
  
  return destination;
};