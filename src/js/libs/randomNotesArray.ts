var notes = require('./notes.json')

function randomNumbersArray(sizeOfArray:number, upperLimit:number, lowerLimit:number):Array<number> {

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

export default function randomNotesArray(arrayLength:number, noteRangeTop:number = 49, noteRangeBottom:number = 38):object[] {

	const randomNumbers = randomNumbersArray(arrayLength, noteRangeTop, noteRangeBottom);
	let randomNotesArray:Array<any> = [];

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
