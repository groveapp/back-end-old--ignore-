// module.exports = function(logger, models) {

//     const RawVote = models.RawVote;

// return {
//     getRawVoteById: async (req, res, next) => {
//         const {rawVoteId} = req.params;
//         await RawVote.findOne({where: {id: rawVoteId}}).then( rawVote => {
//             res.send( {rawVote} )
//         }).catch(next)
//     },
//     getAllRawVote: async (req, res, next) => {
//         const {rawVoteId} = req.params;
//         await RawVote.findAll().then( rawVote => {
//             res.send( {rawVote: rawVote.map( v => {return {id: v.id, name: v.name}})} );
//         }).catch(next)
//     },
//     createRawVote: async (req, res, next) => {
//             const rawVote = await RawVote.create(
//                 req.body
//                 ).then(
//             rawVote => {res.send( {rawVote} )} ).catch(next)
//     },
//     updateRawVote: async (req, res, next) => {

//             const {rawVoteId} = req.params;
//             const [updated] = await RawVote.update(req.body, {where: {id: rawVoteId}}).then(
//                 updated => {res.send( {updated} )}).catch(next)
//     },
//     deleteRawVote: async (req, res, next) => {
//             const {rawVoteId} = req.params;
//             const deleted = await RawVote.destroy(
//                 {where: { id: rawVoteId}}
//                 ).then(
//             rawVote => {res.send( {rawVote} )} ).catch(next)
//     },
// }


// }
