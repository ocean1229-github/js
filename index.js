console.log('hello world!');
// 콘솔에다가 저기 띄우겠다.

var age = 20;
console.log(age);
// age라는 이름이 적힌 바구니 생성

var name = "두현";
console.log(name);
// 세미콜론?
// 문자도 가능

var personArray = [10, 20, 30];
console.log(personArray);
console.log(personArray[0]);

var personDict = {"name" : "두현", "age" : 19};
// 객체 -> key : value
console.log(personDict['age']);

// 조건문
if(personDict['age']>19){
    console.log('Here is your beer!')
}else{
    console.log('Get out!!')
}