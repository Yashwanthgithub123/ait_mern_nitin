const trainer = {
	name : 'Nithin',
	tech1() { 
		console.log(this);
	}
};
trainer.tech1();
console.log(trainer)
let var1 = trainer.tech1 // copied the field of trainer which is a function into a local variable
var1() // call to the function trainer.tech1
//console.log(var1)