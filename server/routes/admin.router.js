const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const {
//     rejectUnauthenticated,
//   } = require('../modules/authentication-middleware');

/**
 * GET route admin
 */
router.get('/', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "session"`)
    .then((results) =>
     res.send(results.rows))
     .catch((error) => {
         console.log('Error making GET request:', error);
         res.sendStatus(500);
     });
});

// router.post('/', rejectUnauthenticated, (req, res) => {
//     const newSubmission = req.body;
//     console.log('The new rec is', newSubmission);
//     const queryText = //need to write SQL query
//         pool.query(queryText,) //need to add req.body info here as well
//             .then(result => {
//                 res.sendStatus(201);
//             }).catch(error => {
//                 console.log('error with post to db', error);
//                 res.sendStatus(500);
//             })

// });

module.exports = router;