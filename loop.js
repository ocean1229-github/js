
// 기존의 반복문
const students = ["두현", "원준", "민형", "진훈"]

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// for of 반복문
for (let student of students){
    console.log(student);
}

// student에서 students의 원소가 순서대로 하나씩 찍힌다 
// 반복이 끝나면 다음 원소가 찍히고 이런식으로 되는 함수

// for in
for(let index in students){
    // console.log(index)
    console.log(students[index])
}

// for of는 배열의 원소 하나씩을 꺼내줌
// for in은 배열의 index의 순서를 return해줌

// for each
students.forEach((student) => {
    console.log(student)
})

// callback함수가 실행됨 
