const backspaceCompare = function(s, t) {
  const reduceString = (str) => {
    while (str.includes("#")) {
      const index = str.indexOf("#");
      str = str.substring(0, Math.max(0, index - 1)) + str.substring(index + 1);
    }
    return str;
  };
    
  return reduceString(s) === reduceString(t);
};
