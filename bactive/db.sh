use bActiveServer

db.Users.drop()
db.Activities.drop()
db.Values.drop()

db.createCollection("Users")
db.createCollection("Activities")
db.createCollection("Values")

db.Values.insert({"name": "Users", "maxUserId": 2})

db.Users.insert({ 	
					"userId": 0,
					"email": "user1@ucla.edu", 
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"activities": [
						{"name": "basketball", "interest": 5, "skill": 5},
						{"name": "lifting", "interest": 4, "skill": 3}
					],
					"availability": [],
					"events": [
						{
							"userIds": [1], 
							"activity": "lifting", 
							"day": "monday",
							"time": "1AM-2AM", 
							"status": "matched",
							"location": "bfit"
						}
					]
})
db.Users.insert({ 	
					"userId": 1,
					"email": "user2@ucla.edu", 
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"activities": [
						{"name": "basketball", "interest": 5, "skill": 5},
						{"name": "lifting", "interest": 4, "skill": 3}
					],
					"availability": [],
					"events": [
						{
							"userIds": [0], 
							"activity": "lifting", 
							"day": "monday",
							"time": "1AM-2AM", 
							"status": "matched",
							"location": "bfit"
						}
					]
})

db.Users.find({})