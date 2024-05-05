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
const countNodes = function(root) {
  let count = 0;
  
  function nodeCount(node) {
    if (node === null) {
      return;
    }
    count++;
    nodeCount(node.left);
    nodeCount(node.right);
  }
  nodeCount(root);
  
  return count;
};