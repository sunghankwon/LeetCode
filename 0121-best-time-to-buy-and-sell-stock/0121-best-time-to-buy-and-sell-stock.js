/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let max;
  let min;
  let revenue;
  
  while (prices.length > 0) {
    const last = prices.pop();
    if (!max) {
      max = last;
    }
    
    if (last > prices[prices.length - 1] && last > max) {
      max = last
      min = last
    }
    
    if (!min || min > last) {
      min = last;
    }
  
    if (!revenue || revenue < max - min) {
      revenue = max - min;
    }
  }
    
  return revenue
};