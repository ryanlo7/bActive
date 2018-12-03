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
    confirmedEvents: Event[];
    imageMap: IHash = {};
    ratingScale: number[] = [1, 2, 3, 4, 5];
    ratedEvents: number[] = [];
    ratings: JHash = {}; // First argument is eventId + " " + rateeId. Value stored in that entry is score.

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

    isPastEvent(endDate: number) {
        let current: number = Date.now();
        return endDate < current;
    }

    getActivityUrl(name: string) {
        return this.imageMap[name];
    }

    getUserName(userId: number): String {
        var user: User;
        user = this.userService.getUser(userId);
        if (user == null) {
            return null;
        }
        return user.name;
    }

    otherParticipant(invitedIds: number[]): number {
        if (invitedIds[0] == this.userId) {
            return invitedIds[1];
        }

        return invitedIds[0];
    }

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


    rateUser(otherId: number, eventId: number, rating: number): void {
		this.userService.rateUser(this.userId, otherId, eventId, rating);
        this.ratedEvents.push(eventId);
	}
}

export interface IHash {
    [details: string] : string;
}

export interface JHash {
    [details: string] : number;
}
