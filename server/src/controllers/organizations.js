module.exports = function(logger, models) {

    const Organization = models.Organization;

return {
    getOrganizationById: async (req, res, next) => {
        const {orgId} = req.params;
        await Organization.findOne({where: {id: orgId}}).then( org => {
            res.send( {org} )
        }).catch(next)
    },
    // getAllOrganization: async (req, res, next) => {
    //     const {orgId} = req.params;
    //     await Organization.findAll().then( org => {
    //         res.send( {org: org.map( v => {return {id: v.id, name: v.name}})} );
    //     }).catch(next)
    // },
    createOrganization: async (req, res, next) => {
            const org = await Organization.create(
                req.body
                ).then(
            org => {res.send( {org} )} ).catch(next)
    },
    updateOrganization: async (req, res, next) => {
        
            const {orgId} = req.params;
            const [updated] = await Organization.update(req.body, {where: {id: orgId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    },   
    deleteOrganization: async (req, res, next) => {
            const {orgId} = req.params;
            const deleted = await Organization.destroy(
                {where: { id: orgId}}
                ).then(
            org => {res.send( {org} )} ).catch(next)
    },
}


}