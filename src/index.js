import { play } from './js/play';
import { userSettings } from './js/userSettings';
import timer from './js/timer';

import './scss/main.scss'

document.querySelector('.modal__button').addEventListener('click', function(){
	const e = document.querySelector('.modal__box-select')
	const numberOfNotesGameLength = e.options[e.selectedIndex].value;;
	console.log(numberOfNotesGameLength);

	play(numberOfNotesGameLength);
	userSettings();
	timer(30);
	this.parentNode.parentNode.classList.add('hidden');
});

