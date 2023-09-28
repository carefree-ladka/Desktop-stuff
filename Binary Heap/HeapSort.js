const heapSort = (arr, comparator) => {
  const heapifyDown = (index, length) => {
    let currentIndex = index;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let targetIndex = currentIndex;
      if (
        leftChildIndex < length &&
        comparator(arr[leftChildIndex], arr[targetIndex]) < 0
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        comparator(arr[rightChildIndex], arr[targetIndex]) < 0
      ) {
        targetIndex = rightChildIndex;
      }
      if (targetIndex === currentIndex) break;
      [arr[currentIndex], arr[targetIndex]] = [
        arr[targetIndex],
        arr[currentIndex],
      ];
      currentIndex = targetIndex;
    }
  };

  const length = arr.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapifyDown(i, length);
  }
  for (let i = length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(0, i);
  }
  return arr;
};

// Example usage:
const arr = [5, 3, 10, 1];
console.log(heapSort(arr, (a, b) => a - b)); // Output: [1, 3, 5, 10]
console.log(heapSort(arr, (a, b) => b - a)); // Output: [10, 5, 3, 1]
