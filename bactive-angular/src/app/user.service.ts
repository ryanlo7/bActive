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

	// Get the user from the API
	fetchUser(): Observable<User[]> {
		const url = `${this.apiUrl}/users`;

		return this.http.get<User[]>(url).pipe(
			tap(res => {
				this.users = res;
			})
		);
	}

	getUser(userId: number): User {
		return this.users.find(cur => cur.userId === userId);
	}

	fetchEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/events/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.events = res;
			})
		);
	}

	getEvents(): Event[] {
		return this.events;
	}

	fetchMatchedEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/matchedevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.matchedEvents = res;
			})
		);
	}

	getMatchedEvents(): Event[] {
		return this.matchedEvents;
	}

	fetchConfirmedEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/confirmedevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.confirmedEvents = res;
			})
		);
	}

	getConfirmedEvents(): Event[] {
		return this.confirmedEvents;
	}

	fetchPendingEvents(userId: number): Observable<Event[]> {
		const url = `${this.apiUrl}/pendingevents/${userId}`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.pendingEvents = res;
			})
		);
	}

	getPendingEvents(): Event[] {
		return this.pendingEvents;
	}

	// this makes the call to the api to create matched events
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

	changeName(userId: number, newName: string): void {
		const url = `${this.apiUrl}/name/${userId}`;
		var insert = {name: newName};
		this.http.put(url, insert).subscribe();
	}

	updateActivities(userId: number, activities: Activity[]): void {
		const url = `${this.apiUrl}/activity/${userId}`;
		var insert = {activity: activities};
		this.http.post(url, insert).subscribe();
	}

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
}
