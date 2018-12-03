import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

// Source: CS144 with Professor Cho, Project 4 JWT code
function parseJWT(token)
{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    private user: User;
    private userId: number;

  constructor(
      private userService: UserService,
      private router: Router
  ) {
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
  }

  handleEvents() {
      this.router.navigate(['/events']);
  }

  handleMatches () {
      this.router.navigate(['/matches']);
  }

  handleProfile () {
      this.router.navigate(['/']);
  }

}
