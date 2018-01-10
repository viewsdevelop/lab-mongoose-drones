// Students are often confused about Seeds file.
// Program within your application that you run separately and only pre-loads database with information.

// Iteration #1
const mongoose  = require('mongoose');
const Drone     = require('../models/drone');
const db        = mongoose.connect('mongodb://localhost/drones-dev');


const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];


// Create method is designed to accomodate BULK CREATIONS
Drone.create(droneData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Drones saved to database.`);
        db.connection.close()
    }
}); 

// const droneSet = new Drone(droneData);

// droneSet.save(function (err) {
//     if (err) {
//     console.log(err);
//     } else {
//     console.log(`Drones saved to database.`);
//     db.connection.close()
//     }
// });