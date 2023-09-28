class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Auxiliary stack for minimum values
  }

  push = (value) => {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack.at(-1)) {
      this.minStack.push(value);
    }
  };

  pop = () => {
    if (this.isEmpty()) return null;
    const poppedValue = this.stack.pop();
    if (poppedValue === this.minStack.at(-1)) this.minStack.pop();
    return poppedValue;
  };

  top = () => {
    if (this.isEmpty()) return null;
    return this.stack.at(-1);
  };

  getMin = () => {
    if (this.minStack.length === 0) return null;
    return this.minStack.at(-1);
  };
  isEmpty = () => this.stack.length === 0;
}

// Usage example:
const minStack = new MinStack();

minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);

console.log(minStack.getMin()); // 1
console.log(minStack.pop()); // 1
console.log(minStack.top()); // 2
console.log(minStack.getMin()); // 2
