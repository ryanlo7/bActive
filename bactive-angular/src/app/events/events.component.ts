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
/**
    * A class representing the component which shows a user's events.
    * @class EventsComponent
*/
export class EventsComponent implements OnInit {
	user: User;
	userId: number;
    confirmedEvents: Event[];
    imageMap: IHash = {};
    ratingScale: number[] = [1, 2, 3, 4, 5];
    ratedEvents: number[] = [];
    ratings: JHash = {}; // First argument is eventId + " " + rateeId. Value stored in that entry is score.

    /**
        * Creates a UserService.
        * @param {UserService} userService The userService.
    */
	constructor(private userService: UserService) {
		this.userId = parseJWT(document.cookie).userId;

        this.imageMap["Lifting"] = "https://static1.squarespace.com/static/53de6926e4b06edf127b3ecd/t/56c51cb6555986ef347ae6ba/1455758525694/";
        this.imageMap["Running"] = "http://lisabaylis.com/wp/wp-content/uploads/2017/07/running.jpg";
        this.imageMap["Swimming"] = "https://cdn.swimswam.com/wp-content/uploads/2018/02/stock-by-Mike-Lewis-LDM_1946.jpg";
        this.imageMap["Basketball"] = "https://ak5.picdn.net/shutterstock/videos/18113245/thumb/1.jpg";
        this.imageMap["Soccer"] = "http://www.bagnet.org/storage/05/17/23/16/729_486_5936517d8d288.jpg";
        this.imageMap["Tennis"] = "https://tennisracquetcentral.com/wp-content/uploads/2018/02/Tennis-Balls.jpg";
        this.imageMap["Volleyball"] = "https://www.longbeachny.gov/vertical/Sites/%7BC3C1054A-3D3A-41B3-8896-814D00B86D2A%7D/uploads/bigstock-Beach-Volleyball-Silhouette-81799844_(1).jpg";
        this.imageMap["Climbing"] = "http://yourboulder.com/wp-content/uploads/2013/02/adult-courses1-e1360807803429.jpg";
        this.imageMap["Squash"] = "https://data.englandsquash.com/files?fileName=0600776f-047c-4853-92f2-bb6a87601341.jpg";
        this.imageMap["Frisbee"] = "https://childlikefaith.com/wp-content/uploads/2015/10/ultimate-frisbee-catch.jpg";
	}

    /**
        * Function which runs at MatchesComponent's initialisation.
        * Get the user from the API if it has not been fetched.
        * Do the same for confirmed events.
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

        this.confirmedEvents = this.userService.getConfirmedEvents();
        if (this.confirmedEvents == null) {
            this.userService.fetchConfirmedEvents(this.userId)
                .subscribe(confirmedEvents => {
                    this.confirmedEvents = this.userService.getConfirmedEvents();
                });
        }
	}

    /**
        * Determines if a date is in the past.
        * @param {number} endDate The date of the end of the event.
        * @return {boolean} Whether the date is in the past.
    */
    isPastEvent(endDate: number) {
        let current: number = Date.now();
        return endDate < current;
    }

    /**
        * Gets the URL for the image of the activity.
        * @param {String} name The name of the activity.
        * @return {String} The URL for the image of the activity.
    */
    getActivityUrl(name: string) {
        return this.imageMap[name];
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
        * Determines if this event and user have been rated or not.
        * @param {number} eventId The ID of the event.
        * @return {Boolean} True if this event has not been rated for this user.
    */
    notRated(eventId: number): boolean {
        if(this.ratedEvents.indexOf(eventId) > -1) return false;

        for(let i = 0; i < this.user.events.length; i++) {

            if (this.user.events[i].eventId == eventId) {
                console.log(this.user.events[i].rated.length);
                if (this.user.events[i].rated.length > 0) {
                    console.log(this.user.events[i].rated.length);
                    return false;
                } else {
                    return true;
                }
            }
        }

        return true;
    }

    /**
        Allows the user to rate the other user for this event.
        * @param {number} otherId The ID of the user to be rated.
        * @param {number} eventId The ID of the event.
        * @param {number} rating The rating, from 1 to 5.
    */
    rateUser(otherId: number, eventId: number, rating: number): void {
		this.userService.rateUser(this.userId, otherId, eventId, rating);
        this.ratedEvents.push(eventId);
	}
}

/**
    A hashmap interface, from strings (activity names) to strings (image URLs).
    * @interface IHash
*/
export interface IHash {
    [details: string] : string;
}

/**
    A hashmap interface, from strings (eventId + " " + userId) to numbers (ratings).
    * @interface JHash
*/
export interface JHash {
    [details: string] : number;
}
