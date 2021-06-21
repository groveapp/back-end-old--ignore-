module.exports = function(logger, models) {

    const LeaderAction = models.LeaderAction;

return {
    getLeaderActionById: async (req, res, next) => {
        const {leaderActionId} = req.params;
        await LeaderAction.findOne({where: {id: leaderActionId}}).then( leaderAction => {
            res.send( {leaderAction} )
        }).catch(next)
    },
    // getAllLeaderAction: async (req, res, next) => {
    //     const {leaderActionId} = req.params;
    //     await LeaderAction.findAll().then( leaderAction => {
    //         res.send( {leaderAction: leaderAction.map( v => {return {id: v.id, name: v.name}})} );
    //     }).catch(next)
    // },
    createLeaderAction: async (req, res, next) => {
            const leaderAction = await LeaderAction.create(
                req.body
                ).then(
            leaderAction => {res.send( {leaderAction} )} ).catch(next)
    },
    updateLeaderAction: async (req, res, next) => {
        
            const {leaderActionId} = req.params;
            const [updated] = await LeaderAction.update(req.body, {where: {id: leaderActionId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteLeaderAction: async (req, res, next) => {
            const {leaderActionId} = req.params;
            const deleted = await LeaderAction.destroy(
                {where: { id: leaderActionId}}
                ).then(
            leaderAction => {res.send( {leaderAction} )} ).catch(next)
    },
}


}