Array.prototype.myFilter = function (cb) {
  const tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};
