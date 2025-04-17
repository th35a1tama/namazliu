var express = require('express');
var router = express.Router();
// const prayerTimeService = require('../services/prayerTimeService'); // Will uncomment later

/* GET prayer times page. */
router.get('/', function(req, res, next) {
  // TODO: Get location from query params or default
  // TODO: Call prayerTimeService.getPrayerTimes
  // TODO: Render the times.pug view with data
  res.send('Prayer times route - placeholder'); // Placeholder response
});

module.exports = router; 