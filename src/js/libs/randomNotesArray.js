import { notes } from './notes';

function randomNumbersArray(sizeOfArray, upperLimit, lowerLimit) {

	function randomNumber() {
		return Math.round((Math.random() * (upperLimit-lowerLimit)) + lowerLimit);
	}

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

export default function randomNotesArray(arrayLength, noteRangeTop = 49, noteRangeBottom = 38) {

	const randomNumbers = randomNumbersArray(arrayLength, noteRangeTop, noteRangeBottom);
	let randomNotesArray = [];

	randomNumbers.map(number => {
		let note = notes[number];

		// Some notes can be a sharp or flat. This randomly picks just one.
		if (note.key.length > 1) {
			note.key = [note.key[Math.round(Math.random())]]
		};

		randomNotesArray.push(note);
	})
	return randomNotesArray;
}
