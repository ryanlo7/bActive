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
					"events": [
						{"eventId": 0, "rated": []}
					]
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
					"events": [
						{"eventId": 0, "rated": []}
					]
})

db.Users.find({})

db.Activities.insert([
	{
		"name": "Lifting",
		"locations": ["Bfit", "Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
	},
	{
		"name": "Running",
		"locations": ["Drake Stadium", "Perimeter run"],
		"sizeMin": 2,
		"sizeMax": 2
	},
	{
		"name": "Swimming",
		"locations": ["Sunset Rec", "SAC", "North Pool"],
		"sizeMin": 2,
		"sizeMax": 2
	},
	{
		"name": "Basketball",
		"locations": ["Hitch Courts", "Wooden"],
		"sizeMin": 2,
		"sizeMax": 10
	},
	{
		"name": "Soccer",
		"locations": ["IM Field"],
		"sizeMin": 2,
		"sizeMax": 12
	},
	{
		"name": "Tennis",
		"locations": ["LA Tennis Courts"],
		"sizeMin": 2,
		"sizeMax": 4
	},
	{
		"name": "Badminton",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 4
	},
	{
		"name": "Climbing",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
	},
	{
		"name": "Squash",
		"locations": ["Wooden"],
		"sizeMin": 2,
		"sizeMax": 2
	},
	{
		"name": "Ultimate Frisbee",
		"locations": ["IM Field"],
		"sizeMin": 2,
		"sizeMax": 14
	}
])

db.Events.insert(
	{
		"eventId": 0,
		"userIds": [0, 1],
		"invitedIds": [0, 1],
		"activity": "Lifting",
		"startTime": 1518669344517,
		"endTime": 1518670344517,
		"status": "matched",
		"location": "Bfit"
	}
)
