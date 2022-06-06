function LinkedList() {
  let head = null;
  let length = 0;
  const Node = (value) => {
    return {
      value,
      next: null,
    };
  };

  const add = (element) => {
    if (!head) {
      head = Node(element);
      length++;
      return head;
    }
    let node = head;
    while (node.next) {
      node = node.next;
    }
    node.next = Node(element);
    length++;
    return node.next;
  };

  return {
    length: () => length,
    add: (element) => add(element),
    print: () => console.log(head),
  };
}

const list = LinkedList();
console.log(list.length());
console.log(list.add("Nicolas"));
list.add("Other");
console.log(list.length());
list.print();
