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
