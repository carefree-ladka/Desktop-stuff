function subset(arr = []) {
  const result = [];
  subsetHelper([], 0);
  function subsetHelper(currentSubset = [], start) {
    result.push([...currentSubset]);
    for (let i = start; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      subsetHelper(currentSubset, i + 1);
      currentSubset.pop();
    }
  }
  return result;
}

console.log(subset([1, 2, 3]));
