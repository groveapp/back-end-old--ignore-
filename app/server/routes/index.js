//const test = require('./test.js');
const issue = require('./issue.js')
//const leaderAction = require('./leaderAction.js')
const leader = require('./leader.js')
const organization = require('./organization.js')
const rawVote = require('./rawVote.js')
const profile = require('./profile.js')
const user = require('./user.js')
const viewpoint = require('./viewpoint.js')
const census = require('./census.js')


module.exports = function(logger, models) {

	return Promise.resolve( {
		//test: test(logger, models),
		issue: issue(logger, models),
		//leaderAction: leaderAction(logger, models),
		leader: leader(logger, models),
		organization: organization(logger, models),
		rawVote: rawVote(logger, models),
		profile: profile(logger, models),
		user: user(logger, models),
		viewpoint: viewpoint(logger, models),
		census: census(logger, models),
	});
}
