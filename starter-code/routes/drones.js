const express = require('express');

// require the Drone model here
const Drone     = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2

  Drone.find({}, (err, droneItems) => {
    if (err) {
      next(err);
    } else {
      res.render('drones/drone-index', { droneList: droneItems });
      // res.locals.droneItems = droneItems;
      // res.render('index');
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  
  let newDrone    = new Drone({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }); 

  newDrone.save((err) => {
    if (err) {
      next(err);
      // console.log(err);
      return;
    } 
  
    // Illustrate to students why this is not a viable solution
    // Leads to multiple form submissions, which leads to duplicate data
    // res.render('index');
    
    res.redirect('/drones');
  });
});

module.exports = router;