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

  const remove = (node) => {
    // empty list
    if (length === 0) return;

    // remove fist item
    if (node === head) {
      head = head.next;
      return;
    }

    // head >> node1 >> node2 >> null
    let currentNode = head;
    while (currentNode.next && currentNode.next != node) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
  };

  return {
    length: () => length,
    add: (element) => add(element),
    print: () => console.log(head),
    remove: (node) => remove(node),
  };
}

const list = LinkedList();
console.log(list.length());
console.log(list.add("Nicolas"));
list.add("Other");
console.log(list.length());
list.print();
let;
