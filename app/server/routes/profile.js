// module.exports = function(logger, models) {

//     const Profile = models.Profile;
//     const User = models.User;

// return {
//     getProfileById: async (req, res, next) => {
//         const {profileId} = req.params;
//         await Profile.findOne({where: {id: profileId}}).then( profile => {
//             res.send( {profile} )
//         }).catch(next)
//     },
//     createProfile: async (req, res, next) => {
//             const profile = await Profile.create(
//                 req.body
//                 ).then(
//             profile => {res.send( {profile} )} ).catch(next)
//     },
//     updateProfile: async (req, res, next) => {

//             const {profileId} = req.params;
//             const [updated] = await Profile.update(req.body, {where: {id: profileId}}).then(
//                 updated => {res.send( {updated} )}).catch(next)
//     },
//     deleteProfile: async (req, res, next) => {
//             const {profileId} = req.params;
//             const deleted = await Profile.destroy(
//                 {where: { id: profileId}}
//                 ).then(
//             profile => {res.send( {profile} )} ).catch(next)
//     },
// }


// }
