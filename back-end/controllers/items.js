const { Router } = require('express');

const itemsModel = require('../models/item');

const router = Router();  

router.get('/', async(_req, res) => {
  const items = await itemsModel.getAll();
  res.status(200).json(items);
});

module.exports = router;
