let count: number;

const timerDisplay = document.querySelector('.timer_display')!;

export default function timer (): void {
	const timeStart = Date.now();

	displayTime(0);

	count = window.setInterval(() => { // check if this should be window
		const time = Math.round((Date.now() - timeStart) / 1000);
		
		if(time > 5999) {
			clearInterval (count);
			return;
		}

		displayTime(time);
		
	}, 1000);
}

let time: string;

function displayTime(secondsInput: number): void {
	const minutes = Math.floor(secondsInput / 60);
	const seconds = secondsInput % 60;
	time = `${minutes}:` + `0${seconds}`.slice(-2);
	timerDisplay.textContent = time;
}

export function stopTimer(): string {
	clearInterval (count);

	return time;
}
