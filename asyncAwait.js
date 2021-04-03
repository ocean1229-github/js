async function f() {

  //Promise(여기) 의미하는 바를 알아야함
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });
  
    console.log('before await');

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  
    console.log('after await');

    console.log(result); // "완료!"
  }
  
  f();