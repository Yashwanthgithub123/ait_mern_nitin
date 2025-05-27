const trainer = {
	name : 'Nithin',
	techTrainer() {
		console.log(this);
	}
};

trainer[undefined] = 'hello' // we added a new field named undefined to the trainer object and its value is 'hello'
console.log(trainer.undefined)
console.log(trainer)