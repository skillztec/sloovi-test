const express = require('express');
const router = express.Router();
const taskSchemaCopy = require('../../models/Task');
// const TaskSchema = require('../../models/Task');


//Post req route, creates tassk
router.post('/', (req, res) => {
  res.send("Thums-up, Task Created!!!");

  if ((!author, !discription || !task_date || !task_time)) {
    res.send.status(404).json({ msg: "Please enter the task details!" });
  }
  const { author, discription, task_date, task_time } = req.body;
  if(req.body.length > 0) {
    // res.status(201).send.json({
    //   author: req.body,
    //   discription:req.body,
    //   task_date: req.body,
    //   task_time: req.body

    res.json(req.body)
      .then(data => {
        res.json(data);
        console.log("SLOOVI TASK POST BODY REQUEST ====>", data);
      })
      .catch((error) => {
        console.log(error);
        res.json(error.message);
      });
    }
  // const slooviTask = new taskSchemaCopy({
  //   author: req.body.author,
  //   discription: req.body.discription,
  //   task_date: req.body.task_date,
  //   task_time: req.body.task_time,
  //   // is_completed: false,
  //   // is_created: false,
  // });

  //   slooviTask.save()
  //     .then((data) => {
  //       res.json(data);
  //       res.send
  //         .status(200)
  //         .json({ msg: "Congratulations, Your has been created successfully!" });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       res.json(error.message);
  //     });
  // });

  // //Get req route, updates task
  // router.post('/', (req, res) => {
  //   res.send.status(200).json({msg: 'Successfully Retrieved Task!'});
  // });

  // //Delete req route for task
  // router.patch('/', (req, res) => {
  //   res.send('Task Deleted!');
});

module.exports = router;