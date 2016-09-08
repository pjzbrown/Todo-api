// var person = {
// 	name: 'Andrew',
// 	age:21
// }

// function updatePerson (obj) {
// 	// obj = {
// 	// 	name: 'Andrew',
// 	// 	age:24
// 	// }
// 	obj.age=24;
// }

// updatePerson(person);
// console.log(person);

var grades = [15, 37];

function updateGrades(arr) {
	arr.push(9);
}

function dontUpdateGrades(arr) {
	arr = [15, 37];
	arr.push(39);

	debugger;

}

console.log('---START POSITION');
console.log(grades);

console.log('---UPDATE GRADES');
updateGrades(grades);
console.log(grades);

console.log('---DON\'T UPDATE GRADES');
dontUpdateGrades(grades);
console.log(grades);