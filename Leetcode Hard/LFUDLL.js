class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToTail(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeFromHead() {
    const node = this.head.next;
    if (node === this.tail) {
      return null;
    }
    this.removeNode(node);
    return node;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.cache = new Map();
    this.freqMap = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.updateFrequency(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) return;
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.updateFrequency(node);
    } else {
      if (this.size >= this.capacity) {
        this.evictLFU();
      }
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.addToFrequencyMap(newNode);
      this.minFreq = 1;
      this.size++;
    }
  }

  updateFrequency(node) {
    const freq = node.freq;
    const freqList = this.freqMap.get(freq);
    freqList.removeNode(node);
    if (freqList.head.next === freqList.tail) {
      this.freqMap.delete(freq);
      if (freq === this.minFreq) {
        this.minFreq++;
      }
    }
    node.freq++;
    this.addToFrequencyMap(node);
  }

  addToFrequencyMap(node) {
    const freq = node.freq;
    if (!this.freqMap.has(freq)) {
      this.freqMap.set(freq, new DoublyLinkedList());
    }
    this.freqMap.get(freq).addToTail(node);
  }

  evictLFU() {
    const freqList = this.freqMap.get(this.minFreq);
    const nodeToRemove = freqList.removeFromHead();
    this.cache.delete(nodeToRemove.key);
    this.size--;
  }
}
