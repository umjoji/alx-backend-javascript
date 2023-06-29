let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  console.log(`${thisPromiseCount}: Started - Sync code started`);

  const pl = new Promise((resolve, reject) => {
    console.log(`${thisPromiseCount}: Promise started - Async code started`);
    // this example crestes the async code
    window.setTimeout(
      () => {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000,
    );
  });

  pl.then((val) => {
    console.log(`${val}: Promise fulfilled - Async code terminated`);
  }).catch((reason) => {
    console.log(`Handle rejected promise(${reason}) here.`);
  });

  console.log(`${thisPromiseCount}: Promise made - Sync code terminated`);
}

testPromise();
testPromise();
testPromise();
