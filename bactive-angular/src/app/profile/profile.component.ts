import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token) 
{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	user: User;
	userId: number;
	tableHeadings: string[] = [];

	constructor(private userService: UserService) {
		this.userId = parseJWT(document.cookie).userId;
	}

	// Get the user from the API if it has not been fetched
	ngOnInit() {
		this.fillTableHeadings();
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser(this.userId)
				.subscribe(user => {
					this.user = this.userService.getUser(this.userId);
				});
		}
	}

	fillTableHeadings(): void {
		let hour = 0; 
		let minutes = "00";

		for (let i = 0; i < 48; i ++) {
			this.tableHeadings.push(`${hour}:${minutes}`);
			hour = (i % 2 == 1) ? hour + 1 : hour;
			minutes = (minutes == "00") ? "30" : "00";
		}
	}

	calculateRating() {
		let ratings = this.user.rating;
		if (ratings.numRatings === 0) {
			return 0;
		}
		return ratings.scoreSum / ratings.numRatings;
	}
}
