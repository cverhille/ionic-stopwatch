import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Timer } from '../../app/timer';
import { State } from '../../app/state';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	private btnPlay: string = 'START';
	
	private timer: Timer = new Timer();
	private state: State = new State();
	
	constructor(public navCtrl: NavController) {}

	play() {
		this.timer.start();
		this.state.setPlay();
		this.btnPlay = 'CONTINUE';
	}

	stop() {
		this.timer.stop();
		this.state.setStop();
	}
	
	backward() {
		this.timer.reset();
		this.state.setBackward();
		this.btnPlay = 'START';
	}
}
