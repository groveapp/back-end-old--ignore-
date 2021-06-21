// module.exports = function(logger, models) {

//     const Viewpoint = models.Viewpoint;

// return {
//     getViewpointById: async (req, res, next) => {
//         const {viewpointId} = req.params;
//         await Viewpoint.findOne({where: {id: viewpointId}}).then( viewpoint => {
//             res.send( {viewpoint} )
//         }).catch(next)
//     },
//     getAllViewpoint: async (req, res, next) => {
//         const {viewpointId} = req.params;
//         await Viewpoint.findAll().then( viewpoint => {
//             res.send( {viewpoint: viewpoint.map( v => {return {id: v.id, name: v.name}})} );
//         }).catch(next)
//     },
//     createViewpoint: async (req, res, next) => {
//             const viewpoint = await Viewpoint.create(
//                 req.body
//                 ).then(
//             viewpoint => {res.send( {viewpoint} )} ).catch(next)
//     },
//     updateViewpoint: async (req, res, next) => {

//             const {viewpointId} = req.params;
//             const [updated] = await Viewpoint.update(req.body, {where: {id: viewpointId}}).then(
//                 updated => {res.send( {updated} )}).catch(next)
//     },
//     deleteViewpoint: async (req, res, next) => {
//             const {viewpointId} = req.params;
//             const deleted = await Viewpoint.destroy(
//                 {where: { id: viewpointId}}
//                 ).then(
//             viewpoint => {res.send( {viewpoint} )} ).catch(next)
//     },
// }


// }
