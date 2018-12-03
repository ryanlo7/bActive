import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
	imageMap: IHash = {};
	publicView: boolean = false;

	constructor(private userService: UserService,
		private router: Router,
		private route : ActivatedRoute) {
		this.userId = parseJWT(document.cookie).userId;

		// If the link that led to the profile page is from /profile, display the public view
		if ( this.route.snapshot.url.length > 0) {
			const id = +this.route.snapshot.paramMap.get('id');
			console.log('hi');
			if (id != null && id != this.userId) {
				this.userId = id;
				this.publicView = true;
			}
		}

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

	// Get the user from the API if it has not been fetched
	ngOnInit() {
		this.userId = parseJWT(document.cookie).userId;

		// + converts to a number
		const id = +this.route.snapshot.paramMap.get('id');
		if (id != null && id != this.userId) {
			this.userId = id;
			this.publicView = true;
		}
		this.fillTableHeadings();
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser()
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
		let avg = Math.ceil(ratings.scoreSum / ratings.numRatings);
		return Array(avg).fill(5);
	}

	getActivityUrl(name: string) {
		return this.imageMap[name];
	}

    handleEdit() {
        this.router.navigate(['/edit']);
    }
}

export interface IHash {
    [details: string] : string;
}
