//LRU Cache with HashMap + DoublyLinkedList

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  moveToFront = (node) => {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  };

  removeNode = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };

  getTail = () => this.tail.prev;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.list = new DoublyLinkedList();
  }

  get = (key) => {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.list.removeNode(node);
    this.list.moveToFront(node);
    return node.value;
  };
  put = (key, value) => {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.list.removeNode(node);
      this.list.moveToFront(node);
      return;
    } else {
      if (this.cache.size >= this.capacity) {
        const tailNode = this.list.getTail();
        this.list.removeNode(tailNode);
        this.cache.delete(tailNode.key);
      }
      const newNode = new Node(key, value);
      this.list.moveToFront(newNode);
      this.cache.set(key, newNode);
    }
  };
}

const lru = new LRUCache(3);
lru.put(1, "banana");
lru.put(2, "apple");
lru.put(3, "car");
console.log(lru.get(1));
lru.put(4, "audi");
console.log(lru.get(2));
