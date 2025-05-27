const student = {
	name : 'mani',
	techStudent() {
		console.log(this);
	}
};

const trainer = {
	name : 'Nithin',
	techTrainer() {
		console.log(this);
	}
};

const walk1 = trainer.techTrainer.bind(student); // We are binding the student object into the techTrainer method of trainer object.
walk1();

const walk2 = trainer.techTrainer; // We are binding the global object into the techTrainer method of the trainer object
walk2();

const walk3 = trainer.techTrainer.bind(trainer); // We are binding the trainer object into the the method techTrainer of the trainer object
walk3(); 