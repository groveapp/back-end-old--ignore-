module.exports = function(logger, models) {

    const Test = models.Test;

return {
    getTestById: async (req, res, next) => {
        const {testId} = req.params;
        await Test.findOne({where: {id: testId}}).then( test => {
            res.send( {test} )
        }).catch(next)
    },
    getAllTest: async (req, res, next) => {
        const {testId} = req.params;
        await Test.findAll().then( test => {
            res.send( {test: test.map( v => {return {id: v.id, name: v.name}})} );
        }).catch(next)
    },
    createTest: async (req, res, next) => {
            const test = await Test.create(
                req.body
                ).then(
            test => {res.send( {test} )} ).catch(next)
    },
    updateTest: async (req, res, next) => {
        
            const {testId} = req.params;
            const [updated] = await Test.update(req.body, {where: {id: testId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteTest: async (req, res, next) => {
            const {testId} = req.params;
            const deleted = await Test.destroy(
                {where: { id: testId}}
                ).then(
            test => {res.send( {test} )} ).catch(next)
    },
}


}