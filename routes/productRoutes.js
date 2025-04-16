const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const { id, name, data } = req.body;

  try {
    const newProduct = new Product({ id, name, data });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;