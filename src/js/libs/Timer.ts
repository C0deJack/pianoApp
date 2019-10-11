export type CountDirection = 'countUp' | 'countDown';

export default class Timer {
	count: number;
	countDirection: CountDirection;
	domElement: Element;
	timeInSeconds: number;
	
	MILLISECONDS_IN_A_SECOND: number = 1000;
	SECONDS_IN_A_MINUTE: number = 60;
	SECONDS_IN_AN_HOUR: number = 3600;
	
	constructor(domElement: Element, countDirection: CountDirection = 'countUp') {
		this.count;
		this.countDirection = countDirection;
		this.domElement = domElement;
		this.timeInSeconds = 0;
	}

	private format(timeInSeconds: number): string {
		const minutes = Math.floor(timeInSeconds / this.SECONDS_IN_A_MINUTE);
		const seconds = timeInSeconds % this.SECONDS_IN_A_MINUTE;

		return `${minutes}:` + `0${seconds}`.slice(-2);
	}

	private display(timeInSeconds: number): string {
		return this.domElement.textContent = this.format(timeInSeconds);
	}

	private startCountUp(durationInSeconds: number = this.SECONDS_IN_AN_HOUR): void {
		this.display(0);
		const timeStart = Date.now();

		this.count = window.setInterval(() => {
			this.timeInSeconds = Math.round((Date.now() - timeStart) / this.MILLISECONDS_IN_A_SECOND);
			
			if(this.timeInSeconds > durationInSeconds) {
				window.clearInterval(this.count);
				return;
			}

			this.display(this.timeInSeconds);
		}, 1000);
	}

	private startCountDown(durationInSeconds: number): void {
		this.display(durationInSeconds);
		const duration = Date.now() + durationInSeconds;

		this.count = window.setInterval(() => {
			this.timeInSeconds  = Math.round(duration - Date.now());
			
			if(this.timeInSeconds  < 0) {
				window.clearInterval(this.count);
				return;
			}

			this.display(this.timeInSeconds);
		}, 1000);
	}

	stop(): string {
		window.clearInterval(this.count);
		return this.display(this.timeInSeconds);
	}
	
	restart(): void {
		this.start(this.timeInSeconds);
	}

	reset(): void {
		window.clearInterval(this.count);
		this.timeInSeconds = 0;
	}

	start(durationInSeconds: number = this.SECONDS_IN_AN_HOUR): void {
		if (this.countDirection === 'countUp') {
			this.startCountUp(durationInSeconds);

		} else if (this.countDirection === 'countDown') {
			this.startCountDown(durationInSeconds)
		}
	}
}
