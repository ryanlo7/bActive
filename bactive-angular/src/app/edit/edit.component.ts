import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

/**
    * Parses a JSON Web Token.
    * Source: CS144 with Professor Cho, Project 4 JWT code
    * @param {Object} token A JSON Web Token.
    * @return {String} The parsed JSON Web Token, as a string.
*/
function parseJWT(token)
{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
/**
    * A class representing the component which allows the user to edit her profile.
    * @class EditComponent
*/
export class EditComponent implements OnInit {

  	user: User;
	userId: number;
	tableHeadings: string[] = [];
	ratingScale: number[] = [1, 2, 3, 4, 5];
	possibleActivities: string[] = [
		"Lifting",
		"Running",
		"Swimming",
		"Basketball",
		"Soccer",
		"Tennis",
		"Volleyball",
		"Climbing",
		"Squash",
		"Frisbee"
	];

    /**
        * Creates an EditComponent.
        * @param {UserService} userService The userService.
        * @param {Router} router The router.
    */
	constructor(private userService: UserService, private router: Router) {
		this.userId = parseJWT(document.cookie).userId;
	}

    /**
        * Function which runs at EditComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * @return {Void}
    */
	ngOnInit() {
		this.fillTableHeadings();
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser()
				.subscribe(user => {
					this.user = this.userService.getUser(this.userId);
				});
		}
	}

    /**
        * Updates the name, activities, and availabilities.
        * @return {Void}
    */
	updateProfile(): void {
		this.userService.changeName(this.user.userId, this.user.name);
		this.userService.updateActivities(this.user.userId, this.user.activities);
		this.userService.updateAvailability(this.user.userId, this.user.availability);
	}

    /**
        * Updates the name, activities, and availabilities, and then
        * navigates back to the user's profile.
        * @return {Void}
    */
    updateProfileAndReturn() : void {
        this.updateProfile();
        this.router.navigate([`/profile/${this.userId}`]);
    }

    /**
        * Deletes activity from this user.
        * @param {String} name The name of the activity to be deleted.
        * @return {Void}
    */
	deleteActivity(name: string) {
		let index = -1;
		let newActivities = [];
		for(let i = 0; i < this.user.activities.length; i++) {
			if (this.user.activities[i].name != name) {
				newActivities.push(this.user.activities[i])
			}
		}
		this.user.activities = newActivities;
		console.log('deleting: ' + name);
		console.log(this.user.activities);
	}

    /**
        * Adds a default activity to the user's activities.
        * @return {Void}
    */
	addActivity() {
		// push default settings
		this.user.activities.push({"name": "Lifting", "skill": 1, "interest": 1});
	}

    /**
        * Populates the availability table with half-hour times.
        * @return {Void}
    */
	fillTableHeadings(): void {
		let hour = 0;
		let minutes = "00";

		for (let i = 0; i < 48; i ++) {
			this.tableHeadings.push(`${hour}:${minutes}`);
			hour = (i % 2 == 1) ? hour + 1 : hour;
			minutes = (minutes == "00") ? "30" : "00";
		}
	}

    /**
        * Calculates the rating of the user.
        * @return {Array} An array of numbers, of length 5, for which the appropriate number of entries are full.
    */
	calculateRating() {
		let ratings = this.user.rating;
		if (ratings.numRatings === 0) {
			return 0;
		}
		let avg = Math.ceil(ratings.scoreSum / ratings.numRatings);
		return Array(avg).fill(5);
	}

    /**
        * Handles checking if a click has happened in the availability table.
        * @return {Void}
    */
	handleCheckClick(row: number, col: number) {
		this.user.availability[row][col] = !this.user.availability[row][col];
	}
}
