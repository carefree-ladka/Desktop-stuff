Function.prototype.myBind = function (scope, ...args) {
  scope.fn = this;
  return function () {
    return scope.fn(...args);
  };
};
