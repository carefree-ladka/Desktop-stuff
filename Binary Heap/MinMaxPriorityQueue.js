class PriorityQueue {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  enqueue = (item, priority) => {
    const node = { item, priority };
    this.heap.push(node);
    this.heapifyUp();
  };

  dequeue = () => {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop().item;
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root.item;
  };

  isEmpty = () => this.heap.length === 0;

  heapifyUp = () => {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.comparator(
          this.heap[currentIndex].priority,
          this.heap[parentIndex].priority
        ) < 0
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
        this.comparator(
          this.heap[leftChildIndex].priority,
          this.heap[targetIndex].priority
        ) < 0
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.comparator(
          this.heap[rightChildIndex].priority,
          this.heap[targetIndex].priority
        ) < 0
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
}

// Example usage:
// Create a max priority queue
const maxPriorityQueue = new PriorityQueue((a, b) => b - a);

maxPriorityQueue.enqueue("Gas", 3);
maxPriorityQueue.enqueue("Water", 2);
maxPriorityQueue.enqueue("Oxygen", 1);
// console.log(maxPriorityQueue.heap);
console.log(maxPriorityQueue.dequeue()); // Output: Gas

// Create a min priority queue
const minPriorityQueue = new PriorityQueue((a, b) => a - b);

minPriorityQueue.enqueue("Gas", 3);
minPriorityQueue.enqueue("Water", 2);
minPriorityQueue.enqueue("Oxygen", 1);
// console.log(minPriorityQueue.heap);
console.log(minPriorityQueue.dequeue()); // Output: Oxygen
