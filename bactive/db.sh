use bActiveServer

db.Users.drop()
db.Activities.drop()
db.Values.drop()

db.createCollection("Users")
db.createCollection("Activities")
db.createCollection("Values")
db.createCollection("Events")

db.Values.insert(
	{"name": "Users", "maxUserId": 2},
	{"name": "Events", "maxEventId": 1}
)

db.Users.insert({
					"userId": 0,
					"name": "Thing One",
					"email": "user1@ucla.edu",
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"rating": { "scoreSum": 100, "numRatings": 25},
					"activities": [
						{"name": "basketball", "interest": 5, "skill": 5},
						{"name": "lifting", "interest": 4, "skill": 3}
					],
					"availability": [
						[true, true, true, true, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, true, true,true, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false]
					],
					"events": [0]
})
db.Users.insert({
					"userId": 1,
					"name": "Thing Two",
					"email": "user2@ucla.edu",
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"rating": { "scoreSum": 120, "numRatings": 25},
					"activities": [
						{"name": "basketball", "interest": 5, "skill": 5},
						{"name": "lifting", "interest": 4, "skill": 3}
					],
					"availability": [
						[true, true, true, true, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, true, true,true, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
						[false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false]
					],
					"events": [0]
})

db.Users.find({})

db.Activities.insert({
		"name": "lifting",
		"locations": ["Bfit", "Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
})
db.Activities.insert({
		"name": "running",
		"locations": ["Drake Stadium", "Perimeter run"],
		"sizeMin": 2,
		"sizeMax": 2
})
db.Activities.insert({
		"name": "swimming",
		"locations": ["Sunset Rec", "SAC", "North Pool"],
		"sizeMin": 2,
		"sizeMax": 2
})
db.Activities.insert({
		"name": "basketball",
		"locations": ["Hitch Courts", "Wooden"],
		"sizeMin": 2,
		"sizeMax": 10
})
db.Activities.insert({
		"name": "soccer",
		"locations": ["IM Field"],
		"sizeMin": 2,
		"sizeMax": 12
})
db.Activities.insert({
		"name": "tennis",
		"locations": ["LA Tennis Courts"],
		"sizeMin": 2,
		"sizeMax": 4
})
db.Activities.insert({
		"name": "badminton",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 4
})
db.Activities.insert({
		"name": "climbing",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
})
db.Activities.insert({
		"name": "squash",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
})
db.Activities.insert({
		"name": "ultimate frisbee",
		"locations": ["IM Field"],
		"sizeMin": 2,
		"sizeMax": 14
})

db.Activities.find({})


db.Events.insert(
	{
		"eventId": 0,
		"acceptedIds": [], 
		"invitedIds": [0, 1],
		"activity": "lifting",
		"startTime": 1518669344517,
		"endTime": 1518670344517,
		"status": "matched",
		"location": "Bfit"
	}
)
