function customPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => resolve(val))
        .catch((err) => {
          errors.push(err);
          if (errors.length === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => res("First"), 1000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => res("Second"), 200);
// });
// const p3 = new Promise((res, rej) => {
//   setTimeout(() => rej("Third"), 3000);
// });

const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

customPromiseAny([failure]).then(
  (val) => console.log(val),
  (err) => console.log(err)
); //Second
// .catch((err) => console.log(err));
