console.log('hello world!');
// 콘솔에다가 저기 띄우겠다.

var age = 20;
console.log(age);
// age라는 이름이 적힌 바구니 생성

var name = "두현";
console.log(name);
// 세미콜론?
// 문자도 가능

var numberArray = [10, 20, 30];
console.log(numberArray);
console.log(numberArray[0]);

var personDict = {"name" : "두현", "age" : 19};
// 객체 -> key : value
console.log(personDict['age']);

// 조건문
if(personDict['age']>19){
    console.log('Here is your beer!')
}else{
    console.log('Get out!!')
};

// 반복문
var personArray = [
    {"name" : "두현", "age" : 19},
    {"name" : "승연", "age" : 22},
];

for(var i=0; i<personArray.length; i++){
    console.log(personArray[i])
}

//함수
function isValidAge(person){
    if(person["age"]>19){
        return true
    }else{
        return false
    };
}

for(var i=0; i<personArray.length; i++){
    console.log(personArray[i]['age'])
    if(isValidAge(personArray[i])){
        console.log('Here is your beer!');
    }else{
        console.log('Get out!')
    }
}

// let 과 var의 차이점
// var로 선언하였을때 
// 바깥에 선언한 var의 경우 안에서 var의 변수를 바꾸면 
// 바깥에 선언한 var에도 영향을 끼치지만

// let로 선언하였을때
// 바깥에 선언한 let의 경우 안에서 let의 변수를 바꾸면
// 바깥에 선언한 let에 영향을 끼치지 않는다.
// 새로 생성된 안쪽 부분을 새로운 (inner)scope이라고 부른다

// const는 여기에 변수 값을 지정하고 나면 끝날때까지 절대 변하지 않는 변수를 의미합니다.
// const상수라고 부른다

// var,let,const비교   var         let         const비교
// 재선언              O           X           X
// 재할당              O           O           X

