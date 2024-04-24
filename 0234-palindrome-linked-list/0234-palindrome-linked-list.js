/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  const list = [];
  
  while(head !== null) {
    list.push(head.val);
    head = head.next;
  }
  
  let right = list.length -1;
  let left = 0;
  
  while (left < right) {
    if (list[left] === list[right]) {
      right--;
      left++;
    } else {
      return false;
    }
  }
  
  return true;
};