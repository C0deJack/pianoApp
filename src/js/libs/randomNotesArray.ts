import { RandomNotes } from '../../types';

var notes = require('./notes.json')

const randomNumbersArray = (sizeOfArray:number, upperLimit:number, lowerLimit:number):Array<number> => {

	const randomNumber = () => Math.round((Math.random() * (upperLimit-lowerLimit)) + lowerLimit);

	var arr =[];
	arr.push(randomNumber());

	(function addNoneRepeatedNumber() {
		const previousNumber = arr[arr.length - 1];
		const newNumber = randomNumber();

		if (arr.length < sizeOfArray && (previousNumber != newNumber)) {
			arr.push(newNumber);
			addNoneRepeatedNumber()
		} else if (arr.length < sizeOfArray && (previousNumber == newNumber)) {
			addNoneRepeatedNumber()
		} else {
			return;
		}
	})()

	return arr;
}

const randomNotesArray = (arrayLength:number, noteRangeTop:number = 49, noteRangeBottom:number = 38):RandomNotes => {

	const randomNumbers = randomNumbersArray(arrayLength, noteRangeTop, noteRangeBottom);
	let randomNotesArray:RandomNotes = [];

	randomNumbers.map((number:number) => {
		let note = notes[number];

		// Some notes can be a sharp or flat. This randomly picks just one.
		if (note.key.length > 1) {
			note.key = [note.key[Math.round(Math.random())]]
		};

		randomNotesArray.push(note);
	})
	return randomNotesArray;
}

export default randomNotesArray;
