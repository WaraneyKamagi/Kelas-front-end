// Ubahlah syntax ES5 berikut ke dalam ES6
// Waraney Kamagi

//1. Soal 1
const calculateAge = birthYear => 2019 - birthYear;

function yearUntilRetirement(object){
	let age = calculateAge(object.year);
	const retirement = 60 - age;

	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years.`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}

const person1 = { firstName: "John", year: 1990 };
const person2 = { firstName: "Waraney", year: 1948 };
yearUntilRetirement(person1);
yearUntilRetirement(person2);

// 2. Soal 2 
const addNumber = (a, b, c, d, e, f, g) => {
 	let numbers = [a, b, c, d, e, f, g];
 	let sum = 0;
    //Change to map function
    numbers.map(number => sum += number);
    return sum;
 }

    console.log(addNumber(1,2,3,4,5,6,7));

// 3. Soal 3 dengan Destructuring
const phi = 3.14;
let power = 2;
let radius = 0;

let calculateArea = obj => {
  return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
let area21 = calculateArea({radius: radius, power: power });

radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
// 4. Soal 4 dengan Destructuring
const makeAjaxRequest = (url, method = "GET") => {
    console.log(`Making Ajax request to ${url} with method ${method}`);
};
makeAjaxRequest("www.google.com");