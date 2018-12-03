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
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
	user: User;
	userId: number;
	matchedEvents: Event[];
	pendingEvents: Event[];


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

		this.matchedEvents = this.userService.getMatchedEvents();
		if (this.matchedEvents == null) {
			this.userService.fetchMatchedEvents(this.userId)
				.subscribe(matches => {
					this.matchedEvents = this.userService.getMatchedEvents();
					console.log(matches);
				});
		}

		this.pendingEvents = this.userService.getPendingEvents();
		if (this.pendingEvents == null) {
			this.userService.fetchPendingEvents(this.userId)
				.subscribe(pending => {
					this.pendingEvents = this.userService.getPendingEvents();
					console.log(pending);
				});
		}
	}

	// add the userId to the accepted array. If all invited have accepted,
	// change the status to confirmed. Otherwise, set the status of the event
	// to pending or invited
	acceptEvent(eventId: number, userId: number) {

	}

	declineEvent(eventId: number, userId: number) {

	}

}
