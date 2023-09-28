Function.prototype.myApply = function (scope, args) {
  scope.fn = this;
  return scope.fn(...args);
};
