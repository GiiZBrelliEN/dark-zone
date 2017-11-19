import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
	selector: 'app-facebook',
	templateUrl: './facebook.component.html',
	styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

	constructor() { }
	hide:boolean = false;
	ngOnInit() {
		setTimeout(() => {
			this.hide = true;
		}, 5000);
	}

}
