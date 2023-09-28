## Currying Questions

# Case 1: add(1)(2)(3)

```js
const sum = (a) => (b) => (c) => a + b + c;
```

# Case 2: add(1)(2)(3)…(n)()

```js
const sum = (a) => (b) => b ? sum(a + b) : a;
```

# Case 3: sum(1,2)(3,4)

```js
const sum = (a, b) => (c, d) => a + b + c + d;
```

# Case 4: add(1,2..n)(5,6…n)…(n)()

```js
const sum = (...args) => {
  let a = args.reduce((a, b) => a + b, 0);
  return (...args) => {
    let b = args.reduce((a, b) => a + b, 0);
    if (b) return sum(a + b);
    return a;
  };
};
```
