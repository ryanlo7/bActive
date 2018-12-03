const assert = require('assert');
var matchModule = require('../../bactive/routes/match.js');
var currUser = undefined;
var potentialMatch = undefined;

/**
	* Setup function fills mock user data for current user and the potential match.
*/
beforeEach('Setting up the user data.', function(){
	currUser = createMockCurrentUser();
	potentialMatch = createMockPotentialMatchUser();
});

/**
	* Teardown function clears the mock data after each test.
*/
afterEach('learing the user data. Setting up the users', function(){
  currUser = undefined;
  potentialMatch = undefined;
});

/**
	* Test to ensure that match user correctly finds the best
	* activity between two users, with the correct match score
	* and event details. Assert statements check to ensure that
	* the scores are within reasonable range, and the event details
	* match the expected details (which are known).
*/
it('Match User Test', () => {
	var result = matchModule.matchUser(currUser, potentialMatch);
	assert.equal(result["event"], "Running");
	assert.equal(result["score"] > 26.6 && result["score"] < 26.7, true);
	assert.equal(result["user_id"], 0);
	assert.equal(result["time"][0], 2);
	assert.equal(result["time"][1], 1);
	assert.equal(result["match_name"], "Bob");
	assert.equal(result["match_id"], 1);
	assert.equal(result["match_email"], "bob@ucla.edu");
});


/**
	* Test to ensure that the scores for the components of the total 
	* activity score are within correct ranges. We verify the skill
	* score and the interest score, which are the two components of the
	* activity score.
*/
it('Match Activity Score Computation Test', () => {
	var curr_user_activities = currUser["activities"];
	var potential_match_activities = potentialMatch["activities"];

	assert.equal(matchModule.getBestActivityMatch(curr_user_activities, 
		potential_match_activities)["skill_score"] > 0, true);
	assert.equal(matchModule.getBestActivityMatch(curr_user_activities, 
		potential_match_activities)["skill_score"] <= matchModule.NORMALIZED_BASE, true);
	assert.equal(matchModule.getBestActivityMatch(curr_user_activities, 
		potential_match_activities)["interest_score"] > 0, true);
	assert.equal(matchModule.getBestActivityMatch(curr_user_activities, 
		potential_match_activities)["interest_score"] <= matchModule.NORMALIZED_BASE, true);
});

/**
	* Test to ensure that the maximum match availability overlap is correct. 
	* We do this by checking that the correct number of maximum overlapping
	* intervals is computed by the programming by comparing it to the known
	* number of maximum overlapping intervals. 
	* We test three different types of inputs. 
	* The first input type is if there are multiple overlaps. We must be sure to pick the largest
	* time overlap. 
	* The second input type is if the time overlap spans across different days. We must
	* find the largest subsequence across multiple days.
	* The third input type is if there is no overlap in time availabilities for two users.
*/
it('Match Availability Score Computation Test', () => {
	// Input type 1: Verify that we select the largest overlap.
	var curr_user_availability = currUser["availability"];
	var potential_match_availability = potentialMatch["availability"];	
	assert.equal(matchModule.getAvailabilityMatch(curr_user_availability, 
		potential_match_availability)["periods"], 4);

	// Input type 2: Verify that we compute overlap across days.
	resetAvailabilities(curr_user_availability, true);
	resetAvailabilities(potential_match_availability, true);
	assert.equal(matchModule.getAvailabilityMatch(curr_user_availability, 
		potential_match_availability)["periods"], matchModule.DAYS*matchModule.TIME_SLOTS);

	// Input type 3: Verify that we compute availability across days.
	resetAvailabilities(curr_user_availability, false);
	resetAvailabilities(potential_match_availability, false);
	assert.equal(matchModule.getAvailabilityMatch(curr_user_availability, 
		potential_match_availability)["periods"], 0);
});

/**
	* Mock data for potential match user for match user test.
*/
function createMockCurrentUser() {
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
function createMockPotentialMatchUser() {
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
	* Set all availabilites to true/false, for testing purposes.
	* @param {Array<boolean>} availability Availability array of time slots,
	* where the boolean indicates whether the user is free at the time.
	* @param {boolean} resetTo Whether to reset all availabilities to true
	* or false. 
*/
function resetAvailabilities(availability, resetTo) {
	for (var i = 0; i < matchModule.DAYS; i++) {
		for (var j = 0; j < matchModule.TIME_SLOTS; j++) {
			availability[i][j] = resetTo;		
		}
	}
}
