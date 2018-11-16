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
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)===0, 
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
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)===SECOND_OVERLAP, 
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
	assert(matchModule.getAvailabilityMatch(curr_user_availability, match_availability)===matchModule.DAYS*matchModule.TIME_SLOTS, 
		"Availability match incorrect: expected " + DAYS*TIME_SLOTS + " but got " + 
		matchModule.getAvailabilityMatch(curr_user_availability, match_availability) + ".");
}


/**
	* Test for activity matching. Ensures that the "best" activity
	* match is selected as expected.
*/
function testGetBestActivityMatch() {
	var curr_user_activities = [{ "name" : "basketball", "interest" : 1, "skill" : 5 }, 
	{ "name" : "lifting", "interest" : 2, "skill" : 4 },
	{ "name" : "swimming", "interest" : 5, "skill" : 3 }];
	
	var potential_match_activities = [{ "name" : "basketball", "interest" : 5, "skill" : 5 }, 
	{ "name" : "lifting", "interest" : 5, "skill" : 1} ];

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["name"]==="lifting", 
		"Activity match incorrect: expected lifting" + " but got " + 
		matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["name"] + ".");

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["skill_score"] > 0, 
		"Skill score must be positive.");
	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["skill_score"] < NORMALIZED_BASE, 
		"Skill score cannot exceed maximum possible normalized score.");

	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["interest_score"] > 0, 
		"Interest score must be positive.");
	assert(matchModule.getBestActivityMatch(curr_user_activities, potential_match_activities)["interest_score"] < NORMALIZED_BASE, 
		"Interest score cannot exceed maximum possible normalized score.");
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

testGetAvailabilityMatch();
testGetBestActivityMatch();