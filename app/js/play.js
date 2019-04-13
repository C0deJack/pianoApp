// import notes from './notes';

// console.log(notes[55].key + notes[55].key);

window.onload = randomNoteGenerator();

document.addEventListener('keydown', whichKey);

// const keysArray= document.querySelectorAll(`.key`);

// keysArray.forEach(key  => key.addEventListener('click', function (e) {
// 	let element = e.target;
// 	let key = element.dataset.key;
// 	let audio = document.querySelector(`audio[data-key='${key}']`);
// 	let displayedRandomNote = document.getElementById('targetNote').dataset.key;
// 	compareNoteIsCorrect(displayedRandomNote, key, audio, element);
// }));

// ====== bubble fix =====
// document.addEventListener('click', function (event) {
// 	if ( event.target.classList.contains( 'accordion-link' ) ) {
// 		// Do something...
// 	}
// }, false)

document.addEventListener('click', function (e) {
	let element = e.target;
	let key = element.dataset.key;
	let audio = document.querySelector(`audio[data-key='${key}']`);
	let displayedRandomNote = document.getElementById('targetNote').dataset.key;

	// var str = "The best things in life are free";
	// var patt = new RegExp("e");
	// var res = patt.test(str)

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

function randomNoteGenerator() {
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

document.getElementById('checkbox2').addEventListener ('click', function (e) {
	const notes = [...(document.getElementsByClassName('note'))];
	if(e.target.checked) {
		notes.forEach(i => {
			i.classList.add('hidden');
		});
	} else {
		notes.forEach(i => {
			i.classList.remove('hidden');
		});
	}
});

document.getElementById('checkbox1').addEventListener ('click', function (e) {
	const letters = [...(document.getElementsByClassName('sound'))];
	if(e.target.checked) {
		letters.forEach(i => {
			i.classList.add('hidden');
		});
	} else {
		letters.forEach(i => {
			i.classList.remove('hidden');
		});
	}
});
