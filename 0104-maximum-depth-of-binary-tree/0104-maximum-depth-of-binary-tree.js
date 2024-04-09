/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  let depth = 0; 
  let result = 0;
  
  function check(root, depth) {
    if (root === null) {
      return;
    }
    
    depth++; 
        
    if(depth > result) {
      result = depth; 
    }
        
    if (root.left !== null) {
      check(root.left, depth); 
    }
        
    if (root.right !== null) {
      check(root.right, depth); 
    }
  }
  
  check(root, depth);
  
  return result;
};