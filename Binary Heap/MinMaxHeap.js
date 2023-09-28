class BinaryHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  extract = () => {
    if (this.isEmpty()) return -1;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  };

  heapifyUp = () => {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.comparator(this.heap[currentIndex], this.heap[parentIndex]) < 0
      ) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else break;
    }
  };

  heapifyDown = () => {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let targetIndex = currentIndex;
      if (
        leftChildIndex < this.heap.length &&
        this.comparator(this.heap[leftChildIndex], this.heap[targetIndex]) < 0
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[targetIndex]) < 0
      ) {
        targetIndex = rightChildIndex;
      }
      if (targetIndex === currentIndex) break;
      [this.heap[currentIndex], this.heap[targetIndex]] = [
        this.heap[targetIndex],
        this.heap[currentIndex],
      ];
      currentIndex = targetIndex;
    }
  };

  isEmpty = () => this.heap.length === 0;
}

// Example usage:
// Create a max heap
const maxHeap = new BinaryHeap((a, b) => b - a);

maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(1);
console.log(maxHeap.heap);
console.log(maxHeap.extract()); // Output: 10

// Create a min heap
const minHeap = new BinaryHeap((a, b) => a - b);

minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(1);
console.log(minHeap.heap);
console.log(minHeap.extract()); // Output: 1
