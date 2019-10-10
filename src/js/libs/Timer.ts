
export default class Timer {
	domElement: Element;
	count: any;
	timeInSeconds: number;
	pausedTimeInSeconds: number;
	wasCountingUpORDown: 'up' | 'down';

	constructor(domElement: Element) {
		this.domElement = domElement;
		this.count = null;
		this.timeInSeconds = 0;
	}

	private format(timeInSeconds: number): string {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;

		return `${minutes}:` + `0${seconds}`.slice(-2);
	}

	private display(timeInSeconds: number, domElement:Element): string {
		return domElement.textContent = this.format(timeInSeconds);
	}

	stop(): string {
		window.clearInterval(this.count);
		return this.display(this.timeInSeconds, this.domElement);
	}

	pause(): void {
		this.stop();
	}

	restart(): void {
		if(this.wasCountingUpORDown === 'up') {
			this.startCountUp(this.timeInSeconds);

		} else if (this.wasCountingUpORDown === 'down') {
			this.startCountDown(this.timeInSeconds);
		}
	}

	startCountUp(durationInSeconds: number = 3600): void {
		this.display(0, this.domElement);
		this.wasCountingUpORDown = 'up';
		const timeStart = Date.now();

		this.count = window.setInterval(() => {
			this.timeInSeconds = Math.round((Date.now() - timeStart) / 1000);
			
			if(this.timeInSeconds  > durationInSeconds) {
				window.clearInterval(this.count);
				return;
			}

			this.display(this.timeInSeconds , this.domElement);
		}, 1000);
	}

	startCountDown(durationInSeconds: number): void {
		this.display(durationInSeconds , this.domElement);
		this.wasCountingUpORDown = 'down';
		const duration = Date.now() + durationInSeconds * 1000;

		this.count = window.setInterval(() => {
			this.timeInSeconds  = Math.round((duration - Date.now()) / 1000);
			
			if(this.timeInSeconds  < 0) {
				window.clearInterval(this.count);
				return;
			}

			this.display(this.timeInSeconds , this.domElement);
		}, 1000);
	}
}
