use bActiveServer

db.Users.drop()

# like creating a MySQL table in database. So this is a collection of users in bActiveServer.
db.createCollection("Users")


# Each user has the following fields:
# 	userId: an integer to represent the user's unique user id.
# 	email: a string to represent the user's email/facebook account
# 	password: string for password but when stored in database will be encrypted with bcrypt
# 	activities: a list of all user's activities with their interest and skill level
# 	events: a list of all user's events they signed up for. Will contain list of all other users who enrolled 
# user1's and user2's password is the string "password" but encrypted. 


db.Users.insert({ 	
					"userId": 0,
					"email": "user1@ucla.edu", 
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"activities": null,
					"events": null 
})
db.Users.insert({ 	
					"userId": 1,
					"email": "user2@ucla.edu", 
					"password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
					"activities": null,
					"events": null 
})

db.Users.find({})