import { play } from './js/play';
import randomNoteGenerator from './js/libs/randomNoteGenerator';
import { userSettings } from './js/userSettings';
import timer from './js/timer';

import './scss/main.scss'

document.querySelector('.modal__button').addEventListener('click', function(){

	randomNoteGenerator();
	play();
	userSettings();
	timer(30);
	this.parentNode.parentNode.classList.add('hidden');
});

