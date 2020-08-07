const express = require("express");
const router = express.Router();
const warehouses = require('../data/locations.json');
const tempData = warehouses;

// GETs all warehous locations
router.get("/", function (_req, res, next) {
  res.json(tempData);
  next();
});

// GETs the information for a specific warehouse based on its ID
router.get('/:id', (req, res, next) => {
  if (req.params.id) {
    const selectedWarehouse = warehouses.filter(warehouse => (req.params.id === warehouse.id))
    if (selectedWarehouse[0]) {
      res.send(selectedWarehouse[0]);
    } else {
      res.status(204).send({ response: `No information found for warehouse ID: ${req.params.id}` })
    }
  } else {
    res.status(404).send({ response: `No warehouse with ID ${req.params.id} was found.` })
  }
  next();
})

// TODO: implement delete functionality for when the user is on a specific warehouse page
// Does not work currently because the URL is not the same as what the current delete functionality expects
// router.delete()

// router.get("/warehouse/:id", function (req, res, next) {
//   const id = req.params.id;
//   const location = tempData.find((location) => location.id === id);
//   res.json(location);
// });

//POSTs new warehouse and returns entire list of warehouses
router.post("/", function (req, res, next) {
  tempData.push(req.body);
  res.json(tempData);
});

module.exports = router;
