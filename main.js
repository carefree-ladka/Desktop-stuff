var insert = function (intervals, newInterval) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  return intervals;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
