/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let count = 0;
  let listArray = [];
  
  while(head !== null) {
    count++;
    let newList = head

    listArray.push(newList);
      
    head = head.next;
  }
  
  const middle = Math.ceil(count / 2);
  
  return count % 2 === 0 ? listArray[middle] : listArray[middle - 1]
};

