var express = require('express');
var router = express.Router();



/* GET home. */
router.get('/', function(req, res, next) {
  res.render('index')
});

/* GET individual survey data. */
router.get('/surveys', function(req, res, next) {
  const response = {
    surveys: [
      {
        id: 0,
        user: 'Faizan Tariq',
      }
    ]
  }
  res.send(response);
});

/* POST Review Response */
router.post('/addreviewresponse', function(req, res, next) {
  console.log(req.body)  
  const { body } = req;
  res.statusCode(500)
  // body.id ? res.send('Added review to database.') : res.status(500)
});

module.exports = router;
