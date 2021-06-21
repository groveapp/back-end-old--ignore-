// //done

// module.exports = function(logger, models) {

//     const Census = models.Census;

// return {
//     getCensusById: async (req, res, next) => {
//         const {censusId} = req.params;
//         await Census.findOne({where: {id: censusId}}).then( census => {
//             res.send( {census} )
//         }).catch(next)
//     },
//     getAllCensus: async (req, res, next) => {
//         const {censusId} = req.params;
//         await Census.findAll().then( census => {
//             res.send( {census: census.map( v => {return {id: v.id, name: v.name}})} );
//         }).catch(next)
//     },
//     createCensus: async (req, res, next) => {
//             const census = await Census.create(
//                 req.body
//                 ).then(
//             census => {res.send( {census} )} ).catch(next)
//     },
//     updateCensus: async (req, res, next) => {

//             const {censusId} = req.params;
//             const [updated] = await Census.update(req.body, {where: {id: censusId}}).then(
//                 updated => {res.send( {updated} )}).catch(next)
//     },
//     deleteCensus: async (req, res, next) => {
//             const {censusId} = req.params;
//             const deleted = await Census.destroy(
//                 {where: { id: censusId}}
//                 ).then(
//             census => {res.send( {census} )} ).catch(next)
//     },
// }


// }
