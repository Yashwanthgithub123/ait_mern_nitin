const square1 = function(param) { // ES5 syntax
	return param * param;
}

const square2 = (param) => {
	return param * param;
}

const square3 = param => param * param;

console.log('Square of 10 = ',square1(10))
console.log('Square of 20 = ',square2(20))
console.log(`Square of 30 = ${square3(30)}`)