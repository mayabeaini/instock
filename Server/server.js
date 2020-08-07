const express = require('express');
const app = express();
const cors = require('cors');
const uuid = require('uuid');

app.use(cors(),
  express.json(),
  express.urlencoded({ extended: true })
);

// Import data from server JSON files
const inventory = require('../Server/data/inventory.json');
const warehouses = require('../Server/data/locations.json');

// All warehouse HTTP verbs are in ./routes/warehouses.js
const WHroutes = require('./routes/warehouses');
app.use('/warehouses', WHroutes)

// GETs all inventory items
// GETs inventory for a specific warehouse
// POSTs new inventory items to array
app.route('/inventory')
  .get((req, res) => {
    if (req.params.id) {
      const warehouseInventory = warehouses.filter(warehouse => (req.params.id === warehouse.id));
      res.status(200).json(warehouseInventory);
    } else {
      res.status(200).json(inventory);
    }
  })
  .post((req, res) => {
    const random = uuid.v4();
    const item = {
      id: random,
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      lastOrdered: req.body.lastOrdered,
      city: req.body.city,
      country: req.body.country,
      isInstock: req.body.isInstock
    }
    if (req.body.name && req.body.city && req.body.country) {
      inventory.push(item);
      res.json(item);
    } else {
      res.status(400).send({
        success: false,
        message: "Please fill all entries",
      });
    }
  })


app.route('/inventory/:id')
  .get((req, res) => {
    const id = req.params.id
    const picked = inventory.find(o => o.id === id)
    if (picked == undefined || null) {
      res.status(404).send({
        success: false,
        message: "ID not found",
      });
    } else {
      res.json(picked)
    }
  })
  .delete((req, res) => {
    const id = req.params.id
    const picked = inventory.find(o => o.id === id)
    for( let i = 0; i < inventory.length; i++)
    { if ( inventory[i] === picked) { inventory.splice(i, 1); }}
    res.json(inventory)
  })

app.listen(8080, () => {
  console.info('Listening on port 8080')
})
