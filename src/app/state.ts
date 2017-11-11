export class State {

	private play: boolean = true;  
	private stop: boolean = false;
	private backward: boolean = false;

	setPlay() {
		this.stop = true;
		this.play = this.backward = false;    
	}

	setStop() {
		this.stop = false;
		this.play = this.backward = true;    
	}

	setBackward() {
		this.play = true;
		this.stop = this.backward = false;    
	}
}
