const { Router } = require('express');

// router.get('/users/:userId', controllers.user.getUserById)
// router.get('/users/:organizationId', controllers.user.getUsersByOrganization)
// router.get('/users/:leaderId', controllers.user.getUsersByLeader)
// router.post('/users/:userObj', controllers.user.createUser)
// router.put('/users/:userObj', controllers.user.updateUser)
// router.delete('/users/:userId', controllers.user.deleteUser)

// router.get('/leaders/:leaderId', controllers.leader.getLeaderById)
// router.get('/leaders/:userId', controllers.leader.getLeadersByUser)
// router.get('/leaders/:leaderActionId', controllers.leader.getLeadersByLeaderAction)
// router.get('/leaders/:organizationId', controllers.leader.getLeadersByOrganization)
// router.post('/leaders/:leaderObj', controllers.leader.createLeader)
// router.put('/leaders/:leaderObj', controllers.leader.updateLeader)
// router.delete('/leaders/:leaderId', controllers.leader.deleteLeader)

// router.get('/organizations/:organizationId', controllers.organization.getOrganizationById)
// router.get('/organizations/:userId', controllers.organization.getOrganizationsByUser)
// router.get('/organizations/:leaderId', controllers.organization.getOrganizationsByLeader)
// router.post('/organizations/:organizationObj', controllers.organization.createOrganization)
// router.put('/organizations/:organizationObj', controllers.organization.updateOrganization)
// router.delete('/organizations/:organizationId', controllers.organization.deleteOrganization)

// router.get('/issues/:issueId', controllers.issue.getIssueById)
// router.get('/issues/:userId', controllers.issue.getIssueByUser)
// router.post('/issues/:issueObj', controllers.issue.addIssue)
// router.put('/issues/:issueObj', controllers.issue.updateIssue)
// router.delete('/issues/:issueObj', controllers.issue.deleteIssue)

// router.get('/viewpoints/:viewpointId', controllers.viewpoint.getViewpointById)
// router.get('/viewpoints/:userId', controllers.viewpoint.getViewpointByUser)
// router.get('/viewpoints/:issueId', controllers.viewpoint.getViewpointByIssue)
// router.post('/viewpoints/:viewpointObj', controllers.viewpoint.createViewpoint)
// router.put('/viewpoints/:viewpointObj', controllers.viewpoint.updateViewpoint)
// router.delete('/viewpoints/:viewpointId', controllers.viewpoint.deleteViewpoint)

// router.get('/leaderActions/:leaderId', controllers.leaderAction.getLeaderActionsByLeader)
// router.get('/leaderActions/:leaderActionId', controllers.leaderAction.getLeaderActionById)
// router.post('/leaderActions/:leaderActionObj', controllers.leaderAction.createLeaderAction)
// router.put('/leaderActions/:leaderActionObj', controllers.leaderAction.updateLeaderAction)
// router.delete('/leaderActions/:leaderActionId', controllers.leaderAction.deleteLeaderAction)

// router.get('/rawVotes/:voteId', controllers.rawVotes.getRawVoteById)
// router.get('/rawVotes/:userId', controllers.rawVotes.getRawVotesByUser)
// router.post('/rawVotes/:voteObj', controllers.rawVotes.createRawVote)
// router.put('/rawVotes/:voteObj', controllers.rawVotes.createRawVote)
// router.delete('/rawVotes/:voteId', controllers.rawVotes.deleteRawVote)

// router.get('/replies/:replyId', controllers.replies.getReplyById)
// router.get('/replies/:userId', controllers.replies.getRepliesByUser)
// router.get('/replies/:viewpointId', controllers.replies.getRepliesByViewpoint)
// router.post('/replies/:replyObj', controllers.replies.createReply)
// router.put('/replies/:replyObj', controllers.replies.updateReply)
// router.delete('/replies/:replyId', controllers.replies.deleteReply)

// router.get('/census/:personId', controllers.census.getCensusById)

// router.get('/tags/:issueId', controllers.tag.getTagsByIssue)
// router.get('/issues/:tagId', controllers.issue.getIssuesByTag)
// router.post('/issues/:issueTagObj', controllers.issue.addTag)
// router.delete('/issues/:issueTagObj', controllers.issue.deleteTag)

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