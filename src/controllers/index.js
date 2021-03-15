const leader = require('./leader.js');


module.exports = function(logger, models) {

	return Promise.resolve( {
		leader: leader(logger, models)
	});
}

