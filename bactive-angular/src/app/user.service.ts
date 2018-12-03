import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
const options = {headers, responseType: 'text' as 'text'};

export class Activity {
	name: string;
	interest: number;
	skill: number;
}

export class Event {
	eventId: number;
	acceptedIds: number[];
	invitedIds: number[];
	activity: string;
	startTime: Date;
	endTime: Date;
	status: string;
	location: string;
}

export class User {
	userId: number;
	email: string;
	name: string;
	rating: {
		scoreSum: number;
		numRatings: number;
	};
	activities: Activity[];
	availability: boolean[][];
	events: {eventId: number, rated: number[]}[];
}

export class Match {
	event: string;
	score: number;
	match_id: number;
	match_name: string;
	match_email: string;
	time: number[];
	unix_time: Date;
	location: string;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users: User[];
	private events: Event[];
	private matchedEvents: Event[];
	private confirmedEvents: Event[];
	private pendingEvents: Event[];
	private apiUrl = 'http://localhost:3000/api';
	private matchUrl = 'http://localhost:3000/match';

	constructor(private http: HttpClient) { }

	/**
		* Initial call to User Service to populate array users.
		* Calls the following server-side API: GET /api/users.
		* @return {Observable<any>} An Observable object that promises population of user array once API request finishes.
	*/
	fetchUser(): Observable<any> {
		const url = `${this.apiUrl}/users`;

		return this.http.get<User[]>(url).pipe(
			tap(res => {
				this.users = res;
			})
		);
	}
	
	/**
		* Returns user with given userId if it exists in users array.
		* If no user with given userId found, returns null instead.
		* @param {number} userId The express routing HTTP client request object.
		* @return {User} The User object with the matching userId, or null if none found.
	*/
	getUser(userId: number): User {
		if (this.users === undefined || this.users === null || this.users.length === 0) {
			return null;
		}
		return this.users.find(cur => cur.userId === userId);
	}
	
