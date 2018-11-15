const MAX_AVAILABILITY_SCORE = 6;	

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

}


/**
	* Returns a score for the availability match between two users. 
	* This is done by computing the largest overlapping block of time between the two users.
	* This score is capped at a maximum defined by a constant MAX_AVAILABILITY_SCORE. 
	* @param {Array<Array<<boolean>>} curr_user_availability A list of true/false availabilities
	* for the current user for each thirty-minute time slot.
	* @param {Array<Array<<boolean>>} potential_match_availability A list of true/false availabilities
	* for the potentialMatch for each thirty-minute time slot.
	* @return {number} A score representing how good the time availability match is, where 0 represents
	* a failed match and MAX_AVAILABILITY_SCORE is the highest possible match score for this category.
*/

function getAvailabilityMatchScore(curr_user_availability, potential_match_availability) {
	var num_overlapping_periods = getAvailabilityMatch(curr_user_availability, potential_match_availability);

	// Thirty minutes is two short for an activity, so a match requires at least an hour of matched times.
	if (num_overlapping_periods <= 1) {
		return 0;
	} else if (num_overlapping_periods > MAX_AVAILABILITY_SCORE) {
		return MAX_AVAILABILITY_SCORE;
	}
	return num_overlapping_periods;
}


/**
	* Returns maximum number of consecutive overlapping half-hours for two users. This could
	* span over multiple days of the week, as long as it is a consecutive chunk of hours (i.e.
	* 11:00 PM on Monday until 1 AM on Tuesday).
	* @param {Array<Array<<boolean>>} curr_user_availability A list of true/false availabilities
	* for the current user for each thirty-minute time slot.
	* @param {Array<Array<<boolean>>} potential_match_availability A list of true/false availabilities
	* for the potentialMatch for each thirty-minute time slot.
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

// TODO: delete testing code below.
var arr1 = [[true, true], [true, true]];
var arr2 = [[true, true], [true, true]];
console.log('matches: ' + getAvailabilityMatchScore(arr1, arr2));