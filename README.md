# B Active

## ABOUT THIS PROJECT

### Where the code is.

- Source code is in the bactive directory. Front-end code is in bactive/views, back-end code is in bactive/routes.
- Test cases are included in testcases.json.
- Included libraries are node packages, and should be under bactive/node_modules.

## HOW TO START PROJECT:
1. follow guide on cs144 site to set up docker here (do parts A and B only):
   http://oak.cs.ucla.edu/classes/cs144/project1/index.html
2. follow steps from "Overview" to "Development Environment":
   http://oak.cs.ucla.edu/classes/cs144/project3/index.html
3. run `mongo < db.sh`
4. play around & test frontend/backend functionality by running `npm start` and then opening the url in `http://localhost:3000/<insert page you want to open here without any extension names>`. For instance, if I want to view the "match" page, I would type in: `http://localhost:3cd 000/match`
5. edit the .ejs files in "/views" to edit front end. To edit backend, edit the corresponding .js file in "/routes"

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
		{"name": "basketball", "interest": 5, "skill": 5}, # interest and skill rankings out of 5, 5 being the highest
		{"name": "lifting", "interest": 4, "skill": 3},
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
			"activity": "lifting", # suggested activity
			"day": "monday",
			"time": "4PM-6:30PM", # the largest interval that matches
			# Defining statuses:
			# "matched" = event has been suggested to both users, neither has accepted
			# "confirmed" = both users have accepted
			# "pending" = user 1 has accepted, user 2 has not accepted yet
			# "invited" = user 1 has not accepted, user 2 has accepted
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
	"name": "lifting",
	"locations": ["bfit", "wooden"],
	"size": 2 # Size representation may change when we deal with groups
}
```

## TESTING:
We have implemented 5 test cases in testcases.json as well as server-side test cases in match.js.
Their respective descriptions are in the code in the ‘tests’ folder, as well as our report for part B. We have described them below as well:

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

Three different availability matrix combinations are tested with the assert statements in this function to ensure that the maximum overlap is as expected: one combination ensures that the function returns 0 when there is no match, one combination ensures that if there are two matching time periods, the largest availability is returned, and the third combination ensures that contiguous time periods are detected across multiple days (i.e. if two users are available from late night on one day to the morning on the other day, we must detect this).

Test Case 8: Unit Test for Activity Match

This was a unit test case in JavaScript to determine whether the correct activity was selected given two users’ activity preferences. The true best activity is known prior to the test case since the activity arrays are manually filled with synthetic activity data. The function uses assert statements to check that the expected activity is selected from the lists when determining the best match. Furthermore, the function also uses assert statements to verify that the interest and skill level scores are within bounds of the expected scores (between 0, and the constant used for the maximum score post normalization). 

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
