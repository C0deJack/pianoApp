var notes = require('./notes.js');

console.log(notes[55].key + notes[55].key);

window.onload = randomNoteGenerator()

document.addEventListener('keydown', whichKey)

const keysArray= document.querySelectorAll(`.key`)

keysArray.forEach(key  => key.addEventListener('click', function (e) {
		let element = e.target
		let key = element.dataset.key
		let audio = document.querySelector(`audio[data-key="${key}"]`)
		let displayedRandomNote = document.getElementById("targetNote").dataset.key
		compareNoteIsCorrect(displayedRandomNote, key, audio, element)
	})
)

function whichKey(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	let pressedNote = key.dataset.key
	if(!audio) return
	let displayedRandomNote = document.getElementById("targetNote").dataset.key
	compareNoteIsCorrect(displayedRandomNote, pressedNote, audio, key)
}

function playSound(audio) {
	audio.currentTime = 0
	audio.play()
}

function removeClassOnTransitionEnd(e) {
	if (e.propertyName !== 'background-color') return
	this.classList.remove('playing','fail')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeClassOnTransitionEnd))

function randomNoteGenerator() {
	let possibleNotesArray = [
		['a', '72'], ['a#', '85'], ['b', '74'], ['c', '65'], ['c#', '87'],
		['d', '83'], ['d#', '69'], ['e', '68'], ['f', '70'], ['f#', '84'],
		['g', '71'], ['g#', '89']
	]
	let randomNote = possibleNotesArray[Math.floor(Math.random() * possibleNotesArray.length)]
	let lastRandomNote = document.getElementById("targetNote").dataset.key
	if (lastRandomNote == randomNote) {
		let randomNote = possibleNotesArray[Math.floor(Math.random() * possibleNotesArray.length)]
		return randomNote
	}
	document.getElementById("targetNote").innerHTML= randomNote[0]
	document.getElementById("targetNote").dataset.key = randomNote[1]
	return randomNote
}

function compareNoteIsCorrect(randomNote, pressedNote, audio, key) {
	let audioFail = document.querySelector(`audio[data-key="x"]`)
	if(randomNote == pressedNote) {
		playSound(audio)
		key.classList.add('playing')
		randomNoteGenerator()
	} else {
		playSound(audioFail)
		key.classList.add('fail')
	}
}
