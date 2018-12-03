# B Active

## ABOUT THIS PROJECT

### Where the code is.

- Source code is in the bactive directory. Front-end code is in bactive/views, back-end code is in bactive/routes.
- Test cases are included in the tests folder. testcases.json has postman tests, while the test folder within tests has the JavaScript unit tests.
- Included libraries are node packages, and should be under bactive/node_modules.

## DATABASE FORMAT:
DB name: bActiveServer

Collection: Users  
Document Example:
```
{
	"userId": 0, # start from 0 and increment by 1
	"email": "user1@ucla.edu",
	"password": "hashed password",
	"activities": [
		{"name": "Basketball", "interest": 5, "skill": 5}, # interest and skill rankings out of 5, 5 being the highest
		{"name": "Lifting", "interest": 4, "skill": 3},
		...
	],
	"availability": [
		# indexes 0 - 6 starts at monday = 0, tuesday = 1, ...
		# availability for every half hour starting at 00:00 to 23:30, 'true' means available, 48 total
		[false, false, false, ...], # monday
		[false, false, false, ...], # tuesday
		[false, false, false, ...], # wednesday
		[false, false, false, ...], # thursday
		[false, false, false, ...], # friday
		[false, false, false, ...], # saturday
		[false, false, false, ...]  # sunday
	],
	"events": [
		{
			"userId": [2], # who you matched with; array is for the case of group events
			"activity": "Lifting", # suggested activity
			"day": "monday",
			"time": "4PM-6:30PM", # the largest interval that matches
			# Defining statuses:
			# "matched" = event has been suggested to both users, neither has accepted
			# "confirmed" = both users have accepted
			# "pending" = one user has accepted, but not all
			"status": "matched",
			"location": "bfit" # default to first location in Activities collection, changeable after confirmed
		},
		...
	]
}
```

Collection: Activities  
Document Example:
```
{
	"name": "Lifting",
	"locations": ["bfit", "wooden"],
	"sizeMin": 2,
	"sizeMax": 2
}
```

## API
- `GET /api/:userid` returns JSON object containing all user info
- `PUT /api/availability/:userid` requires availability=[JSON array] in body, updates huge availability array with new value
- `PUT /api/password/:userid` requires password=[plaintext password] in body, set to plaintext because hashing in angular is probably too difficult to figure out for it to be worth it, backend will hash it
- `POST /api/activity/:userid` requires activity=[JSON object containing new activity] in body
- `PUT /api/activity/:userid` requires activity=[JSON object] in body, finds activity with corresponding name in array of activities
- `POST /api/newevent/:userid` requires event=[JSON object containing new event] in body
- `DELETE /api/deleteevent/:userid` requires event=[JSON object of event to delete] in body
- `DELETE /api/deleteactivity/:userid` requires event=[JSON object of activity to delete] in body

## TESTING:
We have implemented 5 test cases in testcases.json as well as server-side test cases in match.js. Further front-end testing was done in Selenium.

The first six tests were run using Postman. 

Tests 7-9 were run using Mocha, a JavaScript test framework. This test was run using the npm test command from inside the tests folder. Note that in order for the npm test to run, the module.exports line must be un-commented in the bottom of the match.js file. The line to un-comment out is also mentioned in a comment in the match.js file, but the reason it was commented out was because the module.exports for the test case file was interfering with the module.exports for the router. Therefore,
after running npm test, the exported line was commented again so that the web application page would run as desired.

Tests 10-14 are end to end tests run using the Selenium IDE, which is available as both a Chrome and Firefox extension. Note that before running the tests, the database should be reset with the test users by running `mongo < db.sh` inside the `bactive/bactive` folder. The four tests are compiled into a unified test suite, which can be run all at once consecutively using the 'Run all tests' button. The test cases pass when the tests run to completion without errors in logging or stalls. 

The respective descriptions are in the code in the ‘tests’ folder, as well as our report for part B and C. We have described them below as well:

Test Case 1: Login Page HTTP GET

This was a very basic use-case test that we used simply to verify that our server was running as intended. Upon receiving an HTTP GET request to the login page, we checked whether the server returned the appropriate status code of 200 along with an HTML page containing an email and password field. Any other status code, or an HTML page not containing the aforementioned fields, would indicate some sort of server-side error that would need to be addressed.

Test Case 2: Login Page HTTP POST (incorrect password)

This was another basic use-case test that we used to verify that the server successfully prevented login attempts with an incorrect password to ensure security. Upon receiving an HTTP POST request containing a valid username and incorrect password in its body, the server should make a call to MongoDB, compare the cryptographic hash of the incorrect password with the cryptographic hash of the password stored on the server, and recognize that an incorrect password was entered, thus redirecting the user back to the login page with a status code of 401 (unauthorized). Any other status code would imply some sort of error; notably, a status code of 200 (OK) would indicate a massive security vulnerability in the password verification system that would require urgent attention, especially if the server were to also return a valid cookie that the user could then use to authenticate themselves to login-protected pages.

Test Case 3: Login Page HTTP POST (correct password)

