use bActiveServer

db.Users.drop()
db.Activities.drop()
db.Values.drop()

# like creating a MySQL table in database. So this is a collection of users in bActiveServer.
db.createCollection("Users")
db.createCollection("Activities")
db.createCollection("Values")

# insert to keep track of the max userId to use when making new users
db.Values.insert({"name": "Users", "maxUserId": 2})

# Each user has the following fields:
# 	userId: an integer to represent the user's unique user id.
# 	email: a string to represent the user's email/facebook account
# 	password: string for password but when stored in database will be encrypted with bcrypt
# 	activities: a list of all user's activities with their interest and skill level
# 	events: a list of all user's events they signed up for. 
#	availability: weekly availability every half hour
# user1's and user2's password is the string "password" but encrypted. 

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