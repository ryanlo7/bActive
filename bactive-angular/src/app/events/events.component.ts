import { Component, OnInit } from '@angular/core';
import { User, UserService, Event } from '../user.service';

// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token)
{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	user: User;
	userId: number;
	events: Event[];
    confirmedEvents: Event[];
    imageMap: IHash = {};

	constructor(private userService: UserService) {
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
        this.confirmedEvents = this.userService.getConfirmedEvents();
        if (this.confirmedEvents == null) {
            this.userService.fetchConfirmedEvents(this.userId)
                .subscribe(confirmedEvents => {
                    this.confirmedEvents = this.userService.getConfirmedEvents();
                });
        }
	}

    getActivityUrl(name: string) {
        return this.imageMap[name];
    }

}

export interface IHash {
    [details: string] : string;
}