	/**
		* Initial call to populate events array with events that user with id userId is invited to.
		* Calls the following server-side API: GET /api/events/:userId.
		* @param {number} userId The userId whose events we are searching for.
		* @return {Observable<Event[]>} An Observable object that promises population of events array once API request finishes.
	*/
	fetchEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/events/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.events = res;
			})
		);
	}

	/**
		* Returns events array, which contains events that user that's using this User Service was invited to.
		* Requires call to fetchEvents(userId: number) prior to execution for correct output.
		* @return {Event[]} The array of events that the user was invited to.
	*/
	getEvents(): Event[] {
		return this.events;
	}

	/**
		* Initial call to populate matchedEvents array with events that user with id userId has been matched to.
		* Calls the following server-side API: GET /api/matchedevents/:userId.
		* @param {number} userId The userId whose events we are searching for.
		* @return {Observable<Event[]>} An Observable object that promises population of matchedEvents array once API request finishes.
	*/
	fetchMatchedEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/matchedevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.matchedEvents = res;
			})
		);
	}

	/**
		* Returns matchedEvents array, which contains events that user that's using this User Service has been matched to.
		* Requires call to fetchMatchedEvents(userId: number) prior to execution for correct output.
		* @return {Event[]} The array of events that the user has been matched to.
	*/
	getMatchedEvents(): Event[] {
		return this.matchedEvents;
	}

	/**
		* Initial call to populate confirmedEvents array with confirmed events that user with id userId has been matched to.
		* Calls the following server-side API: GET /api/confirmedevents/:userId.
		* @param {number} userId The userId whose events we are searching for.
		* @return {Observable<Event[]>} An Observable object that promises population of confirmedEvents array once API request finishes.
	*/
	fetchConfirmedEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/confirmedevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.confirmedEvents = res;
			})
		);
	}

	/**
		* Returns confirmedEvents array, which contains confirmed events that user that's using this User Service has been matched to.
		* Requires call to fetchConfirmedEvents(userId: number) prior to execution for correct output.
		* @return {Event[]} The array of confirmed events that the user has been matched to.
	*/
	getConfirmedEvents(): Event[] {
		return this.confirmedEvents;
	}

	/**
		* Initial call to populate pendingEvents array with pending events that user with id userId has been matched to.
		* Calls the following server-side API: GET /api/pendingevents/:userId.
		* @param {number} userId The userId whose events we are searching for.
		* @return {Observable<Event[]>} An Observable object that promises population of pendingEvents array once API request finishes.
	*/
	fetchPendingEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/pendingevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.pendingEvents = res;
			})
		);
	}

	/**
		* Returns confirmedEvents array, which contains pending events that user that's using this User Service has been matched to.
		* Requires call to fetchPendingEvents(userId: number) prior to execution for correct output.
		* @return {Event[]} The array of pending events that the user has been matched to.
	*/
	getPendingEvents(): Event[] {
		return this.pendingEvents;
	}

	/**
		* Finds best matches of current user, then creates corresponding events and populates server.
		* Calls the following server-side APIs: GET /match/:userId, POST /event/:userId.
		* @param {number} userId The userId whose matches we are computing.
		* @return {Observable<Event[]>} An Observable object that promises population of events collection with appropriate events.
	*/
	fetchMatches(userId: number): Observable<Match[]> {
		const url = `${this.matchUrl}/${userId}`;

		return this.http.get<Match[]>(url).pipe(
			tap(res => {
				for (let match of res) {
					let event: Event = {
						eventId: 0,
						acceptedIds: [],
						invitedIds: [match.match_id, userId],
						activity: match.event,
						startTime: match.unix_time,
						endTime: new Date(match.unix_time.getSeconds() + 180),
						status: "matched",
						location: match.location
					};
					this.http.post<Event>(`${this.apiUrl}/event/${userId}`, event).subscribe();
				}
			})
		);
	}
	
	/**
		* Updates name of user with user id userId to newName.
		* Calls the following server-side API: PUT /name/:userId, body: {name: newName}
		* @param {number} userId The userId whose name we are changing.
		* @param {string} newName The updated name that we are setting for user with user id userId.
		* @return {void}
	*/
	changeName(userId: number, newName: string): void {
		const url = `${this.apiUrl}/name/${userId}`;
		var insert = {name: newName};
		this.http.put(url, insert).subscribe();
	}

	/**
		* Updates activities array of user with user id userId to input array activities.
		* Calls the following server-side API: PUT /activity/:userId, body: {activity: activities}
		* @param {number} userId The userId whose activities we are updating.
		* @param {Activity[]} activities The updated array of activities that we are setting for user with user id userId.
		* @return {void}
	*/
	updateActivities(userId: number, activities: Activity[]): void {
		const url = `${this.apiUrl}/activity/${userId}`;
		var insert = {activity: activities};
		this.http.post(url, insert).subscribe();
	}

	/**
		* Updates availabilities array of user with user id userId to input array availabilities.
		* Calls the following server-side API: PUT /availability/:userId, body: {availability: availabilities}
		* @param {number} userId The userId whose availabilities we are updating.
		* @param {boolean[][]} activities The updated array (7 by 48) of availabilities that we are setting for user with user id userId.
		* @return {void}
	*/
	updateAvailability(userId: number, availabilities: boolean[][]): void {
		const url = `${this.apiUrl}/availability/${userId}`;
		var insert = {availability: availabilities};
		console.log(insert);
		this.http.put(url, insert).pipe(
			tap(res => {
				this.fetchMatches(userId);
			})
		);
	}

	/**
		* Deletes event from database with event id removeEventId. Deletes event from matchedEvents, pendingEvents, and confirmedEvents arrays.
		* Calls the following server-side API: DELETE /event/:removeEventId.
		* @param {number} removeEventId The event id of the event we are deleting.
		* @return {void}
	*/
	deleteEvent(removeEventId: number): void {
		const url = `${this.apiUrl}/event/${removeEventId}`;

		let found: boolean = false;
		for(let i = 0; i < this.matchedEvents.length; i++) {
			if (this.matchedEvents[i].eventId == removeEventId) {
				found = true;
				this.matchedEvents.splice(i, 1);
			}
		}

		if (!found) {
			for(let i = 0; i < this.pendingEvents.length; i++) {
				if (this.pendingEvents[i].eventId == removeEventId) {
					found = true;
					this.pendingEvents.splice(i, 1);
				}
			}
		}

		if (!found) {
			for(let i = 0; i < this.confirmedEvents.length; i++) {
				if (this.confirmedEvents[i].eventId == removeEventId) {
					found = true;
					this.confirmedEvents.splice(i, 1);
				}
			}
		}

		this.http.delete(url, options).subscribe();
		console.log('deleting event');
	}

	/**
		* Updates event in database whose event id matches updatedEvent.eventId. Updates matchedEvents, pendingEvents, and confirmedEvents arrays.
		* Calls the following server-side API: PUT /event/:updatedEvent.eventId, body: {event: updatedEvent}
		* @param {Event} updatedEvent The updated event that we are sending to the server.
		* @return {void}
	*/
	updateEvent(updatedEvent: Event): void {
		const url = `${this.apiUrl}/event/${updatedEvent.eventId}`;
		var update = {event: updatedEvent};

		let found: boolean = false;
		for(let i = 0; i < this.matchedEvents.length; i++) {
			if (this.matchedEvents[i].eventId == updatedEvent.eventId) {
				found = true;
				this.pendingEvents.push(updatedEvent);
				this.matchedEvents.splice(i, 1);
			}
		}

		if (!found) {
			for(let i = 0; i < this.pendingEvents.length; i++) {
				if (this.pendingEvents[i].eventId == updatedEvent.eventId) {
					found = true;
					this.confirmedEvents.push(updatedEvent);
					this.pendingEvents.splice(i, 1);
				}
			}
		}

		this.http.put(url, update).subscribe();
		console.log('updating event');
	}

	/**
		* Allows user to rate another user for an event.
		* Calls the following server-side API: PUT /rate/:userId, body: {ratee: otherId, eventId: eventId, score: rating}
		* @param {number} userId The user who is doing the rating.
		* @param {number} otherId The user who is being rated.
		* @param {number} eventId The event that the rating is being done for.
		* @param {number} rating The rating that the user is giving.
		* @return {void}
	*/
	rateUser(userId: number, otherId: number, eventId: number, rating: number): void {
		const url = `${this.apiUrl}/rate/${userId}`;
		var insert = {
			ratee: otherId,
			eventId: eventId,
			score: rating
		}
		this.http.put(url, insert).subscribe();
	}
}
