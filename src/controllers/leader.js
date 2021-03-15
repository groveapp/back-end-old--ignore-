
module.exports = function(logger, models) {

	const Leader = models.leader;

	return {

		getAll: (req,res,next) => {
 			Leader.findAll().then( leaders => {
	
				res.send( {
					leaders: leaders.map( v =>  {
						return {
							id: v.id
						}
					})
					
				});
				return next();
			});
			
		}
	}

}
