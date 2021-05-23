module.exports = function(logger, models) {

    const Leader = models.Leader;

return {
    getLeaderById: async (req, res, next) => {
        const {leaderId} = req.params;
        await Leader.findOne({where: {id: leaderId}}).then( leader => {
            res.send( {leader} )
        }).catch(next)
    },
    // getAllLeader: async (req, res, next) => {
    //     const {leaderId} = req.params;
    //     await Test.findAll().then( test => {
    //         res.send( {test: test.map( v => {return {id: v.id, name: v.name}})} );
    //     }).catch(next)
    // },
    createLeader: async (req, res, next) => {
            const test = await Leader.create(
                req.body
                ).then(
            leader => {res.send( {leader} )} ).catch(next)
    },
    updateLeader: async (req, res, next) => {
        
            const {leaderId} = req.params;
            const [updated] = await Leader.update(req.body, {where: {id: leaderId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteLeader: async (req, res, next) => {
            const {leaderId} = req.params;
            const deleted = await Leader.destroy(
                {where: { id: leaderId}}
                ).then(
            leader => {res.send( {leader} )} ).catch(next)
    },
}


}