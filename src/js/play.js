import randomNoteGenerator from './libs/randomNoteGenerator';

function play() {

	document.querySelector('.modal__button').addEventListener('click', function(){
		this.parentNode.parentNode.classList.add('hidden');
	});

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

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeClassOnTransitionEnd));

	function compareNoteIsCorrect(randomNote, pressedNote, audio, key) {
		let audioFail = document.querySelector(`audio[data-key='x']`);
		if(randomNote == pressedNote) {
			playSound(audio);
			key.classList.add('playing');
			randomNoteGenerator();
		} else {
			playSound(audioFail);
			key.classList.add('fail');
		}
	}
}

export { play }
