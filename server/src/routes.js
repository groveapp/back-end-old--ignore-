const { Router } = require('express');



// router.get('/', (req, res) => res.send('Welcome'))
// router.post('/posts', controllers.createPost)

//get ___ by id

// router.get('/users/:userId', controllers.getUserById)
// router.get('/leaders/:leaderId', controllers.getLeaderById)
// router.get('/issues/:issueId', controllers.getIssueById)
// router.get('/viewpoints/:viewpointId', controllers.getViewpointById)
// router.get('/leaderActions/:leaderActionId', controllers.getLeaderActionById)
// router.get('/rawVotes/:voteId', controllers.getRawVoteById)
// router.get('/replies/:replyId', controllers.getReplyById)
// router.get('/organizations/:organizationId', controllers.getOrganizationById)
// router.get('/census/:personId', controllers.getCensusById)
// router.get('/tags/:issueId', controllers.getTagsByIssue)
// router.get('/issues/:tagName', controllers.getIssuesByTag)

// router.get('/users/:organizationId', controllers.getUsersByOrganization)
// router.get('/organizations/:userId', controllers.getOrganizationsByUser)
// router.get('/leaders/:organizationId', controllers.getLeadersByOrganization)
// router.get('/organizations/:leaderId', controllers.getOrganizationsByLeader)
// router.get('/users/:leaderId', controllers.getUsersByLeader)
// router.get('/leaders/:userId', controllers.getLeadersByUser)
// router.get('/leaderActions/:leaderId', controllers.getLeaderActionsByLeader)
// router.get('/leaders/:leaderActionId', controllers.getLeadersByLeaderAction)

// module.exports = router;

module.exports = function(server,controllers) {
    const router = Router();
    router.get('/', (req, res) => res.send('Welcome'))
    router.get('/test/:testId', controllers.test.getTestById)
    router.get('/test', controllers.test.getAllTest)
    router.post('/test', controllers.test.createTest)
    router.put('/test/:testId', controllers.test.updateTest)
    router.delete('/test/:testId', controllers.test.deleteTest)
    return router;
}