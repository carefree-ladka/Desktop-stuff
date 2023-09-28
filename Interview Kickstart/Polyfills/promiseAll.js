if (!Promise.all) {
  Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
      const results = [];
      if (promises.length === 0) {
        resolve(results);
        return;
      }
      function handleCompletion(value) {
        results.push(value);
        if (results.length === promises.length) {
          resolve(results);
        }
      }
      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then((val) => handleCompletion(val))
          .catch((err) => reject(err));
      });
    });
  };
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(6);
const p4 = 10;

Promise.all([p1, p2, p3, p4])
  .then((res) => console.log(res)) //[ 1, 2, 6, 10 ]
  .catch((err) => console.log(err));

const failure = Promise.reject("I hurt my knee :(");

Promise.all([failure])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //I hurt my knee :(
