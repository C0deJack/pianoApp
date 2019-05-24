let count;
const timerDisplay = document.querySelector('.timer_display');

export default function timer () {
	const timeStart = Date.now();

	displayTime(0);

	count = setInterval(() => {
		const time = Math.round((Date.now() - timeStart) / 1000);
		
		if(time > 5999) {
			clearInterval (count);
			return;
		}

		displayTime(time);
		
	}, 1000);
}

let time;

function displayTime(secondsInput) {
	const minutes = Math.floor(secondsInput / 60);
	const seconds = secondsInput % 60;
	time = `${minutes}:` + `0${seconds}`.slice(-2);
	timerDisplay.textContent = time;
}

export function stopTimer() {
	clearInterval (count);

	return time;
}
