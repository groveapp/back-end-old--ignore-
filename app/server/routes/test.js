// module.exports = function(logger, models) {

// const Test = models.Test;

// return {
//     getTestById: async (req, res, next) => {
//         const {testId} = req.params;
//         await Test.findOne({where: {id: testId}}).then( test => {
//             res.send( {test} );
//             console.log(test.dataValues.name)
//         }).catch(next)
//     },
//     getAllTest: async (req, res, next) => {
//         const {testId} = req.params;
//         await Test.findAll().then( test => {
//             res.send( {test: test.map( v => {return {id: v.id, name: v.name}})} );
//         }).catch(next)
//     },
//     createTest: async (req, res, next) => {
//             const test = await Test.create(
//                 req.body
//                 ).then(
//             test => {res.send( {test} )} ).catch(next)
//     },
//     updateTest: async (req, res, next) => {

//             const {testId} = req.params;
//             const [updated] = await Test.update(req.body, {where: {id: testId}}).then(
//                 updated => {res.send( {updated} )}).catch(next)
//     },
//     deleteTest: async (req, res, next) => {
//             const {testId} = req.params;
//             const deleted = await Test.destroy(
//                 {where: { id: testId}}
//                 ).then(
//             test => {res.send( {test} )} ).catch(next)
//     },
// }

// // return {
// //     getTestById: async (req, res, next) => {
// //         try{
// //         const {testId} = req.params;
// //         await Test.findOne({where: {id: testId}}).then( test => {
// //             res.send( {test} );
// //             if (test) {return res.status(404).json('oops, id is nonexistent')}
// //             return next();
// //         });
// //         } catch(error) {return next(error)}
// //         // try {
// //         //     const { testId } = req.params;
// //         //     const test = models.Test.findOne({
// //         //         where: { id: testId },
// //         //     });
// //         //     if (test) {
// //         //         return res.status(200).json({ test });
// //         //     }
// //         //     return res.status(404).json('try again')
// //         // } catch (error) {return res.status(500).send(error.message)}
// //     },
// //     getAllTest: async (req, res, next) => {
// //         try{
// //         const {testId} = req.params;
// //         await Test.findAll().then( test => {
// //             res.send( {test: test.map( v => {return {id: v.id, name: v.name}})} );
// //             return next();
// //         });
// //         } catch(error) {return next(error)}
// //     },
// //     createTest: async (req, res, next) => {
// //         try {
// //             const test = await Test.create(
// //                 req.body
// //                 ).then(
// //             test => {res.send( {test} )} );
// //         } catch(error) {return next(error)}
// //     },
// //     updateTest: async (req, res, next) => {
// //         try {
// //             const {testId} = req.params;
// //             const [updated] = await Test.update(req.body, {where: {id: testId}});
// //             res.send( {updated} );
// //             return next();
// //         } catch(error) {return next(error)}
// //     },
// //     deleteTest: async (req, res, next) => {
// //         try {
// //             const {testId} = req.params;
// //             const deleted = await Test.destroy(
// //                 {where: { id: testId}}
// //                 ).then(
// //             test => {res.send( {test} )} );
// //         } catch(error) {return next(error)}
// //     },
// // }



// }



