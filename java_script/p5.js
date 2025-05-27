const trainer = {
	name : 'Nithin',
	tech1() {  // ES6 Syntax to define a Method
 		console.log("AIML JavaFS Trainer")
        return 100
	},
	tech2() {  // ES6 Syntax to define a Method
		console.log("C++ MERN Trainer")
        return 'python'
	}
}

function func(param) {
	trainer.tech1(); // Call to the method tech1()
	trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified
	num = trainer[param](); // calling the method via the param
    console.log('Num = ', num)
}
func('tech1');
