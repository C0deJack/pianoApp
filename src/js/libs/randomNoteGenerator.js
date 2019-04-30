import { notes } from './notes';

export default function randomNoteGenerator(noteRangeBottom = 38, noteRangeTop = 49) {
	var randomKeyFnc = () => notes[Math.floor(((noteRangeTop - noteRangeBottom) * Math.random()) + noteRangeBottom)];
	
	var randomKeyObj = randomKeyFnc();

	let lastRandomNote = document.getElementById('targetNote').dataset.key;

	if (lastRandomNote === randomKeyObj.asc) {
		var randomKeyObj = randomKeyFnc();
	}

	if (randomKeyObj.key.length > 1) {
		var sharpOrFlatNote = randomKeyObj.key[Math.round(Math.random())];
	} else if (randomKeyObj.key.length === 1) {
		var sharpOrFlatNote = randomKeyObj.key;
	}

	document.getElementById('targetNote').innerHTML = sharpOrFlatNote;
	document.getElementById('targetNote').dataset.key = randomKeyObj.asc;
}
