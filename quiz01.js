function getAgeAverage(personArray) {
	var average = 0;

	// 연령 평균을 구해주는 함수를 만들어 봅시다.
	// 평균은 총합을 갯수로 나눠주면 됩니다.
// teacher answer
// var sum = 0;
// for (var i =0; i<personArray.length; i++){
//     var person = personArray[i];
//     sum = sum + person['age']
// } sum 변수를 만들어 주는 것이 좀 더 문제 풀기 용이하다

// average = sum / personArray.length

return average

// my answer
    for(var i=0; i<personArray.length; i++){
        average = average + personArray[i]['age'];
    }
	return average / personArray.length;
}


var personArray = [
										{"name": "John Doe", "age": 20},
										{"name": "Jane Doe", "age": 19},
										{"name": "Fred Doe", "age": 32},
										{"name": "Chris Doe", "age": 45},
										{"name": "Layla Doe", "age": 37},
									];

console.log(getAgeAverage(personArray)); // 30.6