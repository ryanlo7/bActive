var matchModule = require('../bactive/routes/match.js');

/**
	* Test cases for whether we correctly find the maximum number of increasing intervals.
	* We test three different types of inputs. 
	* The first case is if there is no overlap in time availabilities for two users.
	* The second case is if there are multiple overlaps. We must be sure to pick the largest
	* time overlap. 
	* The third case is if the time overlap spans across different days. We must
	* find the largest subsequence across multiple days.
*/
function testGetAvailabilityMatch() {
	var curr_user_availability = [];
	var match_availability = [];

	const FIRST_OVERLAP = 3;
	const SECOND_OVERLAP = 5;

	// Test case for no overlap between users.
	for (var i = 0; i < matchModule.DAYS; i++) {
		var row = [];
		for (var j = 0; j < matchModule.TIME_SLOTS; j++) {
			row.push(false);
		}
		curr_user_availability.push(row);
		match_availability.push(row);
	}
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)["periods"]===0, 
		"Availability match incorrect: expected 0 but got " + 
		matchModule.getAvailabilityMatch(curr_user_availability, match_availability)  +".");
	
	// Test case for some overlap between users (selecting largest overlap of possibilities).
	for (var j = 0; j < FIRST_OVERLAP; j++) {
		curr_user_availability[0][j] = true;
		match_availability[0][j] = true;
	}
	for (var j = 0; j < SECOND_OVERLAP; j++) {
		curr_user_availability[1][j] = true;
		match_availability[1][j] = true;
	}
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)["periods"]===SECOND_OVERLAP, 
		"Availability match incorrect: expected " + SECOND_OVERLAP + " but got " + 
		matchModule.getAvailabilityMatch(curr_user_availability, match_availability) + ".");
	
	// Test case for computing overlap across different days (i.e. if the maximum time length
	// starts on one day and goes until another day).
	for (var i = 0; i < matchModule.DAYS; i++) {
		for (var j = 0; j < matchModule.TIME_SLOTS; j++) {
			curr_user_availability[i][j] = true;
			match_availability[i][j] = true;
		}
	}
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)["periods"]===matchModule.DAYS*matchModule.TIME_SLOTS, 
		"Availability match incorrect: expected " + matchModule.DAYS*matchModule.TIME_SLOTS + " but got " + 
		matchModule.getAvailabilityMatch(curr_user_availability, match_availability) + ".");
}


/**
	* Test for activity matching. Ensures that the "best" activity
	* match is selected as expected.
*/
function testGetBestActivityMatch() {
	var curr_user_activities = [{ "name" : "Basketball", "interest" : 1, "skill" : 5 }, 
	{ "name" : "Lifting", "interest" : 2, "skill" : 4 },
	{ "name" : "Swimming", "interest" : 5, "skill" : 3 }];
	
	var potential_match_activities = [{ "name" : "Basketball", "interest" : 5, "skill" : 5 }, 
	{ "name" : "Lifting", "interest" : 5, "skill" : 1} ];

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["name"]==="Lifting", 
		"Activity match incorrect: expected lifting" + " but got " + 
		matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["name"] + ".");

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["skill_score"] > 0, 
		"Skill score must be positive.");
	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["skill_score"] < matchModule.NORMALIZED_BASE, 
		"Skill score cannot exceed maximum possible normalized score.");

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["interest_score"] > 0, 
		"Interest score must be positive.");
	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["interest_score"] < matchModule.NORMALIZED_BASE, 
		"Interest score cannot exceed maximum possible normalized score.");
}

/**
	* Mock data for current user in match user test.
*/
function createTestCurrentUser() {
	var user = {};
	user["name"] = "Alice";
	user["userId"] = 0;
	user["email"] = "alice@ucla.edu";
	var activities = [{ "name" : "Basketball", "interest" : 4, "skill" : 5 }, 
	{ "name" : "Lifting", "interest" : 2, "skill" : 4 },
	{ "name" : "Swimming", "interest" : 5, "skill" : 3 },
	{ "name" : "Running", "interest" : 5, "skill" : 2} ];
	var availability = [];
	const FREE_SLOTS = 6;

	for (var i = 0; i < matchModule.DAYS; i++) {
		var row = [];
		for (var j = 0; j < matchModule.TIME_SLOTS; j++) {
			row.push(false);
		}
		availability.push(row);
	}
	for (var j = 0; j < FREE_SLOTS; j++) {
		availability[2][j] = true;
	}
	user["activities"] = activities;
	user["availability"] = availability;
	return user;
}

/**
	* Mock data for potential match user for match user test.
*/
function createTestPotentialMatchUser() {
	var user = {};
	user["name"] = "Bob";
	user["userId"] = 1;
	user["email"] = "bob@ucla.edu";
	var activities = [{ "name" : "Basketball", "interest" : 4, "skill" : 5}, 
	{ "name" : "Running", "interest" : 5, "skill" : 2} ];
	var availability = [];
	const FREE_SLOTS = 4;

	for (var i = 0; i < matchModule.DAYS; i++) {
		var row = [];
		for (var j = 0; j < matchModule.TIME_SLOTS; j++) {
			row.push(false);
		}
		availability.push(row);
	}
	for (var j = 1; j <= FREE_SLOTS; j++) {
		availability[2][j] = true;
	}
	user["activities"] = activities;
	user["availability"] = availability;
	return user;
}

/**
	* Test that the users are matched correctly with the best activity as
	* expected and an expected score.
*/
function testMatchUser() {
	var currUser = createTestCurrentUser();
	var potentialUser = createTestPotentialMatchUser();
	var result = matchModule.matchUser(currUser, potentialUser);
	assert(result["event"] === "Running", "Expected activity was running, but actual activity is " + result);
	// Expected score is a double between 26.6 and 26.7
	assert(result["score"] > 26.6 && result["score"] < 26.7);
	assert(result["time"][0] === 2);
	assert(result["time"][1] === 1);
	console.log(result);
}

/**
	* Assert function for test cases.
	* @param {boolean} condition Whether the condition was met
	* @param {string} message Error message if assertion fails
	*
*/
function assert(condition, message) {
	if (!condition) {
		if (message) {
			throw new Error("ASSERTION FAILED: " + message);
		}
		throw new Error("Test case failed!");
	}

}

/**
	* Run all test cases for the match module.
*/
function runAllMatchTests() {
	testGetAvailabilityMatch();
	testGetBestActivityMatch();
	testMatchUser();	
}

runAllMatchTests();