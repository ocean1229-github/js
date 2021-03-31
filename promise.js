//콜백 지옥
//함수가 완료가 된후 다음 함수를 부르는 callback함수를 사용하는경우
// 조금만 과정이 깊어지게 되면 수도없이 많은 callback이 생긴다.
// 그걸 방지하기 위해서 promise를 사용
// promise를 사용하면 콜백지옥에서 코드를 펴서 깔끔하고 보기좋게 만들어줌

const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
  .then(messsage => {
    console.log(messsage);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });

// Promise is created!
// It's ready
// Done

const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
	// promise에서 resolve가 될경우
  .then(messsage => {
    console.log(messsage);
  })
	// promise에서 reject가 될경우
  .catch(error => {
    console.error(error);
  })

// Promise is created!
// It's ready