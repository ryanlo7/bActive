import { Component, OnInit } from '@angular/core';
import { User, UserService, Event } from '../user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	user: User;
	userId: number;
	events: Event[];

	constructor() { 
		this.userId = parseJWT(document.cookie).userId;
	}

	ngOnInit() {
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser(this.userId)
				.subscribe(user => {
					this.user = this.userService.getUser(this.userId);
				});
		}
		this.events = this.userService.getEvents();
		if (this.events == null) {
			this.userService.fetchEvents(this.userId)
				.subscribe(events => {
					this.events = this.userService.getEvents();
				});
		}
	}

}
