let data;

function example() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = true;
      if (flag) {
        resolve([1, 2, 3, 4, 5]);
      } else {
        reject("Error!");
      }
    }, 2500);
  });
}

example()
  .then((result) => {
    data = result;
    data.forEach((element) => {
      console.log(element);
    });
  })
  .catch((error) => {
    console.log(error);
  });

new Promise((resolve, reject) => {
  const isOk = true;
  if (isOk) {
    resolve("Dohvaceni podaci");
  } else {
    reject("Puklo dohvacanje");
  }
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
