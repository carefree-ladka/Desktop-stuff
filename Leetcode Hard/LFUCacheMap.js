class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
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
    freqList.delete(node);
    if (freqList.size === 0) {
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
      this.freqMap.set(freq, new Set());
    }
    this.freqMap.get(freq).add(node);
  }

  evictLFU() {
    const freqList = this.freqMap.get(this.minFreq);
    const nodeToRemove = freqList.values().next().value;
    this.cache.delete(nodeToRemove.key);
    freqList.delete(nodeToRemove);
    if (freqList.size === 0) {
      this.freqMap.delete(this.minFreq);
    }
    this.size--;
  }
}
