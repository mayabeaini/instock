const express = require('express');
const router = express.Router();
const data = require('../../Client/src/Data/locations.json');


router.get('/', function(req, res, next) {
  res.json(data)
});

router.get('/:id', function(req, res, next){
  const id = req.params.id;
  const location = data.find(location => location.id === id)
  res.json(location)
})



module.exports = router;
