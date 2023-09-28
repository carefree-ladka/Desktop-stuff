const fullJustify = (words = [], maxWidth) => {
  let ans = [];
  let row = [];
  let rowLetters = 0;

  for (let word of words) {
    if (rowLetters + word.length + row.length > maxWidth) {
      for (let i = 0; i < maxWidth - rowLetters; i++)
        row[i % (row.length - 1 || 1)] += " ";
      ans.push(row.join(""));
      row = [];
      rowLetters = 0;
    }
    row.push(word);
    rowLetters += word.length;
  }
  return ans.concat(row.join(" ").padEnd(maxWidth));
};
