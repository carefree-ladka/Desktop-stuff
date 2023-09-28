function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => resolve(val))
        .catch((err) => reject(err));
    });
  });
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => res("First"), 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => res("Second"), 200);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => rej("Third"), 100);
});

customPromiseRace([p1, p2, p3])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
