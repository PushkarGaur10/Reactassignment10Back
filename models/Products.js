const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  data: { type: Object, default: null },
});

module.exports = mongoose.model('Product', productSchema);