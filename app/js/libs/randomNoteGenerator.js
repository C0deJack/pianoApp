export function randomNoteGenerator() {
	let possibleNotesArray = [
		['a', '72'], ['a#', '85'], ['b', '74'], ['c', '65'], ['c#', '87'],
		['d', '83'], ['d#', '69'], ['e', '68'], ['f', '70'], ['f#', '84'],
		['g', '71'], ['g#', '89']
	];
	let randomNote = possibleNotesArray[Math.floor(Math.random() * possibleNotesArray.length)];
	let lastRandomNote = document.getElementById('targetNote').dataset.key;
	if (lastRandomNote == randomNote) {
		let randomNote = possibleNotesArray[Math.floor(Math.random() * possibleNotesArray.length)];
		return randomNote;
	}
	document.getElementById('targetNote').innerHTML= randomNote[0];
	document.getElementById('targetNote').dataset.key = randomNote[1];
	return randomNote;
}
