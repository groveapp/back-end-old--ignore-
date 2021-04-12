const test = require('./test.js');
const issues = require('./issues.js')
const leaderActions = require('./leaderActions.js')
const leaders = require('./leaders.js')
const organizations = require('./organizations.js')
const rawVotes = require('./rawVotes.js')
const replies = require('./replies.js')
const users = require('./users.js')
const viewpoints = require('./viewpoints.js')
const census = require('./census.js')


module.exports = function(logger, models) {

	return Promise.resolve( {
		test: test(logger, models),
		issues: issues(logger, models),
		leaderActions: leaderActions(logger, models),
		leaders: leaders(logger, models),
		organizations: organizations(logger, models),
		rawVotes: rawVotes(logger, models),
		replies: replies(logger, models),
		users: users(logger, models),
		viewpoints: viewpoints(logger, models),
		census: census(logger, models),
	});
}
