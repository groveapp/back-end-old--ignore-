module.exports = function(logger, models) {

    const User = models.User;
    const User_Organization = models.User_Organization;
    const Profile = models.Profile;

return {
    getUserById: async (req, res, next) => {
        const {userId} = req.params;
        await User.findOne({where: {id: userId}}).then( user => {
            res.send( {user} )
        }).catch(next)
    },

    getUserIdByOrganization: async (req, res, next) => {
        const {organizationId} = req.params;
        await User_Organization.findAll({where: {organizationId: organizationId}}).dataValues.userId
        .then( user => {
            res.send( {user: user.map( v => {return {id: v.id}})} )
        }).catch(next)
    },
    
    // getAllTest: async (req, res, next) => {
    //     const {testId} = req.params;
    //     await Test.findAll().then( test => {
    //         res.send( {test: test.map( v => {return {id: v.id, name: v.name}})} );
    //     }).catch(next)
    // },
    createUser: async (req, res, next) =>  {
            const user = await User.create(
                req.body
                ).then(
            user => {res.send( {user} )} ).catch(next)
    },
    updateUser: async (req, res, next) => {
        
            const {userId} = req.params;
            const [updated] = await User.update(req.body, {where: {id: userId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteUser: async (req, res, next) => {
            const {userId} = req.params;
            const deleted = await User.destroy(
                {where: { id: userId}}
                ).then(
            user => {res.send( {user} )} ).catch(next)
    },
}


}