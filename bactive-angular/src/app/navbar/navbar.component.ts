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
/**
    * A class representing the navigation bar at the top.
    * @class NavbarComponent
*/
export class NavbarComponent implements OnInit {
    private user: User;
    private userId: number;

    /**
        * Creates a NavbarComponent.
        * @param {UserService} userService The userService.
        * @param {Router} router The router.
    */
  constructor(
      private userService: UserService,
      private router: Router
  ) {
      this.userId = parseJWT(document.cookie).userId;
  }

  /**
      * Function which runs at EditComponent's initialisation.
      * Get the user from the API if it has not been fetched.
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
  }

  /**
    * Function which routes to events page when user clicks on events in navbar.
    * @return {Void}
  */
  handleEvents() {
      this.router.navigate(['/events']);
  }

  /**
    * Function which routes to matches page when user clicks on matches in navbar.
    * @return {Void}
  */
  handleMatches () {
      this.router.navigate(['/matches']);
  }

  /**
    * Function which routes to profile page when user clicks on profile in navbar.
    * @return {Void}
  */
  handleProfile () {
      this.router.navigate([`/profile/${this.userId}`]);
  }

}
