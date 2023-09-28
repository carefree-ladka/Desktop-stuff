let num = 16;
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    const value = num + "\t";
    if (i % 2 !== 0) {
      row = value + row;
    } else {
      row += value;
    }
    num--;
  }
  console.log(row);
}
