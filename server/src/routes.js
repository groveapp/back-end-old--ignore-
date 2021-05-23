const { Router } = require('express');

// router.get('/users/:organizationId', controllers.user.getUsersByOrganization)
// router.get('/users/:leaderId', controllers.user.getUsersByLeader)

// router.get('/leaders/:userId', controllers.leader.getLeadersByUser)
// router.get('/leaders/:leaderActionId', controllers.leader.getLeadersByLeaderAction)
// router.get('/leaders/:organizationId', controllers.leader.getLeadersByOrganization)

// router.get('/organizations/:userId', controllers.organization.getOrganizationsByUser)
// router.get('/organizations/:leaderId', controllers.organization.getOrganizationsByLeader)

// router.get('/issues/:userId', controllers.issue.getIssueByUser)

// router.get('/viewpoints/:userId', controllers.viewpoint.getViewpointByUser)
// router.get('/viewpoints/:issueId', controllers.viewpoint.getViewpointByIssue)

// router.get('/leaderActions/:leaderId', controllers.leaderAction.getLeaderActionsByLeader)

// router.get('/rawVotes/:userId', controllers.rawVotes.getRawVotesByUser)

// router.get('/replies/:userId', controllers.replies.getRepliesByUser)
// router.get('/replies/:viewpointId', controllers.replies.getRepliesByViewpoint)

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

    router.get('/users/:userId', controllers.user.getUserById)
    router.post('/users', controllers.user.createUser)
    router.put('/users/:userId', controllers.user.updateUser)
    router.delete('/users/:userId', controllers.user.deleteUser)

    router.get('/leaders/:leaderId', controllers.leader.getLeaderById)
    router.post('/leaders', controllers.leader.createLeader)
    router.put('/leaders/:leaderId', controllers.leader.updateLeader)
    router.delete('/leaders/:leaderId', controllers.leader.deleteLeader)

    router.get('/organizations/:organizationId', controllers.organization.getOrganizationById)
    router.post('/organizations', controllers.organization.createOrganization)
    router.put('/organizations/:organizationId', controllers.organization.updateOrganization)
    router.delete('/organizations/:organizationId', controllers.organization.deleteOrganization)

    router.get('/issues/:issueId', controllers.issue.getIssueById)
    router.post('/issues', controllers.issue.createIssue)
    router.put('/issues/:issueId', controllers.issue.updateIssue)
    router.delete('/issues/:issueObj', controllers.issue.deleteIssue)

    router.get('/viewpoints/:viewpointId', controllers.viewpoint.getViewpointById)
    router.post('/viewpoints', controllers.viewpoint.createViewpoint)
    router.put('/viewpoints/:viewpointId', controllers.viewpoint.updateViewpoint)
    router.delete('/viewpoints/:viewpointId', controllers.viewpoint.deleteViewpoint)

    router.get('/leaderActions/:leaderActionId', controllers.leaderAction.getLeaderActionById)
    router.post('/leaderActions', controllers.leaderAction.createLeaderAction)
    router.put('/leaderActions/:leaderActionId', controllers.leaderAction.updateLeaderAction)
    router.delete('/leaderActions/:leaderActionId', controllers.leaderAction.deleteLeaderAction)

    router.get('/rawVotes/:voteId', controllers.rawVote.getRawVoteById)
    router.post('/rawVotes/:voteObj', controllers.rawVote.createRawVote)
    router.put('/rawVotes/:voteObj', controllers.rawVote.createRawVote)
    router.delete('/rawVotes/:voteId', controllers.rawVote.deleteRawVote)

    router.get('/replies/:replyId', controllers.reply.getReplyById)
    router.post('/replies/:replyObj', controllers.reply.createReply)
    router.put('/replies/:replyObj', controllers.reply.updateReply)
    router.delete('/replies/:replyId', controllers.reply.deleteReply)

    router.get('/census/:personId', controllers.census.getCensusById)

    return router;
}