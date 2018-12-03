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
/**
    * A class representing the component which allows the user to see her matches.
    * @class MatchesComponent
*/
export class MatchesComponent implements OnInit {
	user: User;
	userId: number;
	matchedEvents: Event[];
	pendingEvents: Event[];
	confirmedEvents: Event[];

    /**
        * Creates a MatchesComponent.
        * @param {UserService} userService The userService.
    */
	constructor(private userService: UserService) {
		this.userId = parseJWT(document.cookie).userId;
	}

    /**
        * Function which runs at MatchesComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * Do the same for matched events, pending events, confirmed events.
        * @return {Void}
    */
	ngOnInit() {
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser()
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

		this.confirmedEvents = this.userService.getConfirmedEvents();
		if (this.confirmedEvents == null) {
			this.userService.fetchConfirmedEvents(this.userId)
				.subscribe(confirmed => {
					this.confirmedEvents = this.userService.getConfirmedEvents();
					console.log(confirmed);
				});
		}
	}

	/**
        * Given a pending event, return true if user has not accepted
        * @param {number} eventId The ID of the event.
        * @return {boolean} True if user has not accepted this event.
    */
	hasNotAccepted(eventId: number): boolean {
		for(let i = 0; i < this.pendingEvents.length; i++) {
			if (eventId == this.pendingEvents[i].eventId) {
				if (this.pendingEvents[i].acceptedIds.indexOf(this.userId) > -1) {
					return false;
				} else {
					return true;
				}
			}
		}

		return false;
	}

    /**
        * Gets the name of the user with id userId.
        * @param {number} userId The ID of the user.
        * @return {String} The name of the user.
    */
	getUserName(userId: number): String {
        var user: User;
        user = this.userService.getUser(userId);
        if (user == null) {
            return null;
        }

        return user.name;
    }

    /**
        * Gets the other participant in an event.
        * @param {Array<number>} userId The IDs of the users in the event.
        * @return {number} The ID of the other participant in an event.
    */
    otherParticipant(invitedIds: number[]): number {
    	if (invitedIds[0] == this.userId) {
    		return invitedIds[1];
    	}

    	return invitedIds[0];
    }

    /**
        * Adds the userId to the accepted array. If all invited have accepted,
    	* changes the status to confirmed. Otherwise, sets the status of the event
    	* to pending or invited.
        * @param {number} eventId The ID of the event.
        * @param {number} userId The ID of the user.
        * @return {Void}
    */
	acceptEvent(eventId: number, userId: number): void {
		// search through matched
		let found: boolean = false;
		for(let i = 0; i < this.matchedEvents.length; i++) {
			if (this.matchedEvents[i].eventId == eventId) {
				found = true;
				console.log(this.matchedEvents[i]);
				let newEvent: Event = this.matchedEvents[i];
				newEvent.acceptedIds.push(userId);
				newEvent.status = "pending";
				//this.pendingEvents.push(newEvent);
				this.userService.updateEvent(newEvent);
				console.log(newEvent);
				this.matchedEvents.splice(i, 1);
				break;
			}
		}

		if (!found) {
			// serach through pending. if accepted, this means moved to confirmed
			for(let i = 0; i < this.pendingEvents.length; i++) {
				if (this.pendingEvents[i].eventId == eventId) {
					let newEvent: Event = this.pendingEvents[i];
					newEvent.acceptedIds.push(userId);
					newEvent.status = "confirmed";
					this.userService.updateEvent(newEvent);
					this.pendingEvents.splice(i, 1);
					break;
				}
			}
		}

		console.log(eventId);

	}

    /**
        * Removes the userId from the accepted array. Sets the status of the event
    	* to pending or just matched.
        * @param {number} eventId The ID of the event.
        * @return {Void}
    */
	declineEvent(eventId: number): void {
		let found: boolean = false;
		for(let i = 0; i < this.matchedEvents.length; i++) {
			if (this.matchedEvents[i].eventId == eventId) {
				found = true;
				this.userService.deleteEvent(eventId);
				this.matchedEvents.splice(i, 1);
				break;
			}
		}

		if (!found) {
			// serach through pending. if accepted, this means moved to confirmed
			for(let i = 0; i < this.pendingEvents.length; i++) {
				if (this.pendingEvents[i].eventId == eventId) {
					this.userService.deleteEvent(eventId);
					this.pendingEvents.splice(i, 1);
					break;
				}
			}
		}
	}

}
