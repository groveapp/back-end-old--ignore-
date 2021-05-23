const test = require('./test.js');
const issue = require('./issues.js')
const leaderAction = require('./leaderActions.js')
const leader = require('./leaders.js')
const organization = require('./organizations.js')
const rawVote = require('./rawVotes.js')
const reply = require('./replies.js')
const user = require('./users.js')
const viewpoint = require('./viewpoints.js')
const census = require('./census.js')


module.exports = function(logger, models) {

	return Promise.resolve( {
		test: test(logger, models),
		issue: issue(logger, models),
		leaderAction: leaderAction(logger, models),
		leader: leader(logger, models),
		organization: organization(logger, models),
		rawVote: rawVote(logger, models),
		reply: reply(logger, models),
		user: user(logger, models),
		viewpoint: viewpoint(logger, models),
		census: census(logger, models),
	});
}
