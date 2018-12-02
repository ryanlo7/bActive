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
	userId: number[];
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

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private user: User;
	private events: Event[];
	private apiUrl = 'http://localhost:3000/api';

	constructor(private http: HttpClient) { }

	// Get the user from the API
	fetchUser(userId: number): Observable<User> {
		const url = `${this.apiUrl}/${userId}`;

		return this.http.get<User>(url).pipe(
			tap(res => {
				this.user = res;
			})
		);
	}

	getUser(userId: number): User {
		return this.user;
	}
	
	fetchEvents(): Observable<Event[]> {
		const url = `${this.apiUrl}/event`;

		return this.http.get<Event[]>(url).pipe(
			tap(res => {
				this.events = res;
			})
		);
	}
	
	getEvents(): Event[] {
		return this.events;
	}
}