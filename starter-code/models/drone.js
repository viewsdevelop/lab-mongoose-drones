const mongoose = require('mongoose');

// Not necessary because it's been handled in the main application file, app.js
// mongoose.connect('mongodb://localhost/drones-dev');

// Mongoose document assumes that you have set up your code structure this way. 
const Schema   = mongoose.Schema;

const droneSchema = new Schema({
  name : { type: String, required: [true, 'Name is required'] },
  propellers: Number,
  maxSpeed  : Number
});

const Drone = mongoose.model('Drone', droneSchema);

// Explicitly state what you will get when you require this Drone model file.
// In Node, you may only export ONE object.
module.exports = Drone;
