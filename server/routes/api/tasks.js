const express = require('express');
const router = express.Router();

//Post req route, creates tassk
router.post('/', (req, res) => {
  res.send.status(201).json({msg: 'Thums-up, Task Created!'});
});

//Get req route, updates task
router.post('/', (req, res) => {
  res.send.status(200).json({msg: 'Successfully Retrieved Task!'});
});

//Delete req route for task
router.patch('/', (req, res) => {
  res.send('Task Deleted!');
});

module.exports = router;