Function.prototype.myBind = function (scope, ...args) {
  scope.fn = this;
  return function () {
    return scope.fn(...args);
  };
};

Function.prototype.myApply = function (scope, args) {
  scope.fn = this;
  return scope.fn(...args);
};

Function.prototype.myCall = function (scope, ...args) {
  scope.fn = this;
  return scope.fn(...args);
};

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

Array.prototype.myFilter = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

Array.prototype.myReduce = function (cb, intialValue) {
  var acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
