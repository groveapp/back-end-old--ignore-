// const createPost = async (req, res) => {
//   try {
//     const post = await dbModels.Post.create(req.body);
//     return res.status(201).json({
//       post,
//     });
//   } catch (error) {
//     return res.status(500).json({error: error.message})
//   }
// }

// const getUserById = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const user = await dbModels.User.findOne({
//             where: { id: userId },
//             include: [
//                 {
//                     model: dbModels.Viewpoints,
//                     as: 'viewpoints'
//                 }
//             ]
//         });
//         if (user) {
//             return res.status(200).json({ user });
//         }
//         return res.status(404).json('try again')
//     } catch (error) {return res.status(500).send(error.message)}
// }

// const getTestById = async (req, res) => {
//     try {
//         const { testId } = req.params;
//         const user = await dbModels.Test.findOne({
//             where: { id: testId },
//         });
//         if (test) {
//             return res.status(200).json({ test });
//         }
//         return res.status(404).json('try again')
//     } catch (error) {return res.status(500).send(error.message)}
// }

// // const getLeaderById = async (req, res) => {
// //     try {
// //         const { userId } = req.params;
// //         const user = await dbModels.User.findOne({
// //             where: { id: userId },
// //             include: [
// //                 {
// //                     model: dbModels.Viewpoints,
// //                     as: 'viewpoints'
// //                 }
// //             ]
// //         });
// //         if (user) {
// //             return res.status(200).json({ post });
// //         }
// //         return res.status(404).json('try again')
// //     } catch (error) {return res.status(500).send(error.message)}
// // }

// module.exports = {
// //   createPost,
// //   getUserById,
//   getTestById
// }


const test = require('./test.js');


module.exports = function(logger, models) {

	return Promise.resolve( {
		test: test(logger, models)
	});
}
