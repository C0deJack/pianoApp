import { play } from './js/play';
import { userSettings } from './js/userSettings';

import './scss/main.scss'

document.querySelector('.modal__button').addEventListener('click', function(){
	const e = document.querySelector('.modal__box-select')
	const gameLength = e.options[e.selectedIndex].value;;

	play(gameLength);
	userSettings();
	this.parentNode.parentNode.classList.add('hidden');
});
