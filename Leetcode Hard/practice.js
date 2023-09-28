Function.prototype.myBind = function (scope, ...args) {
  scope.fn = this;
  return function () {
    return scope.fn(...args);
  };
};

function sayHello(age) {
  return this.name + age;
}

const fn = sayHello.myBind(
  {
    name: "Pawan",
  },
  15
);

console.log(fn()); //Pawan15
