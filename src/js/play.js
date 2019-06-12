import randomNotesArray from './libs/randomNotesArray';
import { stopTimer } from './timer';

function play(numberOfNotesGameLength) {

	document.addEventListener('keydown', whichKey);

	document.addEventListener('click', function (e) {
		let element = e.target;
		let key = element.dataset.key;
		let audio = document.querySelector(`audio[data-key='${key}']`);
		let displayedRandomNote = document.getElementById('targetNote').dataset.key;

		if ( e.target.classList.contains( 'key' ) ) {
			compareNoteIsCorrect(displayedRandomNote, key, audio, element);
		}
	}, false);

	function whichKey(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		let pressedNote = key.dataset.key;
		if(!audio) return;
		let displayedRandomNote = document.getElementById('targetNote').dataset.key;
		compareNoteIsCorrect(displayedRandomNote, pressedNote, audio, key);
	}

	function playSound(audio) {
		audio.currentTime = 0;
		audio.play();
	}

	function removeClassOnTransitionEnd(e) {
		if (e.propertyName !== 'background-color') return;
		this.classList.remove('playing','fail');
	}

	const randomNotesArrayObj = randomNotesArray(numberOfNotesGameLength);

	document.getElementById('targetNote').innerHTML = randomNotesArrayObj[0].key[0];
	document.getElementById('targetNote').dataset.key = randomNotesArrayObj[0].asc;

	let currentNoteIndex = 0;

	function displayNextNote() {

		currentNoteIndex++;

		if (currentNoteIndex == numberOfNotesGameLength) {
			console.log(`Good effort! You completed ${numberOfNotesGameLength} notes in ${stopTimer()}s`);
			return;
		}

		document.getElementById('targetNote').innerHTML = randomNotesArrayObj[currentNoteIndex].key[0];
		document.getElementById('targetNote').dataset.key = randomNotesArrayObj[currentNoteIndex].asc;
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeClassOnTransitionEnd));

	function compareNoteIsCorrect(displayedNote, pressedNote, audio, key) {
		let audioFail = document.querySelector(`audio[data-key='x']`);
		if(displayedNote == pressedNote) {
			playSound(audio);
			key.classList.add('playing');
			displayNextNote();
		} else {
			playSound(audioFail);
			key.classList.add('fail');
		}
	}
}

export { play }
