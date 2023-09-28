class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue = (value) => {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  };

  dequeue = () => {
    if (this.isEmpty()) return -1;
    const dequeuedEl = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.size--;
    return dequeuedEl;
  };

  isEmpty = () => this.size === 0;

  size = () => this.size;

  *[Symbol.iterator]() {
    let curr = this.front;
    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

// console.log(queue.size);

for (const item of queue) {
  console.log(item);
}
