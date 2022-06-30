const express = reqiure('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema.create({
  _id: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  photo_url: {type: String, required: true},
  createdAt: {type: String, default: Date.now()}
});

module.exports = mongoose.TaskSchema('User', UserSchema);