
export default (app) => {

    app.get("/api/getIssueById", async (req, res, next) => {
        const {issueId} = req.params;
        await Issue.findOne({where: {id: issueId}}).then( issue => {
            res.send( {issue} )
        }).catch(next)
    });


    // getAllIssue: async (req, res, next) => {
    //     const {issueId} = req.params;
    //     await Issue.findAll().then( issue => {
    //         res.send( {issue: issue.map( v => {return {id: v.id, name: v.name}})} );
    //     }).catch(next)
    // },


    app.get("/api/createIssue", async (req, res, next) => {
            const issue = await Issue.create(
                req.body
                ).then(
            issue => {res.send( {issue} )} ).catch(next)
    });

    app.get("/api/updateIssue", async (req, res, next) => {

            const {issueId} = req.params;
            const [updated] = await Issue.update(req.body, {where: {id: issueId}}).then(
                updated => {res.send( {updated} )}).catch(next)
    });

    app.get("deleteIssue", async (req, res, next) => {
            const {issueId} = req.params;
            const deleted = await Issue.destroy(
                {where: { id: issueId}}
                ).then(
            issue => {res.send( {issue} )} ).catch(next)
    });
}
