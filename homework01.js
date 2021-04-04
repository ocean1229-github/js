var personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];

// 위에서 배운 4가지 for문을 이용해서 아래 문장을 출력해봅시다 (console.log)

// His/her name is John Doe. He/She is 20 years old.
// His/her name is Jane Doe. He/She is 19 years old.

// 일반적인 반보군
for (let i = 0; i< personArray.length; i++) {
    console.log(personArray[i]);
}

// for of 반복문
for(let person of personArray) {
    console.log(person)
}

// for in 반복문
for(let index in personArray) {
    console.log(personArray[index]);
}

// for each 반복문
personArray.forEach((person) => {
    console.log(person);
})