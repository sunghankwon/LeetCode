const mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  let newListHead = newList;
  
  while (l1 !== null && l2 !== null) {
    if (l1 !== null && (l2 === null || l1.val < l2.val)) {
      newList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l2 !== null && (l1 === null || l1.val >= l2.val)) {
      newList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    newList = newList.next;
  }
  
  if (l1 !== null) {
    newList.next = l1;
  } else if (l2 !== null) {
    newList.next = l2;
  }
  
  return newListHead.next;
};