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
 * @return {TreeNode}
 */
const invertTree = function(root) {
  function treeReverse(node) {
    if (!node) {
      return;
    }
    
    const leftNode = node.left;
    const rightNode = node.right;
    
    node.left = rightNode;
    node.right = leftNode;
    
    treeReverse(node.left);
    treeReverse(node.right);
      
  }
  
  treeReverse(root);

  return root;
};
