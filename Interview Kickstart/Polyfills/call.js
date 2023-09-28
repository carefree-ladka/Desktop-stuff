if (!Function.prototype.call) {
  Function.prototype.myCall = function (scope, ...args) {
    scope.fn = this;
    return scope.fn(...args);
  };
}
