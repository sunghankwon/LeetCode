/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let max = prices[prices.length - 1];
  let min = prices[prices.length - 1];
  let revenue = max - min;
  
  while (prices.length > 0) {
    const last = prices.pop();    
    if (last > prices[prices.length - 1] && last > max) {
      max = last
      min = last
    }
    
    if (min > last) {
      min = last;
    }
  
    if (revenue < max - min) {
      revenue = max - min;
    }
  }
    
  return revenue
};