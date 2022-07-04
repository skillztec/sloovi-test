const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  author: { type: String, required: true },
  discription: { type: String, required: true },
  task_date: { type: Date, default: "", required: true},
  task_time: { type: String, default: "", required: true },
  is_completed: { type: Boolean, default: false },
  is_created: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('tasks', taskSchema);