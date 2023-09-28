function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    function handleCompletion(index, result) {
      results[index] = result;
      count++;
      if (count === promises.length) resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) =>
          handleCompletion(index, {
            status: "filfilled",
            val,
          })
        )
        .catch((err) => {
          handleCompletion(index, {
            status: "rejected",
            err,
          });
        });
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = new Promise((res, rej) => {
  setTimeout(() => res("Resolved"), 1000);
});
const p3 = Promise.reject("Err");

customPromiseAll([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/* 
  [
  { status: 'filfilled', val: 1 },
  { status: 'filfilled', val: 'Resolved' },
  { status: 'rejected', err: 'Err' }
]
  */
