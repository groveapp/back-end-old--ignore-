// const { Router } = require('express');

// // notes: implemented lazy loading for association requests (like getUserByOrganization).
// // This implies that if we want to know all the data about all the users in an organization,
// // we have to first give a frontend query to get all user ids, and then process another frontend query
// // to get all the info for all the user ids. Basically, the new routing is done on the frontend.

// // implement leader.json
// // implement POST for association tables

// // not being used:

//  // router.get('/test/:testId', controllers.test.getTestById)
//     // router.get('/test', controllers.test.getAllTest)
//     // router.post('/test', controllers.test.createTest)
//     // router.put('/test/:testId', controllers.test.updateTest)
//     // router.delete('/test/:testId', controllers.test.deleteTest)

//     // router.get('/leader/action/:leaderId', controllers.leader.getLeaderActionByLeader)

//     // router.get('/replies/:userId', controllers.replies.getRepliesByUser)
//     // router.get('/replies/:viewpointId', controllers.replies.getRepliesByViewpoint)

//     // router.get('/tags/:issueId', controllers.tag.getTagsByIssue)
//     // router.get('/issues/:tagId', controllers.issue.getIssuesByTag)
//     // router.post('/issues/:issueTagObj', controllers.issue.addTag)
//     // router.delete('/issues/:issueTagObj', controllers.issue.deleteTag)

//     // router.get('/replies/:replyId', controllers.reply.getReplyById)
//     // router.post('/replies/:replyObj', controllers.reply.createReply)
//     // router.put('/replies/:replyObj', controllers.reply.updateReply)
//     // router.delete('/replies/:replyId', controllers.reply.deleteReply)

//     // router.get('/leaderAction/:leaderActionId', controllers.leaderAction.getLeaderActionById)
//     // router.post('/leaderAction', controllers.leaderAction.createLeaderAction)
//     // router.put('/leaderAction/:leaderActionId', controllers.leaderAction.updateLeaderAction)
//     // router.delete('/leaderAction/:leaderActionId', controllers.leaderAction.deleteLeaderAction)

// module.exports = function(server,controllers) {
//     const router = Router();
//     router.get('/', (req, res) => res.send('Welcome'))

//     //done

//     //for post and update: make sure associations can be posted/updated too

//     router.get('/user/:userId', controllers.user.getUserById)
//     router.post('/user', controllers.user.createUser)
//     router.put('/user/:userId', controllers.user.updateUser)
//     router.delete('/user/:userId', controllers.user.deleteUser)
//     router.get('/user/organization/:organizationId', controllers.user.getUserIdByOrganization)

//     router.get('/profile/:profileId', controllers.profile.getProfileById)
//     router.post('/profile', controllers.profile.createProfile)
//     router.put('/profile/:profileId', controllers.profile.updateProfile)
//     router.delete('/profile/:profileId', controllers.profile.deleteProfile)

//     router.get('/leader/:leaderId', controllers.leader.getLeaderById)
//     router.post('/leader', controllers.leader.createLeader)
//     router.put('/leader/:leaderId', controllers.leader.updateLeader)
//     router.delete('/leader/:leaderId', controllers.leader.deleteLeader)
//     router.get('/leader/organization/:organizationId', controllers.leader.getLeaderIdByOrganization)

//     router.get('/organization/:organizationId', controllers.organization.getOrganizationById)
//     router.post('/organization', controllers.organization.createOrganization)
//     router.put('/organization/:organizationId', controllers.organization.updateOrganization)
//     router.delete('/organization/:organizationId', controllers.organization.deleteOrganization)
//     //router.get('/organization/leader/:leaderId', controllers.organization.getOrganizationByLeader)
//     //router.get('/organization/user/:userId', controllers.organization.getOrganizationByUser)

//     router.get('/issue/:issueId', controllers.issue.getIssueById)
//     router.post('/issue', controllers.issue.createIssue)
//     router.put('/issue/:issueId', controllers.issue.updateIssue)
//     router.delete('/issue/:issueObj', controllers.issue.deleteIssue)
//     //router.get('/issue/organization/:organizationId', controllers.issue.getIssueByOrganization)

//     router.get('/viewpoint/:viewpointId', controllers.viewpoint.getViewpointById)
//     router.post('/viewpoint', controllers.viewpoint.createViewpoint)
//     router.put('/viewpoint/:viewpointId', controllers.viewpoint.updateViewpoint)
//     router.delete('/viewpoint/:viewpointId', controllers.viewpoint.deleteViewpoint)
//     //router.get('/viewpoint/issue/:issueId', controllers.viewpoint.getViewpointByIssue)
//     //router.get('/viewpoint/user/:userId', controllers.viewpoint.getViewpointByUser)

//     router.get('/rawVote/:voteId', controllers.rawVote.getRawVoteById)
//     router.post('/rawVote', controllers.rawVote.createRawVote)
//     router.put('/rawVote', controllers.rawVote.createRawVote)
//     router.delete('/rawVote/:voteId', controllers.rawVote.deleteRawVote)
//     //router.get('/rawVote/user/:userId', controllers.rawVote.getRawVoteByUser)
//     //router.get('/rawVote/viewpoint/:viewpointId', controllers.rawVote.getRawVoteByViewpoint)

//     router.get('/census/:personId', controllers.census.getCensusById)

//     return router;
// }
