import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token) 
{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

export class MatchesComponent implements OnInit {
	userId: number;

	constructor(private userService: UserService) {
		this.userId = parseJWT(document.cookie).userId;
	}

	ngOnInit() {
		this.runMatch();
	}

	runMatch(): void {
		
	}

}
