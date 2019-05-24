import { play } from './js/play';
import { userSettings } from './js/userSettings';
import timer from './js/timer';

import './scss/main.scss'

document.querySelector('.modal__button').addEventListener('click', function(){
	const e = document.querySelector('.modal__box-select')
	const gameLength = e.options[e.selectedIndex].value;;

	play(gameLength);
	userSettings();
	timer();
	this.parentNode.parentNode.classList.add('hidden');
});
