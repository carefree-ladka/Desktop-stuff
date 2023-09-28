class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push = (value) => {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  };

  pop = () => {
    if (this.isEmpty()) return -1;
    let poppedEl = this.head;
    this.head = this.head.next;
    this.size--;
    return poppedEl;
  };

  isEmpty = () => this.size === 0;

  size = () => this.size;

  *[Symbol.iterator]() {
    let curr = this.head;
    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

// console.log(st.head);

for (const item of st) {
    console.log(item);
}
