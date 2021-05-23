module.exports = function(logger, models) {

    const Reply = models.Reply;

return {
    getReplyById: async (req, res, next) => {
        const {replyId} = req.params;
        await Reply.findOne({where: {id: replyId}}).then( reply => {
            res.send( {reply} )
        }).catch(next)
    },
    getAllReply: async (req, res, next) => {
        const {replyId} = req.params;
        await Reply.findAll().then( reply => {
            res.send( {reply: reply.map( v => {return {id: v.id, name: v.name}})} );
        }).catch(next)
    },
    createReply: async (req, res, next) => {
            const reply = await Reply.create(
                req.body
                ).then(
            reply => {res.send( {reply} )} ).catch(next)
    },
    updateReply: async (req, res, next) => {
        
            const {replyId} = req.params;
            const [updated] = await Reply.update(req.body, {where: {id: replyId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteReply: async (req, res, next) => {
            const {replyId} = req.params;
            const deleted = await Reply.destroy(
                {where: { id: replyId}}
                ).then(
            reply => {res.send( {reply} )} ).catch(next)
    },
}


}