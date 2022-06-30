const express = reqiure('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema.create({
  author: {type: String, required: true},
  discription: {type: String, required: true},
  task_date: {type: Date, default: '', required: true},
  task_time: {type: Time, default: '', required: true},
  is_completed: {type: false},
  is_created: {type: false},
  createdAt: {type: String, default: Date.now()}
});

module.exports = mongoose.TaskSchema('User', TaskSchema);