This was a unit test-case designed to test whether the server could recognize a correct password, redirect to the profile page, and issue a cookie that would authorize the user to access login-protected content. As mentioned previously, password checking is implemented by computing a cryptographic hash of the password provided by the user, and comparing with the cryptographic hash stored on the server. As a redirect is involved, the server should send a status code of 301; any other status code would imply some sort of error; in particular, a status code of 401 (unauthorized) would imply that the server was not properly accepting the credentials of the user.

Test Case 4: HTTP GET Profile Page with Login Verification

This was a unit test-case designed to test whether the profile page displays the profile for a user given a verified cookie indicating that the user has logged in within the last two hours. In order to execute this, the POST request described in Test Case 3 must first be run to obtain the JWT authorization cookie, and appended to the GET request header for the profile page. The status of the response should be 200, and the body of the response should be an HTML page that includes the user email, list of activities, and colored table of availability. 

Test Case 5: HTTP GET Event Page with invalid userId

This was a basic use-case test designed to test whether the events page displays the events page for an invalid userId. To test this, the GET request must contain an invalid userId (not in the database at that point in time). We expect a status code of 404, indicating userId not found. Rendering other status codes or pages indicate a server-side error needing further investigation.

Test Case 6: HTTP GET Event Page with valid userId, without cookie

This was a basic use-case test designed to test whether the events page displays the events page for an valid userId without a cookie. To test this, the GET request must contain a valid userId (in the database at that point in time). We expect a 401 status redirect to the login page since the user does not have a cookie and is thus not logged in. Rendering other status codes or pages indicate a server-side error needing further investigation.

Test Case 7: Unit Test for Time Availability Match

This was a unit test case in JavaScript to test whether the time availability match between two users was computed correctly. To test this, we fill two time availability matrices with values for availability of two users. Then, we compare the time availabilities of the two users and call the function to compute the maximum overlap in availability between the two users. Assert statements are used to check that the computed overlap is correct for each of three cases that will be described below; the true value of maximum overlap is known since the availability arrays were created with a known number of overlap.

Three different availability matrix combinations are tested with the assert statements in this function to ensure that the maximum overlap is as expected: one combination ensures that the function returns 0 when there is no match, one combination ensures that if there are two matching time periods, the largest availability is returned, and the third combination ensures that contiguous time periods are detected across multiple days (i.e. if two users are available from late night on one day to the morning on the other day, we must detect this). This test was run on Mocha, a JavaScript test framework.

Test Case 8: Unit Test for Activity Match

This was a unit test case in JavaScript to determine whether the correct activity was selected given two users’ activity preferences. The true best activity is known prior to the test case since the activity arrays are manually filled with synthetic activity data. The function uses assert statements to check that the expected activity is selected from the lists when determining the best match. Furthermore, the function also uses assert statements to verify that the interest and skill level scores are within bounds of the expected scores (between 0, and the constant used for the maximum score post normalization). This test was run on Mocha, a JavaScript test framework.

Test Case 9: Unit Test for User Match

This new test case was added in part C. This was a unit test case in JavaScript to determine whether the match object was being correctly populated with activity and event information. Since the matching algorithm is deterministic, given two mock users, the expected best activity match by applying the algorithm is known. Then, we can use the assert statements from the Mocha library to test whether the match information filled by matchUser is the same as the expected information. 

Test Case 10: Login End to End Test

This test case uses the browser to access the login page, and proceeds to fill in the username and password before clicking the login button. This test should end on the logged in user's profile page. 

Test Case 11: Edit Profile End to End test

This test case is contingent on the success of Test Case 10. Once logged in, the user selects the 'Edit Profile' button on the profile page to access the editing page, and proceeds to change the name, delete a favorite event, and edit the availability schedule. 

Test Case 12: Accept Match End to End test

This test case is contingent on the success of Test Case 10. Once logged in, the user should have a matched event waiting for acceptance/decline from the default database script. The test then clicks the 'Accept' button, moving the event to the 'Pending' category. 

Test Case 13: Log in to other user, accept event, and rate user

This test case is contingent on the success of Test Case 12. The test logs in to a different account, goes to the Matches page, and should see an event waiting for acceptance/decline in the 'Pending' category (since we accepted from the other user). Upon clicking the 'Accept' button, the event is removed from the Matches page, and is added to the Events page. Navigating to the Events page using the navigation bar, the user can view upcoming and past events. The default confirmed event is a past event, so we are able to give a rating to the other user and submit it, which removes the rating option from the Event page. 

Test Case 14: Registering a new user

This test case goes to the BActive home page, clicks the 'register' button, fills in all the fields necessary to register a new user, and clicks the 'register' button. This takes the user to the newly created user's default profile page. 


## Team:
Name: ActiveBruins  
Discussion 1C - Brett Chalabian

## Team Members:
- Eric Kong: 304601223
- Eddie Huang: 204607720
- Krishna Babu: 604460009
- Nicole Wong: 104651105
- Ramya Satish: 104601436
- Ryan Lo: 704579791

## GitHub Repository
https://github.com/ryanlo7/bActive
