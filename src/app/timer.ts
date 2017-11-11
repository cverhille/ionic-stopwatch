export class Timer {

	private minutes: number = 0;
	private secondes: number = 0;
	private totalSecondes: number = 0;
	private timer;

	start() {
		this.timer = setInterval(() => {
			this.minutes = Math.floor(++this.totalSecondes / 60);
			this.secondes = this.totalSecondes - this.minutes * 60;
		}, 1000);
	}

	stop() {
		clearInterval(this.timer);
	}

	reset() {
		this.totalSecondes = this.minutes = this.secondes = 0;
	}
}
