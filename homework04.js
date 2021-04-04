function getChildrens(personArray) {
	// 20세이하의 사람들만 배열로 반환해봅시다
    for(let i = 0; i<personArray.length; i++){
        if(personArray[i]['age']<=20){
            console.log(personArray[i]);
        }
    }
}

var personArray = [
	{"name": "John Doe", "age": 10},
	{"name": "Jane Doe", "age": 29},
	{"name": "Fred Doe", "age": 13},
	{"name": "Layla Doe", "age": 8},
	{"name": "Chris Doe", "age": 22},
									];

console.log(getChildrens(personArray)); 
// [
// 	{"name": "John Doe", "age": 10},
// 	{"name": "Fred Doe", "age": 13},
//  {"name": "Layla Doe", "age": 8},
// ]