const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  head:      { type: String, required: true, trim: true },
  contact:   { type: String, trim: true },
  logoUrl:   { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Society', societySchema);
