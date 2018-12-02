import { Component, OnInit } from '@angular/core';
import { User, UserService, Match } from '../user.service';

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
export class MatchesComponent implements OnInit {
	user: User;
	userId: number;
	matches: Match[];


	constructor(private userService: UserService) {
		this.userId = parseJWT(document.cookie).userId;
	}

	ngOnInit() {
		this.user = this.userService.getUser(this.userId);
		if (this.user == null) {
			this.userService.fetchUser(this.userId)
				.subscribe(user => {
					this.user = this.userService.getUser(this.userId);
				});
		}
		this.matches = this.userService.getMatches();
		if (this.matches == null) {
			this.userService.fetchMatches(this.userId)
				.subscribe(matches => {
					this.matches = this.userService.getMatches();
					console.log(matches);
				});
		}
	}

}
