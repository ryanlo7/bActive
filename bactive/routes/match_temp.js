const MAX_AVAILABILITY_SCORE = 6;	
const MAX_INTEREST_SCORE = 7.5;
const MAX_SKILL_SCORE = 5;
const NORMALIZED_BASE = 10.0;

/**
	* Key function to generate matches for a single user, given the user id.
	* @param {number} user An integer that represents a user id.
	* @return {!Array<number>} A sorted array of matching users, from highest score match
	* to lowest score match.
*/
function matchUsers(user) {
	// Add in code to get data from database.
	// Pass in objects of data for two users into match user function to get score match.
	// Keep mapping of each user to score match (i.e. dictionary). Make sure that
	// match is not attmepted for user with himself/herself.
}

/**
	* Compute a match score for two users.
	* @param {Object} curr_user An object containing the user profile information for the logged
	* in user.
	* @param {Object} potential_match An object containing the user profile information for the the
	* match candidate for the logged in user.
	* @return {number} A score representing how good the match is between the logged in user
	* and the potential match. This match is based on availability, interest level, and skill level.
*/
function matchUser(curr_user, potential_match) {

	// Call each of the functions by passing in the correct fields from the user data objects
	// to the scoring functions. If either availability of interest scores are 0, then this
	// function should return 0.
}


/**
	* Returns a score for the availability match between two users. 
	* This is done by computing the largest overlapping block of time between the two users.
	* This score is capped at a maximum defined by a constant MAX_AVAILABILITY_SCORE. 
	* @param {Array<Array<<boolean>>} curr_user_availability A list of true/false availabilities
	* for the current user for each thirty-minute time slot on each day of the week.
	* @param {Array<Array<<boolean>>} potential_match_availability A list of true/false availabilities
	* for the potentialMatch for each thirty-minute time slot on each day of the week.
	* @return {number} A score representing how good the time availability match is, where 0 represents
	* a failed match and MAX_AVAILABILITY_SCORE is the highest possible match score for this category.
*/

function getAvailabilityMatchScore(curr_user_availability, potential_match_availability) {
	var num_overlapping_periods = getAvailabilityMatch(curr_user_availability, potential_match_availability);

	// Thirty minutes is two short for an activity, so a match requires at least an hour of matched times.
	if (num_overlapping_periods <= 1) {
		num_overlapping_periods = 0;
	} else if (num_overlapping_periods > MAX_AVAILABILITY_SCORE) {
		num_overlapping_periods = MAX_AVAILABILITY_SCORE;
	}
	return computeNormalizedScore(num_overlapping_periods, MAX_AVAILABILITY_SCORE);
}


/**
	* Returns maximum number of consecutive overlapping half-hours for two users. This could
	* span over multiple days of the week, as long as it is a consecutive chunk of hours (i.e.
	* 11:00 PM on Monday until 1 AM on Tuesday).
	* @param {Array<Array<<boolean>>} curr_user_availability A list of true/false availabilities
	* for the current user for each thirty-minute time slot on each day of the week.
	* @param {Array<Array<<boolean>>} potential_match_availability A list of true/false availabilities
	* for the potentialMatch for each thirty-minute time slot on each day of the week.
	* @return {number} The maximum number of overlapping consecutive half-hours between the two users.
*/
function getAvailabilityMatch(curr_user_availability, potential_match_availability) {
	var max_sequence = 0;
	var curr_sequence = 0;

	for (var i = 0; i < curr_user_availability.length; i++) {
		for (var j = 0; j < curr_user_availability[i].length; j++) {
			if (curr_user_availability[i][j] && potential_match_availability[i][j]) {
				curr_sequence++;
				if (curr_sequence > max_sequence) {
					max_sequence = curr_sequence;
				}
			}
		 	else {
				curr_sequence = 0;
			}
		}
	}

	return max_sequence;
}

/**
	* Returns a score for interest match. The computation most highly weights the current
	* user's interests, and then weights the other user's interest level with secondary importance.
	* Note that an interest level of 1 is the lowest possible interest for an activity, so this
	* automatically results in a score of 0 for the interest match.
	* @param {number} curr_user_interest Interest level for current user
	* @param {number} potential_match_interest Interest level for other user
	* @return {number} A normalized score representing the interest match between two users.
*/
function computeInterestMatch(curr_user_interest, potential_match_interest) {
	var unnormalized_score = curr_user_interest + 0.5*(potential_match_interest);
	if (curr_user_interest == 1 || potential_match_interest == 1) {
		unnormalized_score = 0;
	}
	return computeNormalizedScore(unnormalized_score, MAX_INTEREST_SCORE);
}

/**
	* Returns a score for skill match. The score is high if the two users have similar skill levels.
	* @param {number} curr_user_skill Skill level of current user
	* @param {number} potential_match_skill Skill level of potential match
	* @return {number} A normalized score representing the skill level match between two users.
*/
function computeSkillMatch(curr_user_skill, potential_match_skill) {
	var unnormalized_score = MAX_SKILL_SCORE - Math.abs(curr_user_skill-potential_match_skill)
	return computeNormalizedScore(unnormalized_score, MAX_SKILL_SCORE);
}

/**
	* Normalizes the score for the three categories, so all three types of scores
	* have the same maximum and minimum values.
	* @param {number} curr_score Current score for that category
	* @param {number} curr_max Maximum score for that cateogry
	* @return {number} A normalized score representing the match score between two users for one category.
*/
function computeNormalizedScore(curr_score, curr_max) {
	return curr_score/curr_max*NORMALIZED_BASE;
}

// TODO: delete testing code below.
var arr1 = [[true, true], [true, true]];
var arr2 = [[true, true], [true, true]];
var activityList1 = [{ "name" : "basketball", "interest" : 5, "skill" : 5 }, 
					{ "name" : "lifting", "interest" : 4, "skill" : 3 } ];
var activityList2 = [{ "name" : "basketball", "interest" : 5, "skill" : 5 }, 
					{ "name" : "lifting", "interest" : 4, "skill" : 3 } ];
console.log('matches: ' + getAvailabilityMatchScore(arr1, arr2));
// console.log('best activity match: ' + getActivityMatch(activityList1, activityList2))
console.log(computeSkillMatch(5, 1));