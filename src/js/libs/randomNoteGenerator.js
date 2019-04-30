import { notes } from './notes';

export default function randomNoteGenerator(noteRangeBottom = 38, noteRangeTop = 49) {
	var randomKeyFnc = () => notes[Math.floor(((noteRangeTop - noteRangeBottom) * Math.random()) + noteRangeBottom)];
	
	var randomKeyObj = randomKeyFnc();

	let lastRandomNote = document.getElementById('targetNote').dataset.key;

	if (lastRandomNote === randomKeyObj.asc) {
		var randomKeyObj = randomKeyFnc();
	}

	document.getElementById('targetNote').innerHTML= randomKeyObj.key;
	document.getElementById('targetNote').dataset.key = randomKeyObj.asc;

	return [randomKeyObj.key, randomKeyObj.asc];
}
