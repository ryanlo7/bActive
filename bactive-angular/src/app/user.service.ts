import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
const options = {headers, responseType: 'text' as 'text'};

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private user: User;
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
}

export class User {
	userId: number;
	email: string;
	password: string;
	activities: { name: string, interest: number, skill: number }[];
	availability: boolean[][];
	events: { userId: number[], 
			activity: string, 
			day: string, 
			time: string, 
			status: string, 
			location: string }[];
